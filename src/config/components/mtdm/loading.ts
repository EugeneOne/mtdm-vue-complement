const loading: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-loading',
    source: 'MTDM',
    props: [
        {
            key: 'text',
            types: ['string'],
            default: '',
            options: [],
            detail: '文本',
            documentation: ''
        },
        {
            key: 'vertical',
            types: ['boolean'],
            default: false,
            options: [],
            detail: '是否垂直排列图标和文字内容',
            documentation: ''
        },
        {
            key: 'show-close',
            types: ['boolean'],
            default: false,
            options: [],
            detail: '是否显示关闭按钮',
            documentation: ''
        },
        {
            key: 'size',
            types: ['number', 'string'],
            default: '32px',
            options: [],
            detail: '尺寸',
            documentation: ''
        },
        {
            key: 'color',
            types: ['string'],
            default: '',
            options: [],
            detail: '颜色',
            documentation: '默认：rgba(0,0,0,.12)'
        }
    ],
    events: [],
    detail: '加载',
    documentation: '两个页面跳转衔接动效，落地页未完全展示状态。',
    snippets: {
        tag: 'mtdm-loading',
        attrs: {}
    }
};

export default loading;
