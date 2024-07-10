'use client'

import { useEffect, useState } from 'react'
import Card from './Card'
import CarouselComponentSec from './CarouselComponentSec'

const FilmListSec = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getFilms = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/films?page=2`,
                    {
                        cache: 'no-store',
                    },
                )
                const json = await res.json()
                setData(() => json.data)
            } catch (error) {
                console.log(error)
            }
        }

        getFilms()
    }, [])

    return (
        <>
            <CarouselComponentSec>
                {data?.map(datas => (
                    <div className="w-full" key={datas.id}>
                        <Card
                            imagePath={`${process.env.NEXT_PUBLIC_BACKEND_URL}${datas.image_thumbnail}`}
                            imageTitle={datas.title}
                            isUnggulan={datas?.unggulan?.film_id}
                        />
                    </div>
                ))}
            </CarouselComponentSec>
        </>
    )
}

export default FilmListSec
