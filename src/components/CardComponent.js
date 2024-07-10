import Image from 'next/image'

const CardComponent = ({ imagePath, title, description, isUnggulan }) => {
    return (
        <div
            className="capitalize h-auto bg-white overflow-hidden 
        rounded-md">
            <figure className="overflow-hidden relative">
                <Image
                    className="bg-cover hover:scale-110 transition 
                    duration-300 ease-in-out h-40"
                    src={imagePath}
                    alt={title}
                    width={500}
                    height={500}
                />
                <p
                    className="absolute bottom-2 left-2 bg-accent 
                text-secondary text-xs px-1">
                    {isUnggulan >= 0 ? 'Top Rate' : ''}
                </p>
            </figure>
            <div className="px-3 py-4 text-sm flex flex-col gap-2">
                <h1 className="text-lg font-semibold">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CardComponent
