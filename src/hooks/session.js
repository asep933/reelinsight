import { cookies } from 'next/headers'

export const sessionHook = () => {
    const laravelSession = cookies()
    const session = laravelSession.get('laravel_session')

    return session
}
