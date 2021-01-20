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
            key: 'autoplay',
            types: ['boolean'],
            default: true,
            detail: '是否自动播放',
            documentation: ''
        },
        {
            key: 'loop',
            types: ['boolean'],
            default: true,
            detail: '是否可以循环播放',
            documentation: ''
        },
        {
            key: 'show-indicators',
            types: ['boolean'],
            default: true,
            detail: '是否展示轮播指示器',
            documentation: ''
        },
        {
            key: 'interval',
            types: ['number'],
            default: '300',
            detail: '播放间隔时间',
            documentation: 'ms'
        },
        {
            key: 'speed',
            types: ['number'],
            default: '500',
            detail: '滑动速度',
            documentation: 'ms'
        },
        {
            key: 'direction',
            types: ['string'],
            options: [
                {
                    value: 'horizontal',
                    detail: '横向',
                },
                {
                    value: 'vertical',
                    detail: '纵向',
                }
            ],
            default: 'horizontal',
            detail: '滚动方向',
            documentation: 'horizontal（横向），vertical（纵向）'
        },
        {
            key: 'touchable',
            types: ['boolean'],
            options: [],
            default: true,
            detail: '是否可以手动切换',
            documentation: ''
        },
        {
            key: 'initPage',
            types: ['number'],
            options: [],
            default: 0,
            detail: '初始位置索引值',
            documentation: ''
        },
        {
            key: 'indicator-type',
            types: ['string'],
            options: [
                {
                    value: 'primary',
                    detail: '',
                },
                {
                    value: 'percent',
                    detail: '数字指示器',
                }
            ],
            default: 'primary',
            detail: '指示器的样式',
            documentation: ''
        },
        {
            key: 'indicator-position',
            types: ['string'],
            options: [
                {
                    value: 'right',
                    detail: '',
                },
                {
                    value: 'left',
                    detail: '',
                },
                {
                    value: 'center',
                    detail: '横向',
                }
            ],
            default: 'center',
            detail: '指示器的位置',
            documentation: '纵向默认为left'
        },
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
