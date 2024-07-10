import Image from 'next/image'

const Card = ({ imagePath, imageTitle, isUnggulan }) => {
    return (
        <div className={`relative h-44 overflow-hidden`}>
            <div className="absolute bottom-0 h-full w-full from-secondary bg-gradient-to-t"></div>
            <Image
                src={`${imagePath}`}
                alt={imageTitle}
                width={300}
                height={200}
            />
            <div className="capitalize lg:text-base text-sm absolute bottom-10 left-4 z-10 text-white">
                <p>{imageTitle}</p>
                <p
                    className="absolute lg:-bottom-6 -bottom-4 left-0 bg-accent 
                text-secondary text-xs px-1">
                    {isUnggulan >= 0 ? 'Top Rate' : ''}
                </p>
            </div>
        </div>
    )
}

export default Card
