import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'

export const copy = (src, dest, fileName) => {

  mkdirp(dest, () => {
    fs.createReadStream(src).pipe(fs.createWriteStream(path.join(dest, fileName)))
  })

}
