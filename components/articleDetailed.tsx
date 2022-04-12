import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { RichText } from "./RichText";

interface ItemFullProps {
  itemGallery: any;
  itemName: any;
  itemPrice: string;
  itemDescription: any;
  itemContent: any;
}

export const ItemFull = ({
  itemGallery,
  itemName,
  itemPrice,
  itemDescription,
  itemContent,
}: ItemFullProps) => (
  <article>
    <div className="swiperContainer">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop
        navigation
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="swiperArticle"
      >
        {itemGallery.map((slide: any, key: number) => (
          <SwiperSlide key={key}>
            <img src={slide.image.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <RichText className="articleName" richTextContent={itemName} />
    <div>
      <p className="articlePrice">{itemPrice + " €"}</p>
    </div>
    <RichText className="" richTextContent={itemDescription} />
    <RichText className="" richTextContent={itemContent} />
  </article>
);
