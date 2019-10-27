const fs = require('fs')

exports.argsCheck = (args) => {
    if (args.length === 0){
        return {message: "Please enter the name of the file you wish to use", valid: false}
    }
    else if (args.length > 1){
        return {message: "Too many arguments, please enter the name of the file you wish to use", valid: false}
    }
    else{
        return{message: "Ok", valid: true}
    }
}

exports.typeCheck = (arg) => {
    let splitArg = arg.split('.')
    if (splitArg.length > 1){
        if (splitArg[splitArg.length - 1] === "txt"){
            return true
        }
        else{
            return false
        }
    }
    else{return false}
}

exports.pathCheck = (path) => {
    try {
        if (fs.existsSync(path)){
            return true
        }
        else return false
    } catch (err) {
        console.error(err)
    }
}

exports.formatCheck = () => {
    console.log('4')
}

