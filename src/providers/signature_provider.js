const vscode = require('vscode')
const logicorCompletions = require('../logicor_defs').completions
const needleCompletions = require('../needle_defs').completions
const getTag = require('../fun/helpers').getTag

class SignatureProvider {
    constructor(type) {
        if (type === 'needle') {
            this.completions = needleCompletions
            this.completionPattern = /(\w+)/i
        }
        if (type === 'logicor') {
            this.completions = logicorCompletions
            this.completionPattern = /([A-Z]\w+)/i
        }
        this.completionsKeys = Object.keys(this.completions)
    }
    provideSignatureHelp(document, position) {
        const text = document.lineAt(position.line).text
        const currentText = text.substring(0, position.character).replace(/[A-Z]\w+\([^(]+?\)/, '')
        const word = getTag(currentText)
        const items = []
        // console.log(word)
        if (word) {
            let match = false
            this.completionsKeys.forEach(key => {
                if (key === word) {
                    match = true
                    const it = this.completions[key]
                    const sign = new vscode.SignatureInformation(it.label)
                    if (it.documentation) {
                        sign.documentation = it.documentation
                    }
                    items.push(sign)
                }
            })
            this.completionsKeys.forEach(key => {
                if (!match && key.indexOf(word) > -1) {
                    const it = this.completions[key]
                    const sign = new vscode.SignatureInformation(it.label)
                    if (it.documentation) {
                        sign.documentation = it.documentation
                    }
                    items.push(sign)
                }
            })
        }
        const help = new vscode.SignatureHelp()
        help.signatures = items
        help.activeSignature = 0
        return help
    }
}
module.exports = SignatureProvider