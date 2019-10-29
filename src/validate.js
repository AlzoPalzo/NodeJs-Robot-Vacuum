const fs = require('fs')

argsCheck = (path) => {
    if (path.length !== 1)  return false
    else return true
}

typeCheck = (path) => {
    let splitArg = path.split('.')
    if (splitArg.length > 1 && splitArg[splitArg.length - 1] === "txt") return true
    else return false
}

pathCheck = (path) => {
    try {
        if (fs.existsSync(path)) return true
        else return false
    } catch (err) {
        console.error(err)
    }
}

readTextFile = (path) => {
    try {
        const input = fs.readFileSync(path, "utf8").split('\n')
        return input
    } catch (error) {
        console.log('ERROR: ', error.stack)
    }
}

formatCheck = (input) => {
    if (input.length < 3) {
        return {
            message: "Insufficient instructions in text file please use the format: \nx y\nx y\n...\nx y\n...\nNESW...\nPlease enter the filepath: \n",
            isValid: false
        }
    }
    boardXY = input[0]
    if (!validCoords(boardXY) || parseInt(boardXY.split(' ')[0]) === 0 || parseInt(boardXY.split(' ')[1]) === 0){
        return {
            message: "Board Coords must be in the format:\nx y\nand greater than 0\nPlease enter the filepath: \n",
            isValid: false
        }
    }
    let boardLength = parseInt(boardXY[0]);
    let boardHeight = parseInt(boardXY[1]);

    otherCoords = input.slice(1, input.length - 1)
    for (let i = 0; i < otherCoords.length; i++) {
        if (!validCoords(otherCoords[i])) {
            return {
                message: "One or more coordinates not in \nx y\nformat\nPlease enter the filepath: \n",
                isValid: false
            }
        }
        const xy = otherCoords[i].split(' ')
        if (parseInt(xy[0]) > boardLength || parseInt(xy[0] < 0) || parseInt(xy[1]) > boardHeight || parseInt(xy[1] < 0)) {
            return {
                message: "One or more coordinates out of bounds\nPlease enter the filepath: \n",
                isValid: false
            }
        }


    }

    return{isValid: true}
}

validCoords = (coords) => {
    const xy = coords.split(' ')
    if (xy.length !== 2) {
        return false
    }
    const x = parseInt(xy[0])
    const y = parseInt(xy[1])

    if (x || x === 0) {
        if (y || y === 0) {
            return true
        }
    }
    return false
}

exports.check = (pathArg) => {
    if (!argsCheck(pathArg)) {
        return {message: "Invalid number of arguments\nPlease enter just the filepath: \n", isValid: false}
    }
    const path = pathArg[0]

    if (!pathCheck(path)) {
        return {message: `No file found at \"${path}\"\nPlease enter the filepath: \n`, isValid: false}
    }
    if (!typeCheck(path)) {
        return {message: "Invalid file type, must be .txt \nPlease enter the filepath: \n ", isValid: false}
    }
    const input = readTextFile(path)
    const checkedFormat = formatCheck(input)
    if(!checkedFormat.isValid){
        return checkedFormat
    }
    return {input, message: "Ok", isValid: true}
}