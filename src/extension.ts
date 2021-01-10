import * as vscode from 'vscode';
import TagCompletionProvider from './provider/tagCompletionProvider';

export function activate(context: vscode.ExtensionContext) {
	// 定义使用的文档类型
	const selector: vscode.DocumentSelector = [
		{
			language: 'vue', scheme: 'file'
		}, {
			language: 'html', scheme: 'file'
		}
	];
	
	/**
	 * registerCompletionItemProvider (fn)
	 * @params 
	 * 	selector: DocumentSelector 文档选择器
	 * 	provider: CompletionItemProvider
	 *  ...triggerCharacters: string[] 当用户输入其中一个字符时触发补全。
	 * @wiki https://code.visualstudio.com/api/references/vscode-api#languages
	 *  
	 */ 
	let tagCompletion = vscode.languages.registerCompletionItemProvider(selector, new TagCompletionProvider(), '<');

	context.subscriptions.push(
		tagCompletion
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
