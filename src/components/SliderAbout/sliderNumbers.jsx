import { Pagination, Navigation } from "swiper/modules"; // 👈 Добавлен Navigation
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import teacherList from "./Numbers/numbersList";
export default function SliderNumbers() {
  return (
    <div className="min-h-[350px] mt-[30px] w-full mx-auto relative">
      <h1 className="text-center font-bold text-[30px] mb-8">Мы в цифрах</h1>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={4}
        loop={false}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          // Маленькие планшеты (640px - 768px)
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Планшеты (768px - 1024px)
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          // Ноутбуки (1024px - 1200px)
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // Десктопы (1200px+)
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {teacherList.map((teacher) => (
          <SwiperSlide key={teacher.id}>
            <div className="flex flex-col items-center justify-center p-6  rounded-xl  min-h-[200px] text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                {teacher.description}
              </div>
              <div className="text-lg font-semibold text-gray-800">
                {teacher.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
