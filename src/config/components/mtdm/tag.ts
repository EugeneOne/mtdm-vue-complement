const tag: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-tag',
    source: 'MTDM',
    props: [
        {
            key: 'icon',
            types: ['string'],
            detail: '额外的 icon',
            documentation: ''
        },
        {
            key: 'type',
            types: ['string'],
            default: 'fill',
            options: [
                {
                    value: 'fill',
                    detail: '实心'
                },
                {
                    value: 'ghost',
                    detail: '空心'
                }
            ],
            detail: '标签类型',
            documentation: 'fill；ghost'
        },
        {
            key: 'size',
            types: ['string'],
            default: 'tiny',
            options: [
                {
                    value: 'tiny',
                    detail: ''
                },
                {
                    value: 'small',
                    detail: ''
                },
                {
                    value: 'middle',
                    detail: ''
                },
                {
                    value: 'large',
                    detail: ''
                }
            ],
            detail: '标签大小',
            documentation: 'tiny；small；middle；large'
        },
        {
            key: 'shape',
            types: ['string'],
            default: 'fillet',
            options: [
                {
                    value: 'fillet',
                    detail: '小圆角'
                },
                {
                    value: 'circle',
                    detail: '大圆角'
                },
                {
                    value: 'quarter',
                    detail: '方形'
                },
            ],
            detail: '标签形状',
            documentation: 'fillet；circle；quarter'
        },
        {
            key: 'sharp',
            types: ['string', 'array'],
            options: [
                {
                    value: 'top-left',
                    detail: ''
                },
                {
                    value: 'top-right',
                    detail: ''
                },
                {
                    value: 'bottom-left',
                    detail: ''
                },
                {
                    value: 'bottom-right',
                    detail: ''
                },
            ],
            detail: '标签直角',
            documentation: 'top-left；top-right；bottom-left；bottom-right'
        },
        {
            key: 'list',
            types: ['array'],
            detail: '多条组合标签列表',
            documentation: ''
        },
        {
            key: 'text-color',
            types: ['string'],
            detail: '文本颜色',
            documentation: ''
        },
        {
            key: 'fill-color',
            types: ['string'],
            detail: '填充颜色',
            documentation: ''
        },
        {
            key: 'theme',
            types: ['string'],
            default: 'default',
            options: [
                {
                    value: 'default',
                    detail: ''
                },
                {
                    value: 'primary',
                    detail: ''
                },
                {
                    value: 'success',
                    detail: ''
                },
                {
                    value: 'wraning',
                    detail: ''
                },
                {
                    value: 'danger',
                    detail: ''
                }
            ],
            detail: '预置主题',
            documentation: 'default；primary；success；wraning；danger'
        },
        {
            key: 'closable',
            types: ['boolean'],
            default: false,
            detail: '是否可关闭',
            documentation: ''
        }
    ],
    events: [
        {
            key: 'click',
            detail: '点击事件触发',
            documentation: ''
        },
        {
            key: 'close',
            detail: '关闭事件触发',
            documentation: ''
        },
    ],
    detail: '标签',
    documentation: '',
    snippets: {
        tag: 'mtdm-tag',
        attrs: {},
    }
};

export default tag;
