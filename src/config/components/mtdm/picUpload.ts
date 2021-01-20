const picUpload: MTDMComponentDesc = {
    type: 'normal',
    name: 'mtdm-pic-upload',
    source: 'MTDM',
    props: [
        {
            key: 'show-type',
            types: [ 'string' ],
            default: 'pic',
            options: [
                {
                    value: 'text',
                    detail: '文本'
                },
                {
                    value: 'pic',
                    detail: '图片'
                }
            ],
            detail: '显示类型',
            documentation: '文本或图片'
        },
        {
            key: 'show-text',
            types: [ 'string' ],
            default: '点击上传',
            options: [],
            detail: '文本类型显示的文案',
            documentation: '设置底部遮罩'
        },
        {
            key: 'disabled',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '禁用状态',
            documentation: ''
        },
        {
            key: 'deletable',
            types: [ 'boolean' ],
            default: true,
            options: [],
            detail: '是否可以删除上传文件',
            documentation: ''
        },
        {
            key: 'capture',
            types: [ 'string' ],
            default: '',
            options: [],
            detail: '图片选取模式',
            documentation: '可选值为 camera (直接调起摄像头)'
        },
        {
            key: 'maxsize',
            types: [ 'number', 'string' ],
            default: '',
            options: [],
            detail: '文件大小限制',
            documentation: '单位为 byte'
        },
        {
            key: 'auto-upload',
            types: [ 'boolean' ],
            default: true,
            options: [],
            detail: '选择完成文件后自动进行上传操作',
            documentation: ''
        },
        {
            key: 'action',
            types: [ 'string' ],
            default: true,
            options: [],
            detail: '上传的文件地址',
            documentation: ''
        },
        {
            key: 'headers',
            types: [ 'object' ],
            default: {},
            options: [],
            detail: '上传请求的header信息',
            documentation: ''
        },
        {
            key: 'timeout',
            types: [ 'number' ],
            options: [],
            detail: '上传超时时间',
            documentation: ''
        },
        {
            key: 'data',
            types: [ 'object' ],
            options: [],
            detail: '上传请求携带数据信息',
            documentation: ''
        },
        {
            key: 'with-credentials',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否携带cookie',
            documentation: ''
        },
        {
            key: 'multiple',
            types: [ 'boolean' ],
            default: false,
            options: [],
            detail: '是否允许同时选多个',
            documentation: ''
        },
        {
            key: 'accept',
            types: [ 'string' ],
            options: [],
            detail: '接受的文件上传类型',
            documentation: ''
        },
        {
            key: 'name',
            types: [ 'string' ],
            default: 'file',
            options: [],
            detail: '文件上传的filename	',
            documentation: ''
        },
        {
            key: 'show-file-list',
            types: [ 'boolean' ],
            default: true,
            options: [],
            detail: '是否显示上传文件列表',
            documentation: ''
        },
        {
            key: 'file-list',
            types: [ 'array' ],
            default: [],
            options: [],
            detail: '默认显示的文件列表数据',
            documentation: ''
        },
        {
            key: 'limit',
            types: [ 'number' ],
            default: 1,
            options: [],
            detail: '上传文件数量限制',
            documentation: ''
        },
        {
            key: 'after-read',
            types: [ 'function' ],
            options: [],
            detail: '文件读取完成后的回调函数',
            documentation: '在 autoUpload 情况下返回 false 可终止文件上传，也可以返回 File 对象将会替代选择文件，支持返回 Promise'
        },
        {
            key: 'before-upload',
            types: [ 'function' ],
            options: [],
            detail: '上传文件之前的钩子',
            documentation: 'function(file)，若返回 false 或者返回 Promise 且被 reject，则停止上传'
        },
        {
            key: 'before-remove',
            types: [ 'function' ],
            options: [],
            detail: '删除文件之前的钩子',
            documentation: 'function(file, fileList)，若返回 false 或者返回 Promise 且被 reject，则停止删除'
        },
        {
            key: 'remove',
            types: [ 'function' ],
            options: [],
            detail: '文件列表移除文件时的钩子',
            documentation: 'function(file, fileList)'
        },
        {
            key: 'change',
            types: [ 'function' ],
            options: [],
            detail: '文件状态改变时的钩子',
            documentation: '添加文件、上传成功和上传失败时都会被调用，function(file, fileList)'
        },
        {
            key: 'preview',
            types: [ 'function' ],
            options: [],
            detail: '点击文件列表中已上传的文件时的钩子',
            documentation: 'function(file)'
        },
        {
            key: 'success',
            types: [ 'function' ],
            options: [],
            detail: '文件上传成功时的钩子',
            documentation: 'function(response, file, fileList)'
        },
        {
            key: 'progress',
            types: [ 'function' ],
            options: [],
            detail: '文件上传时的钩子',
            documentation: 'function(event, file, fileList)'
        },
        {
            key: 'error',
            types: [ 'function' ],
            options: [],
            detail: '文件上传失败时的钩子',
            documentation: 'function(err, file, fileList)'
        },
        {
            key: 'oversize',
            types: [ 'function' ],
            options: [],
            detail: '文件大小超过限制时触发',
            documentation: 'function(file)'
        },
        {
            key: 'exceed',
            types: [ 'function' ],
            options: [],
            detail: '文件超出个数限制时的钩子',
            documentation: 'function(file, fileList)'
        },
    ],
    events: [],
    detail: '上传',
    documentation: '用于文件上传',
    snippets: {
        tag: 'mtdm-pic-upload',
        attrs: {
            action: '',
            'show-type': '',
            ':success': '',
            ':progress': ''
        }
    }
};

export default picUpload;
