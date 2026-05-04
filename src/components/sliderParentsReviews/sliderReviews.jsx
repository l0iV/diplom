import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import { getReviews, postReview } from "../../api/api";
import user from "../../assets/user-otzivy.png";
export default function SliderReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      setLoading(true);
      const response = await getReviews({ approved: true });
      setReviews(response.data || []);
      setError(null);
    } catch (err) {
      setError("Ошибка загрузки");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    setSubmitting(true);
    try {
      await postReview({ name, rating, text });
      setShowModal(false);
      setName("");
      setRating(5);
      setText("");
      await loadReviews();
    } catch (err) {
      setError("Ошибка отправки");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center gap-[20px] min-h-[350px]">
        <div className="w-[50px] h-[50px] border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
        <div className="text-gray-500 text-[16px]">Загрузка отзывов...</div>
      </div>
    );
  }

  if (error && reviews.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center gap-[20px] min-h-[350px]">
        <div className="text-red-500 text-[16px]">{error}</div>
        <button
          onClick={loadReviews}
          className="px-[20px] py-[10px] bg-green-600 text-white rounded-[8px]"
        >
          Попробовать снова
        </button>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[20px]">
      <h2 className="font-bold text-green-800 text-[30px]">Отзывы родителей</h2>

      {/* Слайдер */}
      {reviews.length === 0 ? (
        <div className="flex flex-col items-center gap-[20px] text-gray-500">
          <p>Пока нет отзывов</p>
        </div>
      ) : (
        <>
          <div className="w-[80%] px-[40px] items-center ">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="min-h-[310px] pb-[40px]"
            >
              {reviews.map((review, index) => {
                const colors = ["#f97316", "#3b82f6", "#ef4444", "#22c55e"];
                const borderColor = colors[index % colors.length];
                return (
                  <SwiperSlide key={review.id || index} className="h-auto">
                    <div
                      className="bg-white rounded-[30px] p-[20px] shadow-lg min-h-[280px] flex flex-col gap-[15px] hover:shadow-xl transition-shadow border-[2px] h-full"
                      style={{ borderColor: borderColor }}
                    >
                      {/* Верхняя часть */}
                      <div className="flex flex-col items-center justify-center gap-[12px] w-full">
                        {/* Аватарка */}
                        <div className="w-[50px] h-[50px] rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 shrink-0">
                          <img src={user} alt="" className="object-contain " />
                        </div>

                        <div className="">
                          <h3 className="font-bold text-[18px] leading-tight">
                            {review.name}
                          </h3>
                          <div className="text-[#fbbf24] text-[18px]">
                            {"★".repeat(review.rating || 5)}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-[16px] italic">
                        {review.text}
                      </p>

                      {/* Дата */}
                      <div className="text-gray-400 text-[12px]">
                        {review.created_at &&
                          new Date(review.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            Написать отзыв
          </button>
        </>
      )}

      {/* Модальное окно */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] w-[90%] max-w-[500px] p-[24px]">
            <h3 className="text-[24px] font-bold text-center mb-[20px]">
              Написать отзыв
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-medium">Ваше имя</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border border-gray-300 rounded-[8px] p-[10px] focus:outline-none focus:border-green-500"
                  placeholder="Введите имя"
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-medium">Оценка</label>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex gap-[12px] ">
                    {[5, 4, 3, 2, 1].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setRating(num)}
                        className={`w-[50px] h-[50px] rounded-full font-bold text-[18px] transition-all duration-200 ${
                          rating === num
                            ? "bg-green-600 text-white scale-110 shadow-lg"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-medium">Ваш отзыв</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                  rows={4}
                  className="border border-gray-300 rounded-[8px] p-[10px] focus:outline-none focus:border-green-500 resize-none"
                  placeholder="Поделитесь впечатлениями..."
                />
              </div>

              <div className="flex gap-[10px] mt-[10px]">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-[16px] py-[10px] bg-gray-300 text-gray-700 rounded-[8px] hover:bg-gray-400"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-[16px] py-[10px] bg-green-600 text-white rounded-[8px] hover:bg-green-700 disabled:opacity-50"
                >
                  {submitting ? "Отправка..." : "Отправить"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
