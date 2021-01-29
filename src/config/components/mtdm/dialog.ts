const dialog: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-dialog',
    source: 'MTDM',
    props: [
        {
            key: 'title',
            types: ['string'],
            default: '',
            options: [],
            detail: '标题',
            documentation: ''
        },
        {
            key: 'message',
            types: ['string'],
            default: [],
            options: [],
            detail: '内容，支持html片段',
            documentation: ''
        },
        {
            key: 'operationList',
            types: ['array'],
            default: '',
            options: [],
            detail: '按钮项数组，支持传入对象',
            documentation: '自动取label显示，不展示确认按钮'
        },
        {
            key: 'show-cancel-button',
            types: ['boolean'],
            default: false,
            options: [],
            detail: '是否展示取消按钮',
            documentation: ''
        },
        {
            key: 'show-confirm-button',
            types: ['boolean'],
            default: true,
            options: [],
            detail: '是否展示确认按钮',
            documentation: ''
        },
        {
            key: 'confirm-button-text',
            types: ['string'],
            default: '确认',
            options: [],
            detail: '确认按钮的文案',
            documentation: ''
        },
        {
            key: 'cancel-button-text',
            types: ['string'],
            default: '取消',
            options: [],
            detail: '取消按钮的文案',
            documentation: ''
        },
        {
            key: 'close-on-click-confirm',
            types: ['boolean'],
            default: true,
            options: [],
            detail: '点击确定是否自动关闭',
            documentation: ''
        },
        {
            key: 'close-on-click-option',
            types: ['boolean'],
            default: true,
            options: [],
            detail: '点击按钮选项组是否自动关闭',
            documentation: ''
        },
        {
            key: 'overlay',
            types: ['boolean'],
            default: true,
            options: [],
            detail: '是否显示遮罩层',
            documentation: ''
        },
        {
            key: 'overlay-class',
            types: ['string'],
            default: true,
            options: [],
            detail: '自定义遮罩层类名',
            documentation: ''
        },
        {
            key: 'overlay-style',
            types: ['object'],
            options: [],
            detail: '自定义蒙层样式',
            documentation: ''
        },
        {
            key: 'close-on-click-overlay',
            types: ['boolean'],
            default: false,
            options: [],
            detail: '点击遮罩层是否关闭行动面板',
            documentation: ''
        },
        {
            key: 'lock-on-scroll',
            types: ['boolean'],
            default: true,
            options: [],
            detail: '滚动时是否禁用 body 滚动',
            documentation: ''
        },
        {
            key: 'zIndex',
            types: ['number'],
            options: [],
            detail: '层级',
            documentation: ''
        },
    ],
    events: [
        {
            key: 'confirm',
            detail: '点击确定按钮触发',
            documentation: ''
        },
        {
            key: 'cancel',
            detail: '点击取消按钮时触发',
            documentation: ''
        },
        {
            key: 'open',
            detail: '打开弹窗时触发',
            documentation: ''
        },
        {
            key: 'close',
            detail: '关闭弹窗时触发',
            documentation: ''
        },
        {
            key: 'select',
            detail: '点击多按钮时触发',
            documentation: 'item（选项对应的对象）, index（当前索引）'
        },
    ],
    detail: '对话框',
    documentation: '在当前页面基础上，通过浮层承载相关信息和操作，暂停当前流程，但保留特定的上下文信息。',
    snippets: {
        tag: 'mtdm-dialog',
        attrs: {
            'v-model': '',
            'title': '',
        }
    }
};

export default dialog;
