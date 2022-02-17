import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

interface ItemFullProps {
    itemKey: number;
    itemGallery: any;
    itemName: string;
    itemPrice: string;
    itemDescription: string;
    itemContent: any;
}

export const ItemFull = ({itemKey, itemGallery, itemName, itemPrice, itemDescription, itemContent}: ItemFullProps) => (
    <article key ={itemKey}>
      <div>
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop
            navigation
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            >
            {itemGallery.map((slide: any, key: number) => (
                <SwiperSlide key={key}>
                <img
                    src={slide.image.url}
                />
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <h2>{itemName}</h2>
      <p>{itemDescription}</p>
      <div>
        <p>{itemPrice + ' €'}</p>
      </div>
      <p>{itemDescription}</p>
    </article>
);