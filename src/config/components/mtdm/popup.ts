const popup: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-popup',
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
            key: 'position',
            types: ['string'],
            default: 'center',
            options: [
                {
                    value: 'center',
                    detail: ''
                },
                {
                    value: 'top',
                    detail: ''
                },
                {
                    value: 'bottom',
                    detail: ''
                },
                {
                    value: 'left',
                    detail: ''
                },
                {
                    value: 'right',
                    detail: ''
                }
            ],
            detail: 'popup位置',
            documentation: ''
        },
        {
            key: 'custom-class',
            types: ['string'],
            default: '',
            options: [],
            detail: '自定义窗体类名',
            documentation: ''
        },
        {
            key: 'custom-style',
            types: ['object'],
            options: [],
            detail: '自定义窗体样式',
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
            default: '',
            options: [],
            detail: '自定义蒙层样式',
            documentation: ''
        },
        {
            key: 'round',
            types: ['boolean'],
            default: false,
            options: [],
            detail: '圆角',
            documentation: ''
        },
        {
            key: 'transition',
            types: ['string'],
            default: '',
            options: [],
            detail: 'transition 名称',
            documentation: ''
        },
        {
            key: 'close-on-click-overlay',
            types: ['boolean'],
            default: true,
            options: [],
            detail: '点击遮罩层是否关闭 popup',
            documentation: ''
        },
        {
            key: 'lock-on-scroll',
            types: ['boolean'],
            default: true,
            options: [],
            detail: '滚动时是否禁用 body 滚动',
            documentation: ''
        }
    ],
    events: [
        {
            key: 'click-overlay',
            detail: '点击遮罩层时触发的事件',
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
    detail: '弹出层',
    documentation: '用于控制浮层的展示和交互。',
    snippets: {
        tag: 'mtdm-popup',
        attrs: {
            'v-model': '',
            'position': 'bottom'
        }
    }
};

export default popup;
