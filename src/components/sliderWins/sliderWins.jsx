import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import { getWins } from "../../api/api";
import { STATIC_URL } from "../../api/api";

export default function SliderAwards() {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getWins()
      .then((res) => {
        setAwards(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[450px] gap-4">
        <div className="w-12 h-12 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>
        <p className="text-gray-500 animate-pulse">Загрузка наград...</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-[90%] shadow-lg rounded-[40px]">
        <h2 className="text-[35px] font-bold text-center mb-[10px] text-red-600">
          Наши достижения и победы
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1320: { slidesPerView: 4 },
          }}
        >
          {awards.map((award) => (
            <SwiperSlide key={award.id}>
              <div className="flex flex-col items-center justify-center gap-[15px] p-[10px] min-h-[450px]">
                <div
                  onClick={() => handleImageClick(award.image_url)}
                  className="cursor-pointer group"
                >
                  {award.image_url ? (
                    <div className="relative w-[300px] h-[350px] rounded-[20px] overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <img
                        src={`${STATIC_URL}${award.image_url}`}
                        alt={award.description}
                        className="w-full h-full object-cover rounded-[20px]"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-bold bg-black/60 px-3 py-1 rounded-full">
                          🔍 Увеличить
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-[200px] h-[250px] bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg flex items-center justify-center text-[60px] group-hover:scale-105 transition-all duration-300 shadow-lg">
                      🏆
                    </div>
                  )}
                </div>

                {/* Вся информация о грамоте прямо здесь */}
                <div className="flex flex-col items-center justify-center gap-[5px] text-center w-full">
                  <p className="text-gray-600 text-[15px] italic">
                    {award.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[12px] bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                      {award.date}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {showModal && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-[20px]"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-[50px] right-0 text-white text-[40px] hover:text-gray-300 transition-colors z-10"
            >
              ×
            </button>
            <img
              src={`${STATIC_URL}${selectedImage}`}
              alt="Грамота увеличенное изображение"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
