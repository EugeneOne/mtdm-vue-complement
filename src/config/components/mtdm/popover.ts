const popover: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-popover',
    source: 'MTDM',
    props: [
        {
            key: 'placement',
            types: ['string'],
            default: 'right',
            options: [
                {
                    value: 'left',
                    detail: ''
                },
                {
                    value: 'center',
                    detail: ''
                },
                {
                    value: 'right',
                    detail: ''
                }
            ],
            detail: '箭头位置',
            documentation: ''
        },
        {
            key: 'options',
            types: ['array'],
            default: [],
            options: [],
            detail: '菜单数组',
            documentation: ''
        },
        {
            key: 'ellipsis',
            types: ['boolean'],
            default: true,
            options: [],
            detail: '是否省略过长的options中的title',
            documentation: ''
        },
        {
            key: 'theme',
            types: ['string'],
            default: 'black',
            options: [
                {
                    value: 'black',
                    detail: ''
                },
                {
                    value: 'white',
                    detail: ''
                }
            ],
            detail: '选项卡主题色',
            documentation: ''
        },
        {
            key: 'visible',
            types: ['Boolean'],
            options: [],
            detail: '控制选择列表显示隐藏',
            documentation: ''
        },
        {
            key: 'overlay-class',
            types: ['string'],
            options: [],
            detail: '自定义遮罩层类名',
            documentation: ''
        },
        {
            key: 'overlay-style',
            types: ['string'],
            options: [],
            detail: '自定义遮罩层类名',
            documentation: ''
        }
    ],
    events: [
        {
            key: 'select',
            detail: '选择某个菜单项时，返回这个菜单项',
            documentation: '回调：\noption: 选项对应的对象\n index: 索引值'
        }
    ],
    detail: '下拉菜单',
    documentation: '用于使用户能够从预定义的列表中选择一个或多个选项。',
    snippets: {
        tag: 'mtdm-popover',
        attrs: {
            'v-model': '',
            ':options': '',
            'placement': '',
            '@select': ''
        }
    }
};

export default popover;
