const Calculator = require('../functions/calculator')
describe("Calculator",()=>{
    test("Add", ()=>{
        expect(Calculator.Add(1,2)).toBe(3)
    })
    test("Subtrac", ()=>{
        expect(Calculator.Subtract(1,2)).toBe(-1)
    })
    test("Mupltiply", ()=>{
        expect(Calculator.Multiply(1,2)).toBe(2)
    })
    test("Divide", ()=>{
        expect(Calculator.Divide(4,2)).toBe(2)
    })
})