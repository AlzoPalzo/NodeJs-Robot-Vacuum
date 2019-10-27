const validate = require('./validate')

test('expects 2 process arguments to be too many', () =>
{
    expect(validate.argsCheck(['arg1', 'arg2']).valid).toBe(false)
})

test('expects 1 process arguments to be correct', () =>
{
    expect(validate.argsCheck(['arg1']).valid).toBe(true)
})

test('expects valid file type to return true', () => {
    expect(validate.typeCheck("./src/example1.txt")).toBe(true)
})

test('expects invalid file type to return false', () => {
    expect(validate.typeCheck("invalidFileType.csv")).toBe(false)
})

test('expects valid path to return true', () => {
    expect(validate.pathCheck("./textFiles/example1.txt")).toBe(true)
})