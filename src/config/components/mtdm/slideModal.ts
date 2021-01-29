const slideModal: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-slide-modal',
    source: 'MTDM',
    props: [
        {
            key: 'value',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否显示',
            documentation: '支持 v-model'
        },
        {
            key: 'max-height',
            types: [ 'string' ],
            default: '80%',
            options: [],
            detail: '弹窗最大高度',
            documentation: ''
        },
        {
            key: 'title',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '顶部栏标题。',
            documentation: '默认不显示'
        },
        {
            key: 'round',
            types: [ 'boolean' ],
            default: true,
            options: [],
            detail: '圆角',
            documentation: 'mark为true时，勾选状态下会进行√标记'
        },
        {
            key: 'left-button-text',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '取消按钮的文本',
            documentation: '默认不显示'
        },
        {
            key: 'right-button-text',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '确认按钮的文本',
            documentation: '默认不显示'
        }
    ],
    events: [
        {
            key: 'click-left',
            detail: '点击toolbar左侧按钮触发',
            documentation: ''
        },
        {
            key: 'click-right',
            detail: '点击toolbar右侧按钮触发',
            documentation: ''
        },
        {
            key: 'opened',
            detail: '弹出层出现动画结束后触发',
            documentation: ''
        },
        {
            key: 'closed',
            detail: '弹出层消失动画结束后触发',
            documentation: ''
        },
        {
            key: 'open',
            detail: '弹出层出现前触发',
            documentation: ''
        },
        {
            key: 'close',
            detail: '弹出层消失前触发',
            documentation: ''
        }
    ],
    detail: '半页弹窗',
    documentation: '在当前页面基础上，通过浮层承载相关信息和操作，暂停当前流程，但保留特定的上下文信息。',
    snippets: {
        tag: 'mtdm-slide-modal',
        attrs: {
            'v-model': '',
            'title': ''
        }
    }
};

export default slideModal;
