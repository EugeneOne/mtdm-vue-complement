const params = [
    {
        key: 'type',
        document: '提示类型',
        types: ['string'],
        default: ''
    },
    {
        key: 'message',
        document: '提示内容',
        types: ['string'],
        default: ''
    },
    {
        key: 'icon',
        document: '图标类名',
        types: ['string'],
        default: ''
    }
]

const dialog: any = {
    toast: {
        type: 'function',
        name: 'toast.loading',
        source: 'MTDM',
        detail: '加载',
        documentation: '加载提示',
        snippets: {
            funcName: 'loading',

        }

    } as MTDMFuncComponentDesc,
    type: 'normal',
    name: 'mtdm-btn',
    source: 'MTDM',
    props: [
        {
            key: 'size',
            types: [ 'string' ],
            default: 'large',
            options: [
                {
                    value: 'large',
                    detail: '大号按钮',
                    documentation: '大号按钮'
                },
                {
                    value: 'middle',
                    detail: '中号按钮',
                    documentation: '中号按钮'
                },
                {
                    value: 'small',
                    detail: '小号按钮',
                    documentation: '小号按钮'
                },
                {
                    value: 'tiny',
                    detail: '迷你按钮',
                    documentation: '迷你按钮'
                }
            ],
            detail: '按钮大小',
            documentation: '按钮大小'
        },
        {
            key: 'type',
            types: [ 'string' ],
            default: 'default',
            options: [
                {
                    value: 'default',
                    detail: '普通按钮',
                    documentation: '普通按钮'
                },
                {
                    value: 'primary',
                    detail: '基础按钮',
                    documentation: '基础按钮'
                },
                {
                    value: 'secondary',
                    detail: '辅助按钮',
                    documentation: '辅助按钮'
                },
                {
                    value: 'text-primary',
                    detail: '文字按钮',
                    documentation: '文字按钮'
                },
                {
                    value: 'success',
                    detail: '成功按钮',
                    documentation: '成功按钮'
                },
                {
                    value: 'warning',
                    detail: '警告按钮',
                    documentation: '警告按钮'
                },
                {
                    value: 'danger',
                    detail: '危险按钮',
                    documentation: '危险按钮'
                }
            ],
            detail: '按钮原生类型',
            documentation: '设置 button 原生的 type 类型'
        },
        {
            key: 'width',
            types: [ 'string' ],
            default: 'normal',
            options: [
                {
                    value: 'normal',
                    detail: '最小宽度',
                    documentation: '最小宽度'
                },
                {
                    value: 'padded',
                    detail: '常用宽度',
                    documentation: '常用宽度'
                },
                {
                    value: 'full',
                    detail: '最长宽度',
                    documentation: '最长宽度'
                }
            ],
            detail: '按钮原生宽度类型',
            documentation: '按钮原生宽度类型'
        },
        {
            key: 'loading',
            types: [ 'boolean' ],
            options: [],
            detail: '是否加载中状态',
            documentation: '是否设置加载中状态'
        },
        {
            key: 'disabled',
            types: [ 'boolean' ],
            options: [],
            detail: '禁用状态',
            documentation: '是否设置禁用状态'
        },
        {
            key: 'icon',
            types: [ 'string' ],
            options: [],
            detail: '按钮左侧图标类型',
            documentation: '设置按钮左侧图标类型'
        },
        {
            key: 'round',
            types: [ 'boolean' ],
            options: [],
            detail: '圆弧边框',
            documentation: '是否是圆弧边框'
        },
    ],
    events: [
        {
            key: 'click',
            detail: '点击事件',
            documentation: '按钮点击事件(非原生事件)'
        }
    ],
    detail: '按钮组件',
    documentation: '用于触发一个行动并形成决策的组件',
    snippets: {
        tag: 'mtdm-btn',
        attrs: {
            type: 'primary'
        }
    }
};

export default button;
