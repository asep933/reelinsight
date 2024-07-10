import { cookies } from 'next/headers'

export const token = () => {
    const cookiesList = cookies()
    const tokenCode = cookiesList.get('XSRF-TOKEN')

    return tokenCode
}
