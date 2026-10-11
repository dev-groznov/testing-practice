import { capitalize, reverseString, calculator } from './function.js'

test('First character capitalized (1)', () => {
    expect(capitalize('go home')).toBe('Go home')
})

test('First character capitalized (2)', () => {
    expect(capitalize('hi. How are you?')).toBe('Hi. How are you?')
})

test('Reverse string (1)', () => {
    expect(reverseString('go home')).toBe('emoh og')
})

test('Reverse string (2)', () => {
    expect(reverseString('hi. How are you?')).toBe('?uoy era woH .ih')
})

test('two plus two is four', () => {
    expect(calculator.add(2, 2)).toBe(4)
})

test('4 plus 8 is 32', () => {
    expect(calculator.add(4, 8)).toBe(12)
})

test('two subtract two is null', () => {
    expect(calculator.subtract(2, 2)).toBe(0)
})

test('4 subtract 8 is -4', () => {
    expect(calculator.subtract(4, 8)).toBe(-4)
})

test('two divide two is one', () => {
    expect(calculator.divide(2, 2)).toBe(1)
})

test('4 divide 8 is 0.5', () => {
    expect(calculator.divide(4, 8)).toEqual(0.5)
})

test('two multiply two is four', () => {
    expect(calculator.multiply(2, 2)).toBe(4)
})

test('3 multiply 4 is 243', () => {
    expect(calculator.multiply(3, 5)).toBe(243)
})

