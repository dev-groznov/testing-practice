export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

export function reverseString(str) {
    return str.split('').reverse().join('')
}

const calculator = {
    add(num1, num2) {
        return num1 +  num2
    },

    subtract(num1, num2) {
        return num1 -  num2
    },

    divide(num1, num2) {
        return num1 /  num2
    },

    multiply(num1, num2) {
        return num1 ** num2
    }
}

export { calculator }

export function analyzeArray(arr) {
    return {
        average: arr.reduce((acc, curr) => acc + curr, 0) / arr.length,
        min: arr.reduce((acc, curr) => (curr < acc ? curr : acc)),
        max: arr.reduce((acc, curr) => (curr > acc ? curr : acc)),
        length: arr.length
    }
}

export function caesarCipher(str, num) {
    str = str.split('')

    for(let i = 0; i < str.length; i++) {
        if ('a'.charCodeAt(0) <= str[i].charCodeAt(0) && str[i].charCodeAt(0) <= 'z'.charCodeAt(0)) {
            str[i] = String.fromCharCode(((str[i].charCodeAt(0) + num) 
                % ('z'.charCodeAt(0) + 1)
                % 'a'.charCodeAt(0))
                + 'a'.charCodeAt(0))
        } else if ('A'.charCodeAt(0) <= str[i].charCodeAt(0) && str[i].charCodeAt(0) <= 'Z'.charCodeAt(0)) {
            str[i] = String.fromCharCode(((str[i].charCodeAt(0) + num) 
                % ('Z'.charCodeAt(0) + 1)
                % 'A'.charCodeAt(0))
                + 'A'.charCodeAt(0))
        }
    }

    return str.join('')
}