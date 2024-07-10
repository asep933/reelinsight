'use client'

import { Crud } from '@/api/crud'
import CardComponent from '@/components/CardComponent'
import LoadingComponent from '@/components/LoadingComponent'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Prev from '@/components/pagination/Prev'
import Next from '@/components/pagination/Next'

const Page = () => {
    const [datas, setDatas] = useState(null)
    const [search, setSearch] = useState(null)
    const [page, setPage] = useState(1)
    const { searchFilm } = Crud()
    const params = useSearchParams()
    const query = params.get('search')

    const fetchSearch = async () => {
        const res = await searchFilm(search, page)
        setDatas(res)
    }

    useEffect(() => {
        setSearch(query)
        if (search !== null) fetchSearch()
    }, [query, search, page])

    return (
        <>
            {datas?.data?.length === 0 && (
                <div className="h-screen flex items-center justify-center">
                    <h1 className="text-2xl font-bold text-white fixed">
                        film not found
                    </h1>
                </div>
            )}
            {datas === null && <LoadingComponent />}
            <div className="pt-32 pb-16 px-8">
                <ul
                    className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2
                    grid-cols-1 gap-4">
                    {datas?.data?.map(res => (
                        <li key={res.id}>
                            <CardComponent
                                imagePath={`${process.env.NEXT_PUBLIC_BACKEND_URL}${res.image_thumbnail}`}
                                title={res.title}
                                description={res.description}
                                isUnggulan={res?.unggulan?.film_id}
                            />
                        </li>
                    ))}
                </ul>

                {datas?.data.length > 9 && (
                    <div className="flex justify-center py-4 text-white gap-3">
                        <Prev setPage={setPage} lastPage={datas?.last_page} />
                        <Next setPage={setPage} lastPage={datas?.last_page} />
                    </div>
                )}
            </div>
        </>
    )
}

export default Page
