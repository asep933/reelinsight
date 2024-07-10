'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const CarouselComponent = ({ children }) => {
    return (
        <div className="p-8">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={10}
                breakpoints={{
                    350: {
                        slidesPerView: 2,
                        navigation: false,
                    },
                    720: {
                        slidesPerView: 4,
                    },
                    1500: {
                        slidesPerView: 5,
                    },
                }}
                navigation={true}
                loop={true}
                scrollbar={{ draggable: true }}>
                {children.map((child, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CarouselComponent
