import { window, workspace, ViewColumn, TextDocument, Position, Range } from 'vscode';

const PRE_TAG_REG = /<([\w-]+)(\s[:@-\w]*(=['"][:@-\w]*['"])?)*\s*(\s:)?/
const END_TAG_REG = /(\/>)|(<\/[\w-]+>)(\s)*$/
const PRE_ATTR_REG = /\s([\w\.@:-]+)(=['"][\w\.@:-]*['"])?/g

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
export function notInTemplate (document: TextDocument, position: Position): boolean {
  let line = position.line;
  while (line) {
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

// 找到这个标签所有属性，包括prop和event
export function findAllSubAttrFromLine (parent: string) {
  let result:any = {};
  let match = PRE_ATTR_REG.exec(parent);
  while (match !== null) {
    const attrStr = match[1].split('=')[0] || '';
    result[attrStr] = true;
    match = PRE_ATTR_REG.exec(parent);
  }
  return result;
}

export function getPreTagAndAttrAndEvent (document: TextDocument, position: Position) {
  let line = position.line;
  let curLine = position.line;
  let txt = getTextBeforePosition(document, position);
  let tagMatch = PRE_TAG_REG.exec(txt);

  if (END_TAG_REG.test(txt)) {
    return null;
  }
  let attrMap = {
    ...findAllSubAttrFromLine(txt)
  }


  if (tagMatch === null) {
    while (line - curLine < 10 && curLine >= 0 && tagMatch === null) {
      curLine--;
      txt = document.lineAt(curLine).text;

      if (END_TAG_REG.test(txt)) {
        return null;
      }

      tagMatch = PRE_TAG_REG.exec(txt);
      attrMap = {
        ...attrMap,
        ...findAllSubAttrFromLine(txt)
      };
    }
  }

  const result:any = {
    tag: null,
    attrs: attrMap
  };

  if (tagMatch !== null) {
    result.tag = tagMatch[1];
  }

  return result;
}

export function getPreTag(document: TextDocument, position: Position) {
  let line = position.line;
  let curLine = position.line
  let txt = getTextBeforePosition(document, position)
  let tagMatch = PRE_TAG_REG.exec(txt)

  if (END_TAG_REG.test(txt)) {
    return null
  }

  if (tagMatch === null) {
    while(line - curLine < 10 && curLine >= 0 && tagMatch === null) {
      curLine--
      txt = document.lineAt(curLine).text
      tagMatch = PRE_TAG_REG.exec(txt)
      if (END_TAG_REG.test(txt)) {
        return null
      }
    }
  }

  if (tagMatch !== null) {
    return tagMatch[1]
  }

  return null
}

export function notInScript(document: TextDocument, position: Position): boolean {
  let line = position.line;
  while(line) {
    if (/^\s*<script.*>\s*$/.test(<string>document.lineAt(line).text)) {
      return false
    }
    if (/^\s*<template.*>\s*$/.test(<string>document.lineAt(line).text)) {
      return true
    }
    if (/^\s*<style.*>\s*$/.test(<string>document.lineAt(line).text)) {
      return true
    }
    if (/^\s*<\/script>.*$/.test(<string>document.lineAt(line).text)) {
      return true
    }
    line--;
  }
  return false;
}