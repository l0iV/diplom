import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import teachersList from "./list/listTeachers";
export default function SliderTeachers() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
    setShowModal(true);
  };

  return (
    <>
      <div className="w-[90%] bg-white p-6 rounded-lg shadow">
        <h2 className="text-[35px] font-bold text-center mb-[40px] bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Наша команда
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {teachersList &&
            teachersList.map((teacher) => (
              <SwiperSlide key={teacher.id}>
                <div
                  onClick={() => handleTeacherClick(teacher)}
                  className="text-center group cursor-pointer p-[10px]"
                >
                  {teacher.image ? (
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-[150px] h-[150px] rounded-full mx-auto mb-[15px] object-cover group-hover:scale-110 transition-all duration-300 shadow-md"
                    />
                  ) : (
                    <div className="w-[150px] h-[150px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-[15px] flex items-center justify-center text-[60px] group-hover:scale-110 transition-all">
                      👩‍🏫
                    </div>
                  )}
                  <h3 className="font-bold text-[18px] group-hover:text-blue-600 transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-gray-500 text-[14px]">
                    {teacher.position}
                  </p>
                  <p className="text-[12px] text-gray-400 mt-[5px]">
                    Стаж: {teacher.experience}
                  </p>
                  <button className="mt-[10px] px-[15px] py-[5px] bg-blue-500 text-white rounded-full text-[12px] opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600">
                    Подробнее
                  </button>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {showModal && selectedTeacher && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-[20px]"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-[20px] max-w-[500px] w-full p-[30px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-[15px] right-[20px] text-[30px] text-gray-500 hover:text-gray-800"
            >
              ×
            </button>
            <div className="text-center">
              {selectedTeacher.image ? (
                <img
                  src={selectedTeacher.image}
                  alt={selectedTeacher.name}
                  className="w-[120px] h-[120px] rounded-full mx-auto mb-[20px] object-cover border-4 border-blue-400"
                />
              ) : (
                <div className="w-[120px] h-[120px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-[20px] flex items-center justify-center text-[50px]">
                  👩‍🏫
                </div>
              )}
              <h3 className="text-[25px] font-bold mb-[5px]">
                {selectedTeacher.name}
              </h3>
              <p className="text-blue-600 text-[16px] mb-[20px]">
                {selectedTeacher.position}
              </p>
              <div className="text-left space-y-[10px]">
                <p>
                  <span className="font-bold">Стаж:</span>{" "}
                  {selectedTeacher.experience}
                </p>
                <p>
                  <span className="font-bold">Образование:</span>{" "}
                  {selectedTeacher.education}
                </p>
                <p>
                  <span className="font-bold">Группа:</span>{" "}
                  {selectedTeacher.group}
                </p>
                <p>
                  <span className="font-bold">Возраст:</span>{" "}
                  {selectedTeacher.age}
                </p>
                <p>
                  <span className="font-bold">Телефон:</span>{" "}
                  {selectedTeacher.phone}
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="mt-[25px] w-full py-[12px] bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-[10px] font-semibold hover:shadow-lg"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
