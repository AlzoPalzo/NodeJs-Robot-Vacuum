const validate = require('./validate')

test('expects 2 process arguments to be too many', () =>
{
    expect(validate.check(['arg1', 'arg2']).message).toBe("Invalid number of arguments\nPlease enter just the filepath: \n")
})

test('requires at least one argument', () =>
{
    expect(validate.check([]).message).toBe("Invalid number of arguments\nPlease enter just the filepath: \n")
})

test('expects .txt file', () =>
{
    expect(validate.check(['./textFiles/invalidFormat.csv']).message).toBe("Invalid file type, must be .txt \nPlease enter the filepath: \n ")
})

test('expects a valid file path', () =>
{
    let path = './textFiles/doesntExist.txt'
    expect(validate.check([path]).message).toBe(`No file found at \"${path}\"\nPlease enter the filepath: \n`)
})

test('invalid coordinates are recognised', () =>
{
    expect(validate.check(['./textFiles/invalid2.txt']).message).toBe("One or more coordinates not in \nx y\nformat\nPlease enter the filepath: \n")
})

test('recognises out of bounds coordinates', () =>
{
    expect(validate.check(['./textFiles/outOfBounds1.txt']).message).toBe( "One or more coordinates out of bounds\nPlease enter the filepath: \n")
})