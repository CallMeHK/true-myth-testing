import * as fn from './index'

describe('#index', () => {
    describe('#fn.a: Maybe with chain + unwrap', () => {
        it('returns Hello Ty!!! on input Ty', () => {
            const result = fn.a('Ty')
            expect(result).toBe('Hello Ty!!!')
        })
        it('returns null object msg on null arg', () => {
            const result = fn.a(null)
            expect(result).toBe('You provided a null object')
        })
    })
    describe('#fn.b: Result with chain + unwrap', () => {
        it('Returns a result string', () => {
            const result = fn.b(true)
            expect(result).toBe('The result is: OK!')
        })
        it('Returns an error string', () => {
            const result = fn.b(false)
            expect(result).toBe('The error is: ERR!')
        })
    })
    describe('#fn.c: Promise result with matcher', () => {
        it('Returns a result string', async () => {
            const result = await fn.c(true)
            expect(result).toBe('Result: Promise resolved value RESOLVED!')
        })
        it('Returns an error string', async () => {
                const result = await fn.c(false)
                expect(result).toBe('Error: REJECTED!')
        })
    })
})
