import AuthCard from '@/app/(auth)/AuthCard'

export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="antialiased">
                <AuthCard>{children}</AuthCard>
            </div>
        </div>
    )
}

export default Layout
