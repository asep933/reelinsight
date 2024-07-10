import { Nunito } from 'next/font/google'
import '@/app/global.css'
import Navbar from '@/components/Navbar'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={`${nunitoFont.className} bg-primary`}>
            <body className="antialiased bg-secondary">
                <Navbar />
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: 'ReelInsight',
}

export default RootLayout
