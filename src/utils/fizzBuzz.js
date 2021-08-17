export const fizzBuzz = (i) => {
    if (i > 0 & i < 101) {

        if (i % 3 === 0 && i % 5 === 0) {
            return 'FizzBuzz'
        } else if (i % 3 === 0) {
            return 'Fizz'
        } else if (i % 5 === 0) {
            return 'Buzz'
        } else {
            return '!== Fizz, Buzz, FizzBuzz'
        }
    } else {
        return '>=0 || >100'
    }

}