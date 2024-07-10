'use client'

import { Crud } from '@/api/crud'
import { useEffect, useState } from 'react'

const DeleteButton = ({ id, token, setData }) => {
    const [isFetch, setIsFetch] = useState(false)
    const { deleteFilm } = Crud()

    useEffect(() => {
        const fetchDelete = async () => {
            try {
                if (isFetch === true) {
                    await deleteFilm(id, token)
                    setData(data => data?.filter(film => film.id !== id))
                    alert('success deleted')
                } else {
                    return
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchDelete()
    }, [isFetch])

    return (
        <button
            className="bg-accent hover:bg-yellow-600 inline-flex items-center px-4 py-2 
                        rounded-full font-bold text-xs text-secondary capitalize 
                        tracking-widest focus:outline-primary active:outline-none
                        focus:border-primary focus:ring ring-primary disabled:opacity-25
                        transition duration-300 ease-in-out"
            onClick={() => setIsFetch(true)}>
            Delete
        </button>
    )
}

export default DeleteButton
