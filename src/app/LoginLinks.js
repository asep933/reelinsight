'use client'

import { useAuth } from '@/hooks/auth'
import Button from '@/components/Button'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const LoginLinks = ({ isBrowse, setIsBrowse }) => {
    const { user, logout } = useAuth({ middleware: 'guest' })
    const pathname = usePathname()
    const [status, setStatus] = useState(`sign up`)
    const router = useRouter()

    useEffect(() => {
        if (pathname === `/login`) {
            setStatus('sign up')
        } else {
            setStatus(`sign in`)
        }
    }, [pathname])

    return (
        <div className="block px-6 py-4">
            {user ? (
                <>
                    <Link
                        onClick={() => setIsBrowse(isBrowse ? '' : false)}
                        className="mr-4"
                        href={'/admin'}>
                        Admin
                    </Link>
                    <Button
                        onClick={async () => await logout()}
                        className="bg-accent text-secondary">
                        <p className="text-sm text-gray-700">log out</p>
                    </Button>
                </>
            ) : (
                <>
                    {status === `sign in` && (
                        <Button
                            onClick={() => {
                                router.push(`/login`)
                                setIsBrowse(isBrowse ? '' : false)
                            }}
                            className="bg-accent text-secondary">
                            <p className="text-sm text-gray-700">sign in</p>
                        </Button>
                    )}
                    {status === `sign up` && (
                        <Button
                            onClick={() => {
                                router.push(`/register`)
                                setIsBrowse(isBrowse ? '' : false)
                            }}
                            className="bg-accent text-secondary">
                            <p className="text-sm text-gray-700">sign up</p>
                        </Button>
                    )}
                </>
            )}
        </div>
    )
}

export default LoginLinks
