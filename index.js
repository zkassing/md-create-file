const path = require('path')
const {readFile, mkDir, writeFile} = require('./FSUntil')
const publicPath = path.resolve(__dirname, 'dist')
// 创建正则表达式匹配到括号中的内容
const reg = /(?<=\()[^\)]*(?=\))/g

const formatFilesName = (filesName) => {
  return filesName.map(filename => filename.split('/'))
}

// 处理数组创建对应的文件或文件夹
const isMd = (value) => {
  return value.indexOf('.md') !== -1
}

const createDir = async (name) => {
  try {
    await mkDir(name)
  } catch (err) {
    console.log(err)
  }
}

const createFile = async (name) => {
  try {
    await writeFile(name)
  } catch (err) {
    console.log(err)
  } 
}

const createStructure = (filenames) => {
  filenames.forEach(names => {
    console.log("________________________________")
    names.forEach(name => {
      const resolveName = path.resolve(publicPath, name)
      isMd(name) ? createFile(resolveName) : createDir(resolveName)
    })
  })
}

const mdCraeteFile = async (menuPath) => {
  // 获取md文章内容
  try {
    const text = await readFile(menuPath)
    let filesName = text.match(reg)
    // 对files进行处理得到新的files
    filesName = formatFilesName(filesName)
    createStructure(filesName)
  } catch (err) {
    console.log(`error: ${err}`)
  }
}

mdCraeteFile('./SUMMARY.md')

// module.exports = mdCraeteFile