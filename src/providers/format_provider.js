const vscode = require('vscode')
const getLastWord = require('../fun/helpers').getLastWord

class SimpleFormatProvider {
    provideDocumentFormattingEdits(document, options) {
        return this.format(0, document.lineCount, document, options)
    }

    provideDocumentRangeFormattingEdits(document, range, options) {
        return this.format(range.start.line, range.end.line, document, options)
    }
    format(start, end, text, options) {
        this.offset = 0
        this.tabs = 0
        const countLines = text.lineCount

        if (text.lineAt(0).text.match(/^\s*\{/)) return // do not format json
        try {
            const lines = []
            let isCode = false
            let isStringLiteral = false
            let isStringLiteral2 = false
            let bracesStack = []
            for (let i = 0; i < countLines; i++) {
                let line = text.lineAt(i).text
                let lineLen = line.length
                if (this.commentLine.test(line)) continue
                isCode = this.checkIsCode(line, bracesStack, isCode)

                if (this.tabs < 0) this.tabs = 0
                for (let a = 0; a < line.length; a++) {
                    if (!isStringLiteral2 && line.charAt(a) == '"') {
                        isStringLiteral = !isStringLiteral
                    } else if (!isStringLiteral && line.charAt(a) == '`') {
                        isStringLiteral2 = !isStringLiteral2
                    }

                    if (!this.commentLine.test(line.substring(a))) {
                        if (!(isStringLiteral || isStringLiteral2)) {
                            let tail = line.substring(a)
                                .replace(this.commaSpace, '$1$2')
                                .replace(this.beforeOpenedBrace, '$1$2')
                                .replace(this.beforeClosedBrace, '$1$2')
                                .replace(this.openedSquare, '$1')
                                .replace(this.closedSquare, '$1')
                                .replace(this.openedBrace, '$1')
                                .replace(this.closedBrace, '$1')
                            if (this.type !== 'logicor') {
                                tail = tail.replace(this.mathTokens, '$1 $2 ')
                                    .replace(this.dTokens, '$1 $2 ')
                                    .replace(this.sTokens, '$1 $2 $3')
                                    .replace(this.neqToken, '$1 $2 ')
                            }
                            tail = tail.replace(this.doubleSpaces, '$1')
                            line = line.substring(0, a) + tail
                        }
                    }
                }
                if (!(isStringLiteral || isStringLiteral2)) {
                    line = line.trim()
                }

                line = this.fixSyntax(line)


                let testLine = line.replace(this.strings, '')
                if (!this.commentLine.test(testLine)) {
                    if (this.hasClosedBrace.test(testLine)) {
                        this.tabs--
                    }
                }


                let spaceLength = (this.tabs - this.offset) * options.tabSize + 1
                let padLeft = spaceLength >= 0 ? new Array(spaceLength).join(' ') : ''
                line = padLeft + line.trim()
                line = line.replace(this.newLineBlock, '$1\n' + padLeft + '$2')
                line = line.replace(this.newLineBlock2, '$1\n' + padLeft + '$2')

                testLine = line.replace(this.strings, '')
                // if (!this.commentLine.test(testLine)) {
                if (this.hasOpenBrace.test(testLine)) {
                    ++this.tabs
                    if (this.notClosedBrace.test(testLine)) {
                        ++this.tabs
                    }
                }
                // }
                isCode = this.checkIsCode(line, bracesStack, isCode)
                if (i >= start && i <= end) {
                    if (this.emptyLine.test(line)) {
                        line = ''
                    }
                    lines.push(new vscode.TextEdit(new vscode.Range(i, 0, i, lineLen), line))
                }
            }
            return lines
        } catch (e) {
            // console.log(e)
        }
    }

    checkIsCode(line, bracesStack, isCode) {
        for (let l = 0; l < line.length; l++) {
            let c = line.charAt(l)
            if (c === '(') {
                if (!isCode) {
                    let lastWord = getLastWord(line.substring(0, l))
                    isCode = lastWord === 'Code'
                    if (isCode) {
                        this.offset = this.tabs
                    }
                }
                if (isCode) {
                    bracesStack.push(c)
                }
            } else if (c === ')') {
                if (isCode) {
                    if (bracesStack[bracesStack.length - 1] === '(') {
                        bracesStack.pop()
                    }
                    isCode = bracesStack.length > 0
                }
            }
        }
        if (!isCode) {
            this.offset = 0
        }
        return isCode
    }

    fixSyntax(line) {
        if (this.type === 'logicor') {
            this.logicorRules.forEach(rule => line = line.replace(rule.pattern, rule.fix))
        }
        if (this.type === 'needle') {
            this.needleRules.forEach(rule => line = line.replace(rule.pattern, rule.fix))
        }
        return line
    }
    constructor(type) {
        this.hasClosedBrace = /^\s*([})\]]).*/
        this.hasOpenBrace = /[{([](:?\s|\/\/.*)*$/

        this.commaSpace = /^\s*(,)(\s)*/
        this.beforeOpenedBrace = /^(\s)+(\()\s*/
        this.beforeClosedBrace = /^\s*(\))(\s)*/
        this.doubleSpaces = /^(\s)+/
        this.openedSquare = /^(\[)\s+/
        this.closedSquare = /^\s+(\])/
        this.openedBrace = /^(\()\s+/
        this.closedBrace = /^\s+(\))/
        this.mathTokens = /^([^\s])([+/*-])/
        this.dTokens = /^([^\s])(==|<=|>=|!=)/
        this.sTokens = /^([^\s!=<>])([=<>])([^=])/
        this.commentLine = /^\s*\/\/.*$/
        this.notClosedBrace = /[^}]*\}$/
        this.strings = /".*?"/g
        this.emptyLine = /^\s+$/

        this.newLineBlock = /([)}])(Div|Button|Table|Form|Image|ImageInput|Input|InputErr|LinkPage|MenuGroup|MenuItem|P|RadioGroup|Select|EcosysParam|DBFind)/g
        this.newLineBlock2 = /([({])(If)/g
        this.offset = 0
        this.tabs = 0
        this.type = type
        this.globalTablesPattern = /(DBFind|DBUpdate|DBInsert)\(\s*"?(keys|history|languages|sections|menu|pages|blocks|signatures|contracts|parameters|tables|app_params|notifications|roles|roles_participants|members|applications|binaries|buffer_data|ecosystems|system_parameters|voting_templates|votings|votings_participants|votings_subject)"?/

        this.logicorRules = [{
            pattern: /^Divs:?\(?([\w-\s]+)\)?$/, // Divs: a | Divs(a)
            fix: 'Div($1){'
        },
        {
            pattern: /^Divs\(([\w-\s]+?),(.+)\)$/, // Divs (a,b)
            fix: 'Div($1){Div($2){'
        },
        {
            pattern: /^Tag\(([\w-\s]+?),(.+)\)$/, // Divs (a,b)
            fix: 'Div($1){$2}'
        },
        {
            pattern: /^(Form\(.*?\))$/, // Form ()
            fix: '$1{'
        },
        {
            pattern: /^PageEnd:$/,
            fix: ''
        },
        {
            pattern: /^.+End:$/, // *End:
            fix: '}'
        },
        {
            pattern: /^If\s*\((.+)\)$/, // If(a)
            fix: 'If($1){'
        },
        {
            pattern: /^(Else):$/, // Else(a)
            fix: '}.$1{'
        },
        { // GetRow(prefix, table, colname, [value])
            pattern: /GetRow\(\s*(["\w-]+?)\s*,\s*#state_id#_([\w]+?)\s*,\s*"?([\w-]+?)"?\s*,\s*([#\w-]+?)\)/,
            fix: 'DBFind(Name: $2, Source: src_$2).Where("$3=$4").Vars($1)'
        },
        { // GetRow(prefix, table, cols)
            pattern: /GetRow\(\s*(.+?)\s*,\s*#state_id#_([\w]+?)\s*,\s*"(.*?)"\)/,
            fix: 'DBFind(Name: $2, Source: src_$2).Where("$3").Vars($1)'
        },
        { // StateVal(name, [index])
            pattern: /StateVal\(\s*([\w-]+?)\s*,\s*([#\w-]+)\s*\)/,
            fix: 'EcosysParam(Name: $1, Index: $2)'
        },
        { // StateVal(name)
            pattern: /StateVal\(([\w-]+?)\)/,
            fix: 'EcosysParam(Name: $1)'
        },
        { // ValueById(table,idval,columns,[aliases])
            pattern: /ValueById\(\s*#state_id#_([\w]+?)\s*,\s*(.+?),(.*)\)$/,
            fix: 'DBFind(Name: $1, Source: src_$1).WhereId($2)\n$3'
        },
        { // SetVar(a=b)
            pattern: /SetVar\("?([\w]+?)=([\w]+?)"?\)/,
            fix: 'SetVar(Name: $1, Value: $2)'
        },
        { // Input(idname,[class],[placeholder],[type],[value])
            pattern: /Input\((\w+?)\s*,\s*("[\w\s-]+?")\s*,\s*(\w+?)\s*,\s*(\w+?)\s*,\s*([#\w]+?)\)/,
            fix: 'Input(Name: $1, Class: $2, Placeholder: $3, Type: $4, Value: $5)'
        },
        {
            pattern: /^Title:([\w\s]+)$/,
            fix: 'SetTitle($1)'
        },
        {
            pattern: /^Navigation\((.+)\)$/,
            fix: 'Div(breadcrumb){Div(){$1}}'
        },
        {
            pattern: /^Title:([\w\s$]+)$/,
            fix: 'SetTitle($1)'
        },
        { //BtnPage
            pattern: /BtnPage\s*\(([\s\w$"]+?),([\s\w$"]+?),([\s\w$"]+?),([\s\w$"-]+?)\)/,
            fix: 'Button(Page: $1, Body: $2, PageParams: $3, Class: $4)'
        },
        { //BtnContract(contract, name, message, params, [class], [onsuccess], [pageparams])
            pattern: /BtnContract\s*\(([\s\w$"]+?),([\s\w$")(-]+?),([\s\w$"]+?),([\s\w$"#:]+?),([\s\w$"'-]+?),([\s\w$"]+?),([\s\w$"]+?)\)/,
            fix: 'Button(Contract: $1, Body: $2, Params: $4, Class: $5, Page: $6, PageParams: $7).Alert($3, confirm, cancel)'
        },
        { // fix langres on  button alert
            pattern: /(\.Alert.*?)LangRes\((\w+)\)(.*?)LangRes\((\w+)\)(.*?)LangRes\((\w+)\)(.*?\))$/g,
            fix: '$1$$$2$$$3$$$4$$$5$$$6$$$7'
        },
        { // pages: only first system tables 
            pattern: this.globalTablesPattern,
            fix: '$1(@1$2'
        },
        ]

        this.needleRules = [{ // contracts: only first system tables 
            pattern: this.globalTablesPattern,
            fix: '$1("@1$2"'
        },
        ]
    }
}
module.exports = SimpleFormatProvider