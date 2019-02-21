const path = require('path')

const fs = require('fs')

const {mkDir} = require('./FSUntil')
const filePath = path.resolve(__dirname + '/dist')
mkDir(filePath)