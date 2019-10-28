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

formatCheck = (path) => {
    // let input = 
    return true
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
    return {message: "Ok", isValid: true}
}