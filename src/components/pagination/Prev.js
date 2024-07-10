'use client'

const Prev = ({ setPage, lastPage }) => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

        return setPage(numb => {
            if (numb === 1) {
                return (numb = lastPage)
            } else {
                return numb - 1
            }
        })
    }

    return (
        <button
            className="hover:text-accent bg-secondary rounded-md px-2"
            onClick={handleClick}>
            Prev
        </button>
    )
}

export default Prev
