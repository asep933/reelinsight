'use client'

import LoginLinks from '@/app/LoginLinks'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Search from './search/Search'
import Humberger from './humberger/Humberger'

const Navbar = () => {
    const [path, setPath] = useState('/')
    const [isBrowse, setIsBrowse] = useState(false)
    const [isMenuMobile, setIsMenuMobile] = useState(false)
    const { user } = useAuth({
        middleware: 'guest',
    })
    const refNavbar = useRef()
    const refSearch = useRef()

    const handleClose = () => {
        if (isBrowse) setIsBrowse(false)
    }

    useEffect(() => {
        const handleMove = e => {
            if (isBrowse === true) {
                if (
                    !refNavbar.current.contains(e.target) &&
                    !refSearch.current.contains(e.target)
                )
                    window.document.body.style.cursor = 'pointer'
                if (
                    refNavbar.current.contains(e.target) ||
                    refSearch.current.contains(e.target)
                )
                    window.document.body.style.cursor = 'default'
            }

            if (isBrowse === false)
                window.document.body.style.cursor = 'default'
        }

        window.addEventListener('mousemove', handleMove)

        return () => window.removeEventListener('mousemove', handleMove)
    }, [isBrowse])

    useEffect(() => {
        const handleClick = e => {
            if (
                !refNavbar.current.contains(e.target) &&
                !refSearch?.current?.contains(e.target)
            ) {
                handleClose()
            }
        }

        window.addEventListener('click', handleClick)

        return () => window.removeEventListener('click', handleClick)
    }, [isBrowse])

    useEffect(() => {
        if (!user) {
            return setPath('/')
        } else {
            return setPath('/dashboard')
        }
    }, [user])

    return (
        <>
            <div className="fixed top-0 w-full lg:px-6 pt-6 px-4 z-[60] text-accent">
                <div
                    ref={refNavbar}
                    className="flex justify-between items-center bg-secondary h-14 py-2 
                    rounded-lg lg:px-8 px-4">
                    <div className="flex gap-8 lg:px-8 items-center">
                        <div>
                            <Link
                                onClick={() => {
                                    setIsBrowse(isBrowse ? '' : false)
                                    setIsMenuMobile(isMenuMobile ? '' : false)
                                }}
                                className="font-bold"
                                href={path}>
                                ReelInsight
                            </Link>
                        </div>

                        <Link
                            onClick={() => setIsBrowse(isBrowse ? '' : false)}
                            href={path}
                            className="text-base lg:block hidden">
                            Home
                        </Link>
                        <button
                            className="lg:block hidden"
                            onClick={() => setIsBrowse(!isBrowse)}>
                            Browse
                        </button>
                    </div>

                    <div className="lg:block hidden">
                        <LoginLinks
                            isBrowse={isBrowse}
                            setIsBrowse={setIsBrowse}
                        />
                    </div>

                    <Humberger
                        isMenuMobile={isMenuMobile}
                        setIsMenuMobile={setIsMenuMobile}
                    />
                </div>

                {isBrowse && (
                    <div
                        ref={refSearch}
                        className="text-sm bg-secondary max-w-xs h-20 mt-3 ml-56 
                rounded-md flex justify-center items-center flex-row py-2
                gap-2">
                        <Search setIsBrowse={setIsBrowse} />
                    </div>
                )}
            </div>

            {isMenuMobile && (
                <div className="bg-secondary top-0 left-0 fixed h-screen z-50 w-full">
                    <div className="flex flex-col justify-center pt-32 gap-2 items-center text-accent">
                        <Link
                            onClick={() =>
                                setIsMenuMobile(isMenuMobile ? '' : false)
                            }
                            href={path}
                            className="lg:hidden block text-lg">
                            Home
                        </Link>

                        <LoginLinks
                            isBrowse={isMenuMobile}
                            setIsBrowse={setIsMenuMobile}
                        />

                        <div className="flex flex-row gap-2 items-center">
                            <Search setIsBrowse={setIsMenuMobile} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
