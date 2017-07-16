#!/usr/bin/env node

var fs = require('fs')
var path = require('path')

if (process.argv.length !== 3 || process.argv[2] === "-h" || process.argv[2] === "--help") {
  console.log("Usage: react-redux-native-boilerplate [APP NAME]")
  process.exit(0)
}

if (process.argv[2] === "-v") {
  console.log("v 1.4.0")
  process.exit(0)
}

var dir = path.join(process.cwd(), '/', process.argv[2])
console.log('Create:', dir)

if (fs.existsSync(dir)) {
  console.log('Error directory already exist')
  process.exit(0)
}

fs.mkdirSync(dir)

var copy = function(src, dest) {
  var exists = fs.existsSync(src)
  var stats = exists && fs.statSync(src)
  var isDirectory = exists && stats.isDirectory()
  if (exists && isDirectory) {
    fs.mkdirSync(dest)
    fs.readdirSync(src).forEach(function(childItemName) {
      copy(path.join(src, childItemName), path.join(dest, childItemName))
    })
  } else if (exists) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dest))
  }
}

var dirnNames = ['api', 'common', 'mobile-apps', 'scripts', 'web-app']

dirnNames.forEach(function(dirName) {
  copy(path.join(__dirname, '..', dirName), path.join(dir, dirName))
})
