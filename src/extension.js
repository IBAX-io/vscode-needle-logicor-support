const vscode = require('vscode')
const CompleteProvider = require('./providers/completion_provider')
const FormatProvider = require('./providers/format_provider')
const SignatureProvider = require('./providers/signature_provider')

function activate(context) {
    const active = vscode.window.activeTextEditor
    if (!active || !active.document) return

    function registerProviders() {
        let typeLogicor = 'logicor'
        context.subscriptions.push(
            vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: typeLogicor }, new CompleteProvider(typeLogicor), ' ', '#', '.', '('),
            vscode.languages.registerDocumentFormattingEditProvider({ scheme: 'file', language: typeLogicor }, new FormatProvider(typeLogicor)),
            vscode.languages.registerDocumentRangeFormattingEditProvider({ scheme: 'file', language: typeLogicor }, new FormatProvider(typeLogicor)),
            vscode.languages.registerSignatureHelpProvider({ scheme: 'file', language: typeLogicor }, new SignatureProvider(typeLogicor), '(', ' ', '{')
        )

        let typeNeedle = 'needle'
        context.subscriptions.push(
            vscode.languages.registerDocumentFormattingEditProvider({ scheme: 'file', language: typeNeedle }, new FormatProvider(typeNeedle)),
            vscode.languages.registerDocumentRangeFormattingEditProvider({ scheme: 'file', language: typeNeedle }, new FormatProvider(typeNeedle)),
            vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: typeNeedle }, new CompleteProvider(typeNeedle), '$', ' ', '.', '('),
            vscode.languages.registerSignatureHelpProvider({ scheme: 'file', language: typeNeedle }, new SignatureProvider(typeNeedle), '(', ' ', '{')
        )
    }

    registerProviders()
}
exports.activate = activate