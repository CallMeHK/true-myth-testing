import {task} from './task'

describe('#task', () => {
        it('returns ok if promise resolves', async () => {
            const result = await task(() => Promise.resolve('res'))
            expect(result.unwrapOr('fail')).toBe('res')
        })
        it('returns null object msg on null arg', async () => {
            const result = await task(() => Promise.reject(new Error('rej')))
            expect(result.unsafelyUnwrapErr().message).toBe('rej')
        })
})

