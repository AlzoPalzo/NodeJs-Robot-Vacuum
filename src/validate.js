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
    if (splitArg.length === 1) {
        return arg.concat(".txt")
    }
    else if (splitArg.length > 1){
        if (splitArg[splitArg.length - 1] === ".txt"){
            return arg
        }
        else{
            return false
        }
    }
    else{return false}
}

exports.pathCheck = (path) => {
    console.log('5')
}

exports.formatCheck = () => {
    console.log('4')
}

