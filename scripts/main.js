const TreehouseList = require('./TreehouseList')
const { treehouses } = require('./data')

const main = document.querySelector('main')
TreehouseList.render(main, treehouses)
