import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import { getReviews } from "../../api/api";

export default function SliderReviews() {
  const swiperRef = useRef(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загружаем отзывы с сервера
  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      setLoading(true);
      const response = await getReviews({ approved: true });
      setReviews(response.data);
      setError(null);
    } catch (err) {
      console.error("Ошибка загрузки отзывов:", err);
      setError("Не удалось загрузить отзывы");
    } finally {
      setLoading(false);
    }
  };

  // Показываем загрузку
  if (loading) {
    return (
      <div className="w-[70%] flex flex-col gap-[40px] text-center min-h-[300px] items-center justify-center">
        <div className="text-gray-500">Загрузка отзывов...</div>
      </div>
    );
  }

  // Если ошибка
  if (error) {
    return (
      <div className="w-[70%] flex flex-col gap-[40px] text-center min-h-[300px] items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  // Проверка, что отзывы есть
  if (!reviews || reviews.length === 0) {
    return (
      <div className="w-[70%] flex flex-col gap-[40px] text-center min-h-[300px] items-center justify-center">
        <h2 className="font-bold text-green-800 text-[30px]">
          Отзывы родителей
        </h2>
        <div className="text-gray-500">Пока нет отзывов. Будьте первыми!</div>
      </div>
    );
  }

  return (
    <div className="w-[70%] flex flex-col gap-[40px] text-center min-h-[300px] items-center">
      <h2 className="font-bold text-green-800 text-[30px]">Отзывы родителей</h2>

      <div className="w-full relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Navigation, Autoplay]}
          loop={reviews.length > 2}
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
          {reviews.map((review) => (
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
                    {"★".repeat(review.rating || 5)}
                  </div>
                </div>
                <p className="text-[15px] text-gray-600 text-center italic">
                  {review.text}
                </p>
                {review.created_at && (
                  <div className="text-[12px] text-gray-400 mt-2">
                    {new Date(review.created_at).toLocaleDateString("ru-RU")}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
