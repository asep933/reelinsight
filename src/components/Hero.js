'use client'

import HeroMain from './HeroMain'
import { useEffect, useState } from 'react'
import { getFilms } from '@/api/getFilms'
import CarouselHero from './CarouselHero'
import LoadingComponent from './LoadingComponent'
import { useAuth } from '@/hooks/auth'

const Hero = () => {
    const [film, setFilm] = useState([])
    const [loading, setLoading] = useState(true)
    const [status, setStatus] = useState({
        pagination: null,
        autoplay: null,
    })
    const { user } = useAuth({ middleware: 'guest' })

    useEffect(() => {
        if (!user)
            setStatus({
                pagination: false,
                autoplay: false,
            })

        if (user)
            setStatus({
                pagination: true,
                autoplay: true,
            })
    }, [user])

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const res = await getFilms()

                setFilm(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        fetchFilms()
    }, [])

    return (
        <div className="w-full h-auto text-secondary lg:pt-0 pt-20">
            {loading === true && <LoadingComponent />}

            {loading === false && (
                <CarouselHero
                    pagination={status.pagination}
                    autoplay={status.autoplay}>
                    {film.map(datas => (
                        <div key={datas.id}>
                            <HeroMain
                                imagePath={`${datas.image_thumbnail}`}
                                imageTitle={datas.title}
                                title={datas.title}
                                description={datas.description}
                            />
                        </div>
                    ))}
                </CarouselHero>
            )}
        </div>
    )
}

export default Hero
