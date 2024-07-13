'use client'

import { Crud } from '@/api/crud'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Form = ({ token }) => {
    const [input, setInput] = useState({
        title: '',
        description: '',
        image_thumbnail: '',
        unggulan: null,
    })

    const router = useRouter()

    const { storeFilm } = Crud()

    const handleSubmit = async e => {
        e.preventDefault()
        await storeFilm(input, token)

        router.push('/admin')
    }

    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl text-secondary">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-2xl font-extrabold py-5">
                            Add Film
                        </h1>

                        {/* Title */}
                        <div>
                            <Label htmlFor="title">Title</Label>

                            <Input
                                name="title"
                                id="title"
                                type="text"
                                value={input.title}
                                className="block mt-1 w-full"
                                onChange={event =>
                                    setInput({
                                        ...input,
                                        title: event.target.value,
                                    })
                                }
                                required
                                autoFocus
                            />
                        </div>

                        {/* Description */}
                        <div className="mt-4">
                            <Label htmlFor="password">Description</Label>

                            <Input
                                name="description"
                                id="description"
                                type="text"
                                value={input.description}
                                className="block mt-1 w-full"
                                onChange={event =>
                                    setInput({
                                        ...input,
                                        description: event.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        <label className="flex flex-row gap-3 items-center my-3 w-fit">
                            <input
                                onChange={e =>
                                    setInput({
                                        ...input,
                                        unggulan: e.target.checked,
                                    })
                                }
                                name="checkbox"
                                type="checkbox"
                            />
                            Top Film
                        </label>

                        <input
                            name="image_thumbnail"
                            id="image_thumbnail"
                            type="file"
                            className="file-input mt-4 file-input-bordered file-input-primary file-input-sm w-full max-w-xs"
                            onChange={event =>
                                setInput({
                                    ...input,
                                    image_thumbnail: event.target.files[0],
                                })
                            }
                        />

                        <div className="flex items-center flex-col mt-8 gap-4">
                            <Button className="ml-3 w-full text-center flex justify-center bg-fourth">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form
