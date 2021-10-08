const vscode = require('vscode')
const logicorCompletions = require('../logicor_defs').completions
const needleCompletions = require('../needle_defs').completions
const getTag = require('../fun/helpers').getTag
const getLastWord = require('../fun/helpers').getLastWord
const getParams = require('../fun/helpers').getParams

class CompleteProvider {
    constructor(type) {
        this.type = type
        if (type === 'needle') {
            this.completions = needleCompletions
            this.varMatch = /\$(\w+)[\s,]|var\s/g
        }
        if (type === 'logicor') {
            this.completions = logicorCompletions
            this.varMatch = /#\w+#/g
        }
        this.completionsKeys = Object.keys(this.completions)
        this.completes = []

    }
    provideCompletionItems(document, position) {
        const text = document.lineAt(position.line).text,
            currentText = text.substr(0, position.character),
            items = []
        const tag = getTag(currentText)
        const word = getLastWord(currentText)

        if (tag) {
            const params = getParams(tag, text)
            this.completionsKeys.forEach(key => {
                if (key === tag) { // Element complete - params helper
                    this.completions[key].params.forEach(it => {
                        if (params.indexOf(it.label) < 0) { // not repeat params
                            items.push(new vscode.CompletionItem(it.insertText))
                        }
                    })
                }
            })

        }
        if (word) {
            this.completionsKeys.forEach(key => {
                if (key.indexOf(word) > -1) { // Element NOT complete - element helper
                    items.push(new vscode.CompletionItem(this.completions[key].insertText))
                }
            })
        }


        document.getText(document.getWordRangeAtPosition(position))
            .split(/[\s,:"'`\][(><)=]+/) // get str tokens
            .map(w => w.match(this.varMatch) ? w : null)
            .filter(w => w)
            .forEach(v => {
                if (this.completes.indexOf(v) < 0) {
                    this.completes.push(v)
                }
            })
        this.completes.forEach(c => {
            if (c.length > 3) {
                let item = new vscode.CompletionItem(c)
                // item.detail = c
                // item.filterText = c
                item.insertText = c
                items.push(item)
            }
        })


        return new vscode.CompletionList(items)
    }
}

module.exports = CompleteProvider