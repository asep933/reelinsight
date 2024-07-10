import Films from '@/app/(app)/components/Films'
import LoadingComponent from '@/components/LoadingComponent'
import { token } from '@/lib/token'
import { Suspense } from 'react'

const Page = () => {
    const tokenCode = token()

    return (
        <>
            <Suspense fallback={<LoadingComponent />}>
                <Films token={tokenCode} />
            </Suspense>
        </>
    )
}

export default Page
