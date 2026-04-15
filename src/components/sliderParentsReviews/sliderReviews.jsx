import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import reviewsList from "./listSlider/parentsReviewsList";
import { useRef } from "react";

export default function SliderReviews() {
  const swiperRef = useRef(null);

  // Проверка, что отзывы есть
  if (!reviewsList || reviewsList.length === 0) {
    return <div className="text-center py-10">Нет отзывов</div>;
  }

  return (
    <div className="w-[90%] flex flex-col gap-[40px] text-center min-h-[300px] items-center">
      <h2 className="font-bold text-green-800 text-[30px]">Отзывы родителей</h2>

      <div className="w-full relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
            1280: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="mySwiper w-full"
          style={{ paddingBottom: "40px" }}
        >
          {reviewsList.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex flex-col items-center justify-center p-[20px] gap-[25px] mx-12 rounded-[24px] min-h-[250px] shadow-md hover:shadow-blue-400/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white">
                <div className="flex flex-col items-center gap-[10px] w-full">
                  <h3 className="text-[20px] font-bold text-gray-800">
                    {review.name}
                  </h3>
                  <div
                    className="flex flex-col gap-[15px] text-[22px]"
                    style={{ color: "#FFD700" }}
                  >
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-[15px] text-gray-600 text-center italic">
                  {review.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
