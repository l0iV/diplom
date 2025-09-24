import { useState } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import slides from "../sliderNews/listNews/listNews";
export default function Slider() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (img) => {
    setFullscreenImage(img);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    document.body.style.overflow = "auto";
  };
  return (
    <div
      className="overflow-hidden relative min-h-[350px] mt-[30px] w-[80%] text-[14px]"
      id="autoSL"
    >
      <h1 className="text-center font-bold text-[25px] mb-[20px]">
        Наши комнаты
      </h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={150}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex items-center">
            <div
              className="flex max-w-max items-center justify-center flex-col gap-[5px] cursor-pointer"
              onClick={() => openFullscreen(slide.img)}
            >
              <img
                src={slide.img}
                alt=""
                className="object-contain rounded-[20px]"
              />
              <p className="text-center">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <img
            src={fullscreenImage}
            alt="Увеличенное изображение"
            className="w-[1250px] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-2 right-3 text-white text-3xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
            onClick={closeFullscreen}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
