import { Result } from 'true-myth'

const { ok, err } = Result

const task = async <T>(promise: () => Promise<T>): Promise<Result<T, Error>> => {
    try {
        const result = await promise()
        return ok(result)
    } catch (e) {
        return err(e)
    }
}

export { task }
