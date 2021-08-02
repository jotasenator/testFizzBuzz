
import { fizzBuzz } from "./fizzBuzz"

describe('FIZZBUZZ test', () => {
    it('with i=3', () => {
        expect(fizzBuzz(3)).toBe("Fizz")
    })
    it('with i=5', () => {
        expect(fizzBuzz(5)).toBe("Buzz")
    })
    it('with i=7', () => {
        expect(fizzBuzz(7)).toBe("not Fizz nor Buzz or FizzBuzz")
    })
    it('with i=90', () => {
        expect(fizzBuzz(90)).toBe("FizzBuzz")
    })
    it('with i=0', () => {
        expect(fizzBuzz(0)).toBe(undefined)
    })
})
