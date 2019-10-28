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
    boardXY = input[0].split(' ')
    if (boardXY.length !== 2) {
        "Board coordinates must be in the format: \nx y\nPlease enter just the filepath: \n"
    }
    return{isValid: true}
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
    if(!formatCheck(input).isValid){
        return formatCheck(input)
    }
    return {input, message: "Ok", isValid: true}
}