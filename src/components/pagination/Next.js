'use client'

const Next = ({ setPage, lastPage }) => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

        return setPage(numb => {
            if (numb > lastPage - 1) {
                return (numb = 1)
            } else {
                return numb + 1
            }
        })
    }

    return (
        <button
            className="hover:text-accent bg-secondary rounded-md px-2"
            onClick={handleClick}>
            Next
        </button>
    )
}

export default Next
