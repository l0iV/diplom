import Map from "../map/map";
import SliderAbout from "../SliderAbout/sliderNumbers";
import intelligenceList from "./listAbout/intelligenceList";
import {
  contactsData,
  quoteData,
  kindergartenName,
} from "./listAbout/listText";
import { useState } from "react";
import SliderTeachers from "../sliderTeachers/sliderTeachers";

export default function About() {
  const [selectedIntelligence, setSelectedIntelligence] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleIntelligenceClick = (item) => {
    setSelectedIntelligence(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIntelligence(null);
  };

  return (
    <section className="w-full flex flex-col items-center gap-[60px] h-full">
      <div className="w-full bg-[linear-gradient(94.37deg,#d5ffd6,#ffbef9_74.09%)] flex justify-center p-[30px]">
        <div className="w-[90%] flex flex-col gap-[50px]">
          <div className="text-center">
            <p className="text-[30px] font-bold text-gray-700">
              {kindergartenName.full}
            </p>
            <p className="text-[18px] text-gray-500">
              {kindergartenName.short}
            </p>
          </div>
          <div className="flex items-center w-full justify-center gap-[50px]">
            <div className="bg-white rounded-[30px] p-[30px] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full flex flex-col gap-[10px] items-center">
              <h2 className="text-[28px] font-bold text-green-600">
                Куда обратиться
              </h2>
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[15px] hover:bg-gray-200 rounded-[20px] transition-all p-[7px]">
                  <div>
                    <p className="font-bold">Поступление и льготы:</p>
                    <p className="text-gray-600">{contactsData.address}</p>
                  </div>
                </div>
                <div className="flex gap-[15px] hover:bg-gray-200  rounded-[20px] transition-all p-[7px]">
                  <div>
                    <p className="font-bold">Здоровье и прививки:</p>
                    <p className="text-gray-600">{contactsData.phone}</p>
                  </div>
                </div>
                <div className="flex gap-[15px] hover:bg-gray-200 rounded-[20px] transition-all p-[7px]">
                  <div>
                    <p className="font-bold">Питание:</p>
                    <p className="text-gray-600">{contactsData.email}</p>
                  </div>
                </div>
                <div className="flex gap-[15px] hover:bg-gray-200 rounded-[20px] transition-all p-[7px]">
                  <div>
                    <p className="font-bold">Связь с воспитателем:</p>
                    <p className="text-gray-600">{contactsData.workHours}</p>
                  </div>
                </div>
                <div className="flex gap-[15px] hover:bg-gray-200 rounded-[20px] transition-all p-[7px]">
                  <div>
                    <p className="font-bold">Официальные обращения:</p>
                    <p className="text-gray-600">{contactsData.weekend}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[30px] p-[30px] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full">
              <div className="text-center">
                <div className="text-[50px] mb-[20px]">💬</div>
                <p className="text-[18px] text-gray-700 italic leading-relaxed mb-[30px]">
                  "{quoteData.text}"
                </p>
                <div className="border-t border-gray-200 pt-[20px]">
                  <p className="font-bold text-[18px] text-green-700">
                    {quoteData.position}
                  </p>
                  <p className="text-[16px] text-gray-600">{quoteData.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] bg-white rounded-[30px] p-[40px] shadow-lg intelligence-grid">
        <div className="text-center mb-[40px]">
          <h2 className="text-[35px] font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent section-title">
            Развиваем 10 видов интеллекта
          </h2>
          <p className="text-[20px] text-gray-600 mt-[10px]">
            Чтобы ваш ребёнок рос счастливым, здоровым и успешным
          </p>
        </div>
        <div className="grid grid-cols-5 gap-[20px]">
          {intelligenceList.map((item) => (
            <div
              key={item.id}
              onClick={() => handleIntelligenceClick(item)}
              className="text-center p-[15px] bg-gray-50 rounded-[15px] hover:scale-105 hover:shadow-md transition-all cursor-pointer intelligence-card"
            >
              <div className="text-[40px] mb-[10px]">{item.icon}</div>
              <p className={`font-bold ${item.color}`}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <SliderTeachers />
      <SliderAbout />
      <div className="bg-white rounded-[30px] shadow-lg hover:shadow-2xl transition-all duration-300 w-[90%] max-w-[1200px] flex flex-col items-center justify-center gap-[20px] p-[30px]">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <h2 className="text-[30px] font-bold text-red-600 ">Где нас найти</h2>
          <p className="text-[16px] text-gray-500 text-center">
            г. Алексин, ул. Заводская, д. 5-а
          </p>
        </div>

        <div className="w-full h-[350px] rounded-[20px] overflow-hidden shadow-lg">
          <Map />
        </div>

        <div className="flex flex-col items-center justify-center gap-[5px]">
          <button
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Заводская+ул.,+5а,+Алексин,+Тульская+обл.,+301364/@54.516633,37.0430618,659m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4134f0f824201261:0xff96c4c66298b356!8m2!3d54.516633!4d37.045227!16s%2Fg%2F11c19p0s1t?entry=ttu&g_ep=EgoyMDI2MDQxOS4wIKXMDSoASAFQAw%3D%3D",
                "_blank",
              )
            }
            className="text-[18px] text-blue-500 hover:text-blue-700 transition-all flex items-center gap-[5px]"
          >
            Открыть в навигаторе
          </button>
        </div>
      </div>
      {isModalOpen && selectedIntelligence && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-overlay"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-[30px] p-[40px] max-w-[500px] w-[90%] flex flex-col items-center justify-center gap-[25px] animate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-[15px] right-[15px] w-[30px] h-[30px] rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-[18px] transition-all"
            >
              ✕
            </button>
            <div className="text-[60px]">{selectedIntelligence.icon}</div>
            <h3
              className={`text-[26px] font-bold text-center ${selectedIntelligence.color}`}
            >
              {selectedIntelligence.name} интеллект
            </h3>
            <p className="text-[15px] text-gray-700 leading-relaxed text-center">
              {selectedIntelligence.description}
            </p>
            <div className="w-full bg-gray-50 rounded-[15px] p-[15px] flex flex-col items-center justify-center gap-[5px]">
              <p className="text-[13px] font-bold text-gray-500">
                Примеры развития:
              </p>
              <p className="text-[14px] text-gray-700 text-center">
                {selectedIntelligence.examples}
              </p>
            </div>
            <button
              onClick={closeModal}
              className="w-full py-[12px] bg-gradient-to-r from-green-600 to-purple-600 text-white rounded-[20px] font-bold hover:opacity-90 transition-all"
            >
              Понятно!
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
