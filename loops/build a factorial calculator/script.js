let num = 5;

const factorialCalculator = (number) => {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialCalculator(5))
console.log(factorialCalculator(7))

let factorial = factorialCalculator(num)

console.log(factorial)

let resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg)