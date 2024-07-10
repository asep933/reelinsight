'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Search = ({ setIsBrowse }) => {
    const [query, setQuery] = useState('')
    const router = useRouter()

    const handleClick = () => {
        setIsBrowse(false)
        router.push(`/search?search=${query}`)
    }

    return (
        <>
            <input
                className="h-5 rounded-md bg-primary bg-opacity-55
                border-none text-white w-28 text-sm align-middle"
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="search..."
            />
            <button
                onClick={handleClick}
                disabled={query === '' ? true : false}
                className={`${query === '' ? 'opacity-40' : 'opacity-100'} bg-accent px-2 text-secondary rounded-md`}>
                Search
            </button>
        </>
    )
}

export default Search
