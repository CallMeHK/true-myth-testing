import { Maybe, Result } from 'true-myth'
import { task } from './task'
const { ok, err } = Result

const a = (val: string | null): string =>
    Maybe.of(val)
        .map((str: string) => 'Hello ' + str)
        .map((str: string) => str + '!!!')
        .unwrapOrElse(() => 'You provided a null object')

const _ok = (val: boolean): Result<string, string> => (val ? ok('OK!') : err('ERR!'))

const b = (val: boolean) =>
    _ok(val)
        .map((str: string) => 'The result is: ' + str)
        .unwrapOrElse((str: string) => 'The error is: ' + str)

const _resolve = (val: boolean): Promise<string> => (val ? Promise.resolve('RESOLVED!') : Promise.reject(new Error('REJECTED!')))

const c = async (val: boolean): Promise<string> => {
    const result = await task(() => _resolve(val))
    return result
        .map((str: string) => 'Promise resolved value ' + str)
        .match({
            Ok: (str: string) => 'Result: ' + str,
            Err: (e: Error) => 'Error: ' + e.message,
        })
}

export { a, b, c }
