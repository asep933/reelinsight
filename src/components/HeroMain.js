import Image from 'next/image'
import Button from './Button'
import Play from '/public/play.svg'

const HeroMain = ({ title, description, imagePath, imageTitle }) => {
    return (
        <div className="flex flex-row h-auto w-full items-center justify-between bg-primary">
            <div className="w-1/3 lg:text-base text-xs lg:py-0 py-6 px-8 text-white flex flex-col lg:gap-5 gap-2">
                <h1 className="capitalize lg:text-4xl text-sm font-bold">
                    {title}
                </h1>
                <p className="text-xs lg:text-base">{description}</p>
                <div>
                    <Button className="bg-accent lg:text-lg text-sm w-max">
                        <div className="flex flex-row items-center">
                            <Image src={Play} alt="play icon" width={20} />
                            <p>Play</p>
                        </div>
                    </Button>
                </div>
            </div>

            <figure className="lg:h-screen h-1/2 w-2/3">
                <div className="absolute w-1/3 h-screen from-primary bg-gradient-to-r"></div>
                <Image
                    priority
                    quality={100}
                    className="bg-cover bg-no-repeat h-full w-full"
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imagePath}`}
                    alt={`${imageTitle}`}
                    width={500}
                    height={500}
                />
            </figure>
        </div>
    )
}

export default HeroMain
