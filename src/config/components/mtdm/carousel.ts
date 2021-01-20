const carousel: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-carousel',
    source: 'MTDM',
    props: [
        {
            key: 'width',
            types: ['string'],
            default: '100%',
            detail: 'carousel的宽度',
            documentation: '（建议使用rem）'
        },
        {
            key: 'height',
            types: ['string'],
            default: '100%',
            detail: 'carousel的高度',
            documentation: '（建议使用rem）'
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
            key: 'change',
            detail: '每一页轮播结束后触发',
            documentation: 'index（当前页的索引）'
        },
    ],
    detail: '轮播图',
    documentation: '是用于触发一个行动并形成决策的组件。',
    snippets: {
        tag: 'mtdm-carousel',
        attrs: {
            ':autoplay': '',
            ':loop': '',
            ':height': '',
            'indicatorType': '',
        },
        children: [
            {
                tag: 'mtdm-carousel-item',
                attrs: {}
            }
        ]
    }
};

export default carousel;
