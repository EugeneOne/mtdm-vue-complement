const navigationBar: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-navigationBar',
    source: 'MTDM',
    props: [
        {
            key: 'title',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '标题',
            documentation: '标题'
        },
        {
            key: 'sub-title',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '副标题',
            documentation: '副标题'
        },
        {
            key: 'fixed',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否固定顶部',
            documentation: '设置是否固定顶部'
        },
        {
            key: 'left-text',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '左侧文案',
            documentation: '设置左侧文案'
        },
        {
            key: 'left-icon',
            types: [ 'string' ],
            default: 'mtdmicon-left',
            options: [],
            detail: '左侧图标',
            documentation: '设置左侧图标'
        },
        {
            key: 'right-text',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '右侧文案',
            documentation: '设置右侧文案'
        },
        {
            key: 'right-icon',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '右侧图标',
            documentation: '右侧图标'
        },
        {
            key: 'z-index',
            types: [ 'number', 'string' ],
            default: 1,
            options: [],
            detail: '元素z-index',
            documentation: '元素z-index'
        },
    ],
    events: [
        {
            key: 'click-left',
            detail: '左侧点击事件',
            documentation: '点击左侧按钮或文本时触发'
        },
        {
            key: 'click-right',
            detail: '右侧点击事件',
            documentation: '点击右侧按钮或文本时触发'
        }
    ],
    detail: '导航栏',
    documentation: '用于展示当前页面的主题，并且能够快速返回上一页面或进入特定页面。',
    snippets: {
        tag: 'mtdm-navigation-bar',
        attrs: {
            type: 'title',
            '@click-left': ''
        }
    }
};

export default navigationBar;
