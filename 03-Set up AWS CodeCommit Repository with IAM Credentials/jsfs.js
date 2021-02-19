let fs = require('fs')

async function cleanFiles() {
    var myPath = 'c:\\data'
    fs.readdir(myPath, (err, files) => {
        files.forEach(fileName => {
            fs.rm(`${myPath}\\${fileName}`)
        })
    })
}

export { cleanFiles }