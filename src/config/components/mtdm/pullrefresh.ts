const pullrefresh: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-pullrefresh',
    source: 'MTDM',
    props: [
        {
            key: 'text',
            types: ['string'],
            default: '下拉刷新',
            options: [],
            detail: '下拉时的展示文案',
            documentation: ''
        },
        {
            key: 'head-height',
            types: ['number'],
            default: 70,
            options: [],
            detail: '下拉时顶部内容的高度（px）',
            documentation: ''
        },
        {
            key: 'animation-duration',
            types: ['number'],
            default: 300,
            options: [],
            detail: '动画时长（毫秒）',
            documentation: ''
        },
        {
            key: 'icon',
            types: ['string'],
            default: 'mtdmicon-spinner',
            options: [],
            detail: '自定义下拉时的图标类名',
            documentation: ''
        }
    ],
    events: [
        {
            key: 'refresh',
            detail: '下拉刷新时触发',
            documentation: ''
        }
    ],
    detail: '下拉刷新',
    documentation: '当前页面请求数据，并刷新页面。',
    snippets: {
        tag: 'mtdm-pullrefresh',
        attrs: {
            'v-model': '',
            '@refresh': ''
        }
    }
};

export default pullrefresh;
