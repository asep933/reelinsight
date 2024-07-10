'use client'

import Link from 'next/link'
import DeleteButton from './deleteButton'
import { useEffect, useState } from 'react'
import LoadingComponent from '@/components/LoadingComponent'
import Next from '@/components/pagination/Next'
import Prev from '@/components/pagination/Prev'
import Image from 'next/image'
import Arrow from '/public/arrow.svg'

const Films = ({ tokenCode }) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [isMenuMobile, setIsMenuMobile] = useState(false)

    const fetchData = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/films?page=${page}`,
                {
                    cache: 'no-store',
                },
            )

            if (!res.ok) throw new Error('error fetch data film')

            const json = await res.json()
            return setData(json)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
        setLoading(false)
    }, [page])

    return (
        <>
            {loading === true && <LoadingComponent />}
            {loading === false && (
                <div className="lg:ml-72 z-10 pt-32 pb-16 px-4 lg:px-0">
                    <div
                        className="text-accent flex flex-row items-center 
                    gap-2 py-2">
                        <button
                            className="flex flex-row gap-2 items-center lg:hidden"
                            onClick={() => setIsMenuMobile(!isMenuMobile)}>
                            <p>Menu</p>
                            <Image
                                className={`rotate-90 ${isMenuMobile === true ? '-rotate-180' : 'rotate-90'}`}
                                src={Arrow}
                                alt={'icon arrow'}
                                width={20}
                            />
                        </button>
                    </div>

                    <div
                        className={`bg-secondary py-2 px-3 text-accent ${isMenuMobile ? 'block' : 'hidden'}`}>
                        <Link href="/admin/addfilm">Add Film</Link>
                    </div>

                    <table className="table text-white">
                        <thead className="text-white">
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data?.map(data => (
                                <tr key={data.id} className="capitalize">
                                    <th>{data.title}</th>
                                    <td>{data.description}</td>
                                    <td className="flex gap-1">
                                        <Link
                                            href={`/admin/editFilm/${data.id}`}
                                            className="bg-accent hover:bg-yellow-600 inline-flex items-center px-4 py-2 
                                            rounded-full font-bold text-xs text-secondary capitalize 
                                            tracking-widest focus:outline-primary active:outline-none
                                            focus:border-primary focus:ring ring-primary disabled:opacity-25
                                            transition duration-300 ease-in-out">
                                            Edit
                                        </Link>

                                        <DeleteButton
                                            id={data.id}
                                            token={tokenCode}
                                            setData={setData}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="text-white flex flex-row gap-3 pt-4">
                        <Prev lastPage={data.last_page} setPage={setPage} />
                        <Next lastPage={data.last_page} setPage={setPage} />
                    </div>
                </div>
            )}
        </>
    )
}

export default Films
