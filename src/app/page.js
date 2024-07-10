'use client'

import FilmList from '@/components/FilmList'
import FilmListSec from '@/components/FilmListSec'
import Hero from '@/components/Hero'
import LoadingComponent from '@/components/LoadingComponent'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/navigation'
import { Suspense, useEffect } from 'react'

const Home = () => {
    const { user } = useAuth({ middleware: 'guest' })
    const router = useRouter()

    useEffect(() => {
        if (user) router.push('/dashboard')
        if (!user) router.push('/')
    }, [user])

    return (
        <>
            <div className="dark:bg-gray-900 sm:items-center sm:pt-0">
                <Suspense fallback={<LoadingComponent />}>
                    <Hero />
                    
                    <section className='pt-8'>
                        <FilmList />
                        <FilmListSec />
                    </section>
                </Suspense>
            </div>
        </>
    )
}

export default Home
