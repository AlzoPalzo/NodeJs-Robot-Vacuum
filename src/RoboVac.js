const fs = require('fs')

let input;
state={
    gridLength: 0,
    gridHeight: 0,
    vacPosX: 0,
    vacPosY: 0,
    dirt: []
}

fs.readFileSync('./textFiles/example1.txt', 'utf8', function(err, data){
    if (err) throw err;
    input = data;
})
