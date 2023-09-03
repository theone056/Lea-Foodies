
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import gallery1 from '../../assets/img/gallery/gallery-1.jpg';
import gallery2 from '../../assets/img/gallery/gallery-2.jpg';
import gallery3 from '../../assets/img/gallery/gallery-3.jpg';
import gallery4 from '../../assets/img/gallery/gallery-4.jpg';
import gallery5 from '../../assets/img/gallery/gallery-5.jpg';
import gallery6 from '../../assets/img/gallery/gallery-6.jpg';

const Gallery = () => {
    return (
        <div>
        <section id="gallery" className="gallery">
        <div className="container" data-aos="fade-up">

            <div className="section-header">
            <h2>gallery</h2>
            <p>Check <span>Our Gallery</span></p>
            </div>

            <div className='gallery-slider swiper'>
                <Swiper className='swiper-wrapper align-items-center slider'
                modules={[Navigation]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={3}
                centeredSlides
                loop
                >
                <SwiperSlide className='swiper-slide'><img src={gallery1} className="img-fluid gallery-img" alt=""/></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src={gallery2} className="img-fluid gallery-img" alt=""/></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src={gallery3} className="img-fluid gallery-img" alt=""/></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src={gallery4} className="img-fluid gallery-img" alt=""/></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src={gallery5} className="img-fluid gallery-img" alt=""/></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src={gallery6} className="img-fluid gallery-img" alt=""/></SwiperSlide>
                </Swiper>
            </div>
        </div>
        </section>
        </div>
    );
}

export default Gallery;