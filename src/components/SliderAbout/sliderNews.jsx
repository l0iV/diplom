import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import teacherList from "./listTeacher/listTeacher";
export default function SliderAbout() {
  return (
    <div className="min-h-[350px] mt-[30px] w-[90%] text-[14px] items-center overflow-hidden relative">
      <h1 className="text-center font-bold text-[30px]">Наши преподаватели</h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {teacherList.map((item) => (
          <SwiperSlide key={item.id} className="flex items-center">
            <div className="flex max-w-max items-center justify-center flex-col gap-[5px] cursor-pointer shadow">
              <img
                src={item.image}
                alt={`Slide ${item.id}`}
                className="object-contain rounded-[20px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
