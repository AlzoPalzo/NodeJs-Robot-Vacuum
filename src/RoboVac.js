console.log(process.argv)

const fs = require('fs')

fs.readFile('./textFiles/example1.txt', 'utf8', function(err, data){
    if (err) throw err;
    console.log(data)
})
