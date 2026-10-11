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