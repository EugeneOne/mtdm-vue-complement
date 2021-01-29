const tips: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-tips',
    source: 'MTDM',
    props: [
        {
            key: 'type',
            types: ['string'],
            default: '下拉刷新',
            options: [
                {
                    value: 'link',
                    detail: ''
                },
                {
                    value: 'closable',
                    detail: ''
                }
            ],
            detail: '提示栏类型',
            documentation: ''
        },
        {
            key: 'icon',
            types: ['string'],
            default: 70,
            options: [],
            detail: '左侧图标名称',
            documentation: ''
        },
        {
            key: 'text',
            types: ['string'],
            default: '',
            options: [],
            detail: '提示栏文本内容',
            documentation: ''
        }
    ],
    events: [
        {
            key: 'click',
            detail: '点击箭头图标触发的事件',
            documentation: 'type=link时'
        },
        {
            key: 'close',
            detail: '点击删除图标触发的事件',
            documentation: 'type=closable时'
        }
    ],
    detail: '顶部提示',
    documentation: '用于展示系统的重要信息，在页面顶部贯穿静态显示。',
    snippets: {
        tag: 'mtdm-tips',
        attrs: {
            'text': ''
        }
    }
};

export default tips;
