import axios from '@/lib/axios'

export function Crud() {
    const storeFilm = async (input, token) => {
        await axios
            .post('/api/films', input, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .catch(error => console.log(error))
    }

    const editFilm = async (id, input, token) => {
        await axios
            .post(`/api/films/update/${id}`, input, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .catch(error => console.log(error))
    }

    const deleteFilm = async (id, token) => {
        await axios
            .delete(`/api/films/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .catch(error => console.log(error))
    }

    const searchFilm = async (slug, page) => {
        try {
            const { data: response } = await axios.get(
                `/api/films/search/${slug}?page=${page}`,
            )

            return response
        } catch (error) {
            console.log(error)
        }
    }

    return {
        storeFilm,
        editFilm,
        deleteFilm,
        searchFilm,
    }
}
