const tab: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-tab',
    source: 'MTDM',
    props: [
        {
            key: 'type',
            types: ['string'],
            detail: '类型',
            default: 'normal',
            options: [
                {
                    value: 'normal',
                    detail: '正常模式'
                },
                {
                    value: 'line',
                    detail: '卡片选项(线型)'
                },
                {
                    value: 'face',
                    detail: '卡片选项(面型)'
                }
            ],
            documentation: '缺省为正常模式，可以设置为线型或面型'
        },
        {
            key: 'auto-width',
            types: ['boolean'],
            default: false,
            options: [],
            detail: '动态宽度',
            documentation: ''
        },
        {
            key: 'ellipsis',
            types: ['boolean'],
            default: false,
            options: [],
            detail: '是否省略过长的标题文字',
            documentation: '仅当正常模式且等分时有效'
        },
        {
            key: 'border',
            types: ['Boolean'],
            default: false,
            options: [],
            detail: '是否显示导航下边框',
            documentation: ''
        },
        {
            key: 'animated',
            types: ['Boolean'],
            options: [],
            detail: '是否开启切换标签内容时的动画',
            documentation: ''
        },
        {
            key: 'underline-style',
            types: ['string'],
            detail: '底部横线样式自定义',
            documentation: ''
        },
        {
            key: 'active-underline-style',
            types: ['string'],
            detail: '选中状态底部横线样式自定义',
            documentation: ''
        },
        {
            key: 'text-style',
            types: ['string'],
            detail: 'tab单项文本样式自定义',
            documentation: ''
        },
        {
            key: 'active-text-style',
            types: ['string'],
            options: [],
            detail: '选中状态下tab单项文本样式自定义',
            documentation: ''
        },
        {
            key: 'sticky',
            types: ['boolean'],
            default: false,
            detail: '是否使用粘性定位布局',
            documentation: ''
        },
        {
            key: 'active-bar-width',
            types: ['string'],
            default: '24px',
            detail: '选中状态底部横线宽度',
            documentation: ''
        }
    ],
    events: [
        {
            key: 'change',
            detail: 'tab切换时触发',
            documentation: '回调：\nindex: 点击对象索引, \nname: TabPane对象的引用'
        }
    ],
    detail: '选项卡',
    documentation: '',
    snippets: {
        tag: 'mtdm-tab',
        attrs: {
            'v-model': ''
        },
        children: [
            {
                tag: 'mtdm-tab-pane',
                attrs: {
                    title: '',
                    name: ''
                }
            }
        ]
    }
};

export default tab;
