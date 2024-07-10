import FormEdit from '@/app/(app)/components/formEdit'
import LoadingComponent from '@/components/LoadingComponent'
import { token } from '@/lib/token'
import { Suspense } from 'react'

const Page = ({ params }) => {
    const tokenCode = token()

    return (
        <div
            className="flex h-screen bg-primary lg:ml-96 items-center
        px-4">
            <Suspense fallback={<LoadingComponent />}>
                <FormEdit id={params.id} token={tokenCode} />
            </Suspense>
        </div>
    )
}

export default Page
