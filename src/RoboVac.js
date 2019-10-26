const fs = require('fs')

let input;
state={
    gridLength: 0,
    gridHeight: 0,
    vacPosX: 0,
    vacPosY: 0,
    dirt: [],
    dirtCount: 0,
}

function readFile(){
    try {
        input = fs.readFileSync("./textFiles/example1.txt", "utf8").split('\n')
    } catch (error) {
        console.log('ERROR: ', error.stack)
    }
}

function initialState(){
    for (let i = 0; i < input.length - 1; i++) {
        console.log(i)
        const xyVals = input[i].split(' ')
        if (i === 0) {
            state.gridLength = xyVals[0]
            state.gridHeight = xyVals[1]
        }
        else if(i === 1){
            state.vacPosX = xyVals[0]
            state.vacPosY = xyVals[1]
        }
        else{
            state.dirt = [...state.dirt, xyVals]
        }
    }
}
readFile()
initialState()

console.log(input)
console.log(state)