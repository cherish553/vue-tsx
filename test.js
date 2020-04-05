
const files = require.context('.', false, /\.vue$/)
 console.log(files)
// const pages = {}
 
 
// files.keys().forEach(key => {
 
// pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
 
// })
 