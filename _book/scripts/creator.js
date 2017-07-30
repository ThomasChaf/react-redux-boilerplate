import path from 'path'
import * as Utils from './utils'

class Creator {

  newReactNativeComponent(name) {
    const fileNames = ['component.js', 'style.js']

    fileNames.forEach((fileName) => {
      const srcPath =  path.join(__dirname, 'templates', 'mobile-apps', fileName)
      const destPath = path.join(__dirname, '..', 'mobile-apps', 'components', name)
      Utils.copy(srcPath, destPath, fileName)
    })
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

  newReducer(name) {
    const srcPath =  path.join(__dirname, 'templates', 'common', 'reducer.js')
    const destPath = path.join(__dirname, '..', 'common', 'reducers')
    Utils.copy(srcPath, destPath, `${name}.js`)
  }

  newAction(name) {
    const srcPath =  path.join(__dirname, 'templates', 'common', 'action.js')
    const destPath = path.join(__dirname, '..', 'common', 'actions')
    Utils.copy(srcPath, destPath, `${name}.js`)
  }
}

export default new Creator()
