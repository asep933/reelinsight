"use client"

import { useAuth } from '@/hooks/auth'
import Loading from '@/app/(app)/Loading'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <>
            <main>{children}</main>
        </>
    )
}

export default AppLayout
