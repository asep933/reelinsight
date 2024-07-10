'use client'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const CarouselHero = ({ children, pagination, autoplay }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <div className="p-0">
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={pagination}
                responsive={responsive}
                ssr={false}
                infinite={true}
                autoPlay={autoplay}
                autoPlaySpeed={3000}
                removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
                keyBoardControl={true}>
                {children.map((child, index) => (
                    <div key={index}>{child}</div>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselHero
