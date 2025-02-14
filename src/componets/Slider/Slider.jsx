import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://grangettos.com/cdn/shop/articles/shutterstock_590135870_1600x.jpg?v=1617921748",
  "https://images.squarespace-cdn.com/content/v1/57a100f7e4fcb592ee30586c/1480645280849-02VFJMK08VI3KMNCIWGO/image-asset.jpeg",
  "https://www.simplotfoods.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F0dkgxhks0leg%2F4LaYoCoepR6ZwEkAmQFh2F%2Fe82fa8e3c87f0e4cdb3e914b3e766fa0%2Fblog-large-2020veg.jpg%3Ffm%3Dwebp&w=1920&q=75",
];

const Carousel = () => {
  return (
    <div className="w-screen h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
