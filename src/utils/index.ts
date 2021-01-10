import { window, workspace, ViewColumn, TextDocument, Position, Range } from 'vscode';

/**
* 获取当前行在当前位置之前的文本
* @param position 当前光标位置
*/
export function getTextBeforePosition (document: TextDocument, position: Position) {
    let start = new Position(position.line, 0);
    let range = new Range(start, position);
    return document.getText(range);
}

// 获取 package.json 这中的 contributes.configuration.properties 配置项数据
export function getConfig (key: string): any {
    const config = workspace.getConfiguration('mtdm-helper');
    return config.get(key);
}

// 排除预设元素名
export function notInTemplate(document: TextDocument, position: Position): boolean {
    let line = position.line;
    while(line) {
      if (/^\s*<template.*>\s*$/.test(<string>document.lineAt(line).text)) {
        return false;
      }
      if (/^\s*<script.*>\s*$/.test(<string>document.lineAt(line).text)) {
        return true;
      }
      if (/^\s*<style.*>\s*$/.test(<string>document.lineAt(line).text)) {
        return true;
      }
      if (/^\s*<\/template>.*$/.test(<string>document.lineAt(line).text)) {
        return true;
      }
      line--;
    }
    return false;
  }