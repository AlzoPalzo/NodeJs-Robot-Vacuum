const fs = require('fs')

const validate = require('./validate')

let input;
const state={
    gridLength: 0,
    gridHeight: 0,
    vacPosX: 0,
    vacPosY: 0,
    dirt: [],
    dirtRemoved: 0,
}

function readFile(){
    try {
        input = fs.readFileSync("./textFiles/example1.txt", "utf8").split('\n')
    } catch (error) {
        console.log('ERROR: ', error.stack)
    }
}

function initialState(){
    state.dirtRemoved = 0
    for (let i = 0; i < input.length - 1; i++) {
        
        const xyVals = input[i].split(' ').map(val => {
            return parseInt(val, 10)
        });

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

function moveVac() {
    const directions = input[input.length - 1].split('')
    directions.forEach(direction => {
        switch (direction.toUpperCase()) {
            case 'N':
                if (state.vacPosY < state.gridHeight){
                    state.vacPosY += 1;
                    dirtCheck()
                }
                break;
            case 'E':
                if (state.vacPosX < state.gridLength) {
                    state.vacPosX += 1;
                    dirtCheck()
                }
                break;
            case 'S': 
                if (state.vacPosY !== 0) {
                    state.vacPosY -= 1;
                    dirtCheck()
                }
                break;
            case 'W':
                if (state.vacPosX !== 0) {
                    state.vacPosX -= 1;
                    dirtCheck()
                }
        }
    });
}

function dirtCheck(){
    const dirtAmount = state.dirt.length
    state.dirt = state.dirt.filter(dirt => { 
        return dirt[0] !== state.vacPosX || dirt[1] !== state.vacPosY
    })
    if (dirtAmount !== state.dirt.length)state.dirtRemoved += 1
}


const args = process.argv.slice(2)

readFile()
initialState()
moveVac()

console.log(`${state.vacPosX} ${state.vacPosY} \n${state.dirtRemoved}`)