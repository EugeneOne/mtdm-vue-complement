const button: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-btn',
    source: 'MTDM',
    props: [
        {
            key: 'disabled',
            types: [ 'boolean' ],
            default: 'false',
            options: [],
            detail: '禁用状态',
            documentation: '是否设置禁用'
        },
        {
            key: 'position',
            types: [ 'string' ],
            default: '',
            options: [
                {
                    value: 'top',
                    detail: '上',
                    documentation: '上'
                },
                {
                    value: 'bottom',
                    detail: '底部',
                    documentation: '底部'
                },
                {
                    value: 'left',
                    detail: '左',
                    documentation: '左'
                },
                {
                    value: 'right',
                    detail: '右',
                    documentation: '右'
                }
            ],
            detail: '全屏时出现的位置',
            documentation: '设置出现位置，传该值表示全屏'
        },
        {
            key: 'overlay',
            types: [ 'boolean' ],
            default: true,
            options: [],
            detail: '是否显示遮罩',
            documentation: '设置底部遮罩'
        },
        {
            key: 'offset-y',
            types: [ 'Number' ],
            default: 0,
            options: [],
            detail: '距离元素底部偏移量',
            documentation: '距离元素底部偏移量'
        },
        {
            key: 'selected',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否选中',
            documentation: '为true时label会显示为选中样式'
        },
        {
            key: 'label',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: 'label文本',
            documentation: 'label文本'
        },
        {
            key: 'transition',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: 'transition 名称',
            documentation: '自定义transition动画名称'
        },
        {
            key: 'close-on-click-overlay',
            types: [ 'boolean' ],
            default: true,
            options: [],
            detail: '点击遮罩层是否关闭popup',
            documentation: '点击遮罩层是否关闭popup'
        },
        {
            key: 'lock-on-scroll',
            types: [ 'boolean' ],
            default: true,
            options: [],
            detail: '滚动时是否禁用body 滚动',
            documentation: '滚动时是否禁用body 滚动'
        },
        {
            key: 'custom-style',
            types: [ 'object' ],
            options: [],
            detail: '自定义label样式',
            documentation: '自定义label样式'
        },
        {
            key: 'custom-content-style',
            types: [ 'object' ],
            options: [],
            detail: '自定义popup样式',
            documentation: '自定义popup样式'
        },
        {
            key: 'custom-overlay-style',
            types: [ 'object' ],
            options: [],
            detail: '自定义遮罩样式',
            documentation: '自定义遮罩样式'
        },
        {
            key: 'divider',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否增加分割线',
            documentation: '是否增加分割线'
        },
    ],
    events: [
        {
            key: 'toggle',
            detail: '值改变',
            documentation: '点击picker选项时出发，回调参数为"当前值"'
        },
        {
            key: 'click-overlay',
            detail: '点击遮罩层时触发的事件',
            documentation: '点击遮罩层时触发的事件'
        }
    ],
    detail: '筛选',
    documentation: '用于使用户能够从预定义的列表中选择一个或多个选项。',
    snippets: {
        tag: 'mtdm-picker',
        attrs: {
            type: 'primary'
        }
    }
};

export default button;
