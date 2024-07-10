import { token } from '@/lib/token'
import Form from '../../components/form'

const Page = () => {
    const tokenNumber = token()

    return (
        <div className="h-screen text-white px-4 bg-primary">
            <div className="flex h-full items-center lg:ml-96">
                <Form token={tokenNumber} />
            </div>
        </div>
    )
}

export default Page
