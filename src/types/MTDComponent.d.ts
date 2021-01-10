declare interface FunctionArgument {
    key: string
    types: any
    isRequired?: boolean
    documentation?: string,
    attrs?: FunctionArgument[]
    default?: string,
    returnTypes?: any,
    params?: FunctionArgument[]
}

// dom 属性描述
declare interface AttrOptionDesc {
    value: any
    detail?: string
    documentation?: string
    sort?: number
    isCreate?: boolean
}

// 属性描述
declare interface PropDesc {
    key: string
    types: any;
    returnTypes?: any;
    default?: any
    isRequired?: boolean
    params?: FunctionArgument[]
    options?: AttrOptionDesc[]
    sort?: number
    detail?: string
    documentation?: string
}

declare interface TagSnippetsAttr {
    // 为null代表是无值属性，表现形式： <input disabled></input>
    [attrName: string]: string | null
}

declare interface MethodDesc {
    key: string
    returnTypes: any
    params?: FunctionArgument[]
    sort?: number
    documentation?: string
    detail?: string
}

// dom 描述
declare interface TagSnippets {
    tag?: string
    attrs?: TagSnippetsAttr
    children?: TagSnippets[]
    text?: string
    selfClose?: boolean
}

declare interface EventDesc {
    key: string
    sort?: number
    documentation?: string
    detail?: string
    returnTypes?: any;
    params?: FunctionArgument[]
}

declare interface MTDMComponentDesc {
    // 组件类型
    // 组件类型
    type: 'normal';
    // 来源
    source: 'MTDM';
    // 匹配字段
    // prefix: string
    // 组件名称
    name: string;
    // 详情，显示snippets时的详情描述
    detail: string;
    // prop描述
    props?: PropDesc[];
    // 事件描述
    events?: EventDesc[];
    // 方法
    methods?: MethodDesc[];
    // 排序值，越小排序越靠前，最小0
    sort?: number;
    // 文本，显示snippets时预先展示自动补全的文本，不填则显示根据snippets生成的字符串
    documentation?: string;
    // 片段描述
    snippets: TagSnippets;
    // 官方文档网站上该组件的路径，用于在VSCode中快速打开官方文档
    // path: string
}

declare interface FuncSnippetsParam {
    type: 'string' | 'number' | 'other',
    key: string,
    value: string
  }

declare interface FuncSnippets {
    // 函数名称，比如this.$mtd.message组件对应的名称就是message
    funcName: string
    params: FuncSnippetsParam[]
  }

declare interface MTDMFuncComponentDesc {
    type: 'function',
    // 匹配字段
    prefix: string
    // 组件名称
    name: string
    sort?: number
    detail?: string
    documentation?: string
    snippets: FuncSnippets
    path: string
  }

declare interface MTDMInfo {
    // 普通组件
    normalComponents: MTDMComponentDesc[]
    // 函数型组件，比如this.$mtdm.message
    funcComponents: MTDMFuncComponentDesc[]
}