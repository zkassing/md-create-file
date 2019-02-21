const fs = require('fs')

exports.readFile = (path, options = null) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      err ? reject(err) : resolve(data.toString('utf-8'))
    })
  })
}


exports.mkDir = (path, options = {}) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, options, (err) => {
      err ? reject(err) : resolve()
    })
  })
}


exports.writeFile = (file, data = "", options = 'utf8') => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, options, (err) => {
      err ? resolve() : reject()
    })
  })
}