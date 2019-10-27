const validate = require('./validate')

//More than one process argument
test('expects 2 process arguments to be too many', () =>
{
    expect(validate.argsCheck(['arg1', 'arg2']).valid).toBe(false)
})

//One process argument
test('expects 1 process arguments to be correct', () =>
{
    expect(validate.argsCheck(['arg1']).valid).toBe(true)
})

//valid file type returns itself
test('expects valid file type to return itself', () => {
    expect(validate.typeCheck("./src/example1.txt")).toBe("./src/example1.txt")
})