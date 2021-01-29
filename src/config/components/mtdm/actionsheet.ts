const actionsheet: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-actionsheet',
    source: 'MTDM',
    props: [
        {
            key: 'value',
            types: ['boolean'],
            default: false,
            options: [],
            detail: '是否显示',
            documentation: '支持 v-model'
        },
        {
            key: 'options',
            types: ['array'],
            default: [],
            options: [],
            detail: '菜单项数组',
            documentation: ''
        },
        {
            key: 'title',
            types: ['string'],
            default: '',
            options: [],
            detail: '标题',
            documentation: ''
        },
        {
            key: 'round',
            types: ['boolean'],
            default: true,
            options: [],
            detail: '圆角',
            documentation: ''
        },
        {
            key: 'cancel-text',
            types: ['string'],
            default: '取消',
            options: [],
            detail: '取消按钮的文本',
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
            default: '',
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
            default: true,
            options: [],
            detail: '点击遮罩层是否关闭行动面板',
            documentation: ''
        },
        {
            key: 'lock-on-ccroll',
            types: ['boolean'],
            default: true,
            options: [],
            detail: '滚动时是否禁用 body 滚动',
            documentation: ''
        },
        {
            key: 'close-on-click-option',
            types: ['boolean'],
            default: true,
            options: [],
            detail: '点击按钮选项组是否自动关闭',
            documentation: ''
        }
    ],
    events: [
        {
            key: 'input',
            detail: 'value 发生改变时触发',
            documentation: '回调：value: Boolean'
        },
        {
            key: 'cancel',
            detail: '点击取消按钮时触发',
            documentation: ''
        },
        {
            key: 'select',
            detail: '点击选项时触发',
            documentation: 'item（选项对应的对象）, index（当前索引）'
        }
    ],
    detail: '行动面板',
    documentation: '是用于触发一个行动并形成决策的组件。',
    snippets: {
        tag: 'mtdm-actionsheet',
        attrs: {
            'v-model': '',
            'title': '',
            ':options': '',
            '@select': ''
        }
    }
};

export default actionsheet;
