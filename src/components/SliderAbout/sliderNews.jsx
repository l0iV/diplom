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
    <div
      className="overflow-hidden relative min-h-[350px] mt-[30px] w-[80%] text-[14px]"
      id="autoSL"
    >
      <h1 className="text-center font-bold text-[30px]">Наши преподаватели</h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2000 }}
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
