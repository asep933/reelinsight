const getFilms = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/films`,
            {
                cache: 'no-store',
            },
        )

        if (!res.ok) throw new Error('error fetch data film')

        const json = await res.json()
        return json
    } catch (error) {
        console.log(error)
    }
}

export { getFilms }
