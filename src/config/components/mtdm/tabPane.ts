const tabPane: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-tab-pane',
    source: 'MTDM',
    props: [
        {
            key: 'title',
            types: ['string'],
            detail: '',
            default: '标题',
            documentation: '缺省为正常模式，可以设置为线型或面型'
        },
        {
            key: 'name',
            types: ['string'],
            default: '',
            options: [],
            detail: '标识，用于Tab组件匹配子标签',
            documentation: '若未定义，则以其在选项卡数组中的下标为标识'
        },
        {
            key: 'lazy',
            types: ['boolean'],
            default: false,
            options: [],
            detail: '是否懒加载',
            documentation: '若为true, 则只有在点击标签后才真正加载组件'
        }
    ],
    events: [],
    detail: '选项卡选项',
    documentation: '',
    snippets: {
        tag: 'mtdm-tab-pane',
        attrs: {
            'name': '',
            'title': ''
        },
    }
};

export default tabPane;
