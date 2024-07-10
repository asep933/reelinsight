export async function getFilmsById(id) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/films/${id}`,
            {
                cache: 'no-store',
            },
        )
        const json = await res.json()
        return json.data
    } catch (error) {
        console.log(error)
    }
}
