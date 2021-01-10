import * as fs from 'fs-extra';
import * as path from 'path';
import { workspace } from 'vscode';
import defaultConfig from './defaultMtdInfo';

class MTDConfigReader {
    config = {
        ...defaultConfig
    };

    constructor() {
        // this.listen()
        // this.loadMTDConfig()
    }

    get normalComponents () {
        return this.config.normalComponents;
    }

    get funcComponents () {
        return this.config.funcComponents;
    }

    /* private loadMTDConfig() {
      try {
        const userConfig = {
          normalComponents: [],
          funcComponents: []
        }
        const rootPath = this.rootPath;
        const config = this.config
        const userConfigFileList = fs.readdirSync(rootPath)
        userConfigFileList.forEach(fileName => {
          let comConfig = require(`${rootPath}/${fileName}`)
          Object.keys(comConfig).forEach((key: string) => {
            if (key === 'default') {
              return
            }
            if (comConfig[key].type === 'normal') {
              userConfig.normalComponents.push(comConfig[key])
            } else {
              userConfig.funcComponents.push(comConfig[key])
            }
          })
        })
        config.normalComponents = userConfig.normalComponents || []
        config.funcComponents = userConfig.funcComponents || []
      } catch(e) {
        console.debug(e)
      }
    } */

    /**
     * 监听文件变化，当用户安装mtd-vue时自动去读取配置文件
     */
    /* private listen() {
      fs.watchFile(this.rootPath, cur => {
        if (cur.isDirectory()) {
          this.loadMTDConfig()
        } else {
          this.config.normalComponents = defaultConfig.normalComponents
          this.config.funcComponents = defaultConfig.funcComponents
        }
      })
    } */
}

export default new MTDConfigReader();
