
var path = require("path");
var fs = require("fs");
var pathName = "./src/config/components/mtdm";
var js_beautify = require('js-beautify').js_beautify;
const configPath = 'src/config/defaultMtdInfo.ts'

function getComponentList() {
    return new Promise((resolve, reject) => {
        let len = 1;
        let componentList = [];
        let funList = [];
        fs.readdir(pathName, function (err, files) {
            len = files.length;
            for (let i = 0; i < files.length; i++) {
                fs.readFile(`${pathName}/${files[i]}`, 'utf8', (err, data) => {
                    html = data;
                    console.log(files[i]);
                    try {
                        let component = html.match(/\export\sdefault\s(.+)/)[1];
                        if (/^\$/.test(component)) {
                            funList.push({
                                fileName: files[i].replace('.ts', ''),
                                componentName: component.substr(0, component.length - 1)
                            });
                        } else {
                            componentList.push({
                                fileName: files[i].replace('.ts', ''),
                                componentName: component.substr(0, component.length - 1)
                            });
                        }
                        
                        if(len === componentList.length + funList.length) {
                            resolve({
                                componentList,
                                funList
                            })
                        }
                    } catch (error) {
                        reject('error:', files[i], i, data);
                    }
                    
                });
            }
        })
    })
}

getComponentList().then(res => {
    console.log(res);
    let { componentList, funList } = res;
    componentList.sort((a, b) => {
        a.componentName - b.componentName
    });
    funList.sort((a, b) => {
        a.componentName - b.componentName
    });
    let configSnippets = ''
    funList.forEach(item => {
        configSnippets += `import ${item.componentName} from './components/mtdm/${item.fileName}'`;
    });
    componentList.forEach(item => {
        configSnippets += `import ${item.componentName} from './components/mtdm/${item.fileName}'`;
    });
    configSnippets += `
            const defaultMTDInfo: MTDMInfo = {
                normalComponents: [
                    ${componentList.map(item => item.componentName).join(',')}
                ],
                funcComponents: [
                    ${funList.map(item => item.componentName).join(',')}
                ]
            };
            export default defaultMTDInfo;
            `
    configSnippets = js_beautify(configSnippets, { indent_size: 4, max_preserve_newlines: 10 });
    fs.writeFile(configPath, configSnippets, 'utf8', (err) => {
        err ? console.log(err) : console.log('文件创建成功')
    })

}).catch(err => {
    console.log(err);
})
