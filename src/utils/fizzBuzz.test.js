

import { fizzBuzz } from './fizzBuzz'



describe('FIZZBUZZ test', () => {
    it('with i*3', () => {
        expect(fizzBuzz(3)).toBe("Fizz")
        expect(fizzBuzz(21)).toBe("Fizz")
        expect(fizzBuzz(51)).toBe("Fizz")
        expect(fizzBuzz(72)).toBe("Fizz")
        expect(fizzBuzz(99)).toBe("Fizz")
    })
    it('with i*5', () => {
        expect(fizzBuzz(5)).toBe("Buzz")
        expect(fizzBuzz(25)).toBe("Buzz")
        expect(fizzBuzz(50)).toBe("Buzz")
        expect(fizzBuzz(80)).toBe("Buzz")
        expect(fizzBuzz(100)).toBe("Buzz")
    })
    it('with not i*3 nor i*5', () => {
        expect(fizzBuzz(7)).toBe("!== Fizz, Buzz, FizzBuzz")
        expect(fizzBuzz(19)).toBe("!== Fizz, Buzz, FizzBuzz")
        expect(fizzBuzz(32)).toBe("!== Fizz, Buzz, FizzBuzz")
        expect(fizzBuzz(71)).toBe("!== Fizz, Buzz, FizzBuzz")
        expect(fizzBuzz(94)).toBe("!== Fizz, Buzz, FizzBuzz")
    })
    it('with i*3 and i*5', () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz")
        expect(fizzBuzz(30)).toBe("FizzBuzz")
        expect(fizzBuzz(45)).toBe("FizzBuzz")
        expect(fizzBuzz(60)).toBe("FizzBuzz")
        expect(fizzBuzz(90)).toBe("FizzBuzz")
    })
    it('with i<=0 or i>100', () => {
        expect(fizzBuzz(-1)).toBe('>=0 || >100')
        expect(fizzBuzz(0)).toBe('>=0 || >100')
        expect(fizzBuzz(101)).toBe('>=0 || >100')
        expect(fizzBuzz(110)).toBe('>=0 || >100')
        expect(fizzBuzz(110000)).toBe('>=0 || >100')
    })
})
