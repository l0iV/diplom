import { useState, useEffect } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { getRooms } from "../../api/api"; // ИЗМЕНЕНО: getNews -> getRooms
import { STATIC_URL } from "../../api/api";

export default function Slider() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    getRooms() // ИЗМЕНЕНО: getNews -> getRooms
      .then((res) => {
        setSlides(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const openFullscreen = (img) => {
    setFullscreenImage(img);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    document.body.style.overflow = "auto";
  };

  if (loading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
        <p className="text-gray-500 animate-pulse">
          Загрузка информации о саде...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[400px] w-[90%] text-[14px] items-center overflow-hidden relative">
      <h1 className="text-center font-bold text-[30px] text-green-800">
        Наш детский сад!
      </h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        centeredSlides={true}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex items-center min-h-[350px]"
          >
            <div
              className="flex max-w-max items-center justify-center flex-col gap-[5px] cursor-pointer"
              onClick={() => openFullscreen(slide.image_url)}
            >
              <img
                src={`${STATIC_URL}${slide.image_url}`}
                alt=""
                className="object-contain rounded-[20px] max-w-full h-auto"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x300?text=Нет+изображения";
                }}
              />
              <p className="text-justify italic">{slide.text}</p>
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
            src={`${STATIC_URL}${fullscreenImage}`}
            alt="Увеличенное изображение"
            className="object-contain max-h-[90vh] max-w-[90vw] rounded-[20px]"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors"
            onClick={closeFullscreen}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
