import path from 'path'
import * as Utils from './utils'

class Creator {

  newReactNativeComponent(name) {
    //TODO MAKE THIS
  }

  newWebAppComponent(name) {
    const fileNames = ['component.js', 'style.js']

    fileNames.forEach((fileName) => {
      const srcPath =  path.join(__dirname, 'templates', 'web-app', fileName)
      const destPath = path.join(__dirname, '..', 'web-app', 'components', name)
      Utils.copy(srcPath, destPath, fileName)
    })

  }

  newComponent(name) {
    this.newWebAppComponent(name)
    this.newReactNativeComponent(name)
  }
}

export default new Creator()
