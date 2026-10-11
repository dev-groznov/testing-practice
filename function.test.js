import { capitalize, reverseString } from './function.js'

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