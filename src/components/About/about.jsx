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
import baby from "../../assets/baby.png";
import SliderAwards from "../sliderWins/sliderWins";
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
      <div className="w-full bg-[linear-gradient(94.37deg,#d5ffd6,#ffbef9_74.09%)] flex justify-center">
        <div className="w-[95%] flex flex-col gap-[40px]">
          <div className="flex flex-col items-center justify-center p-[30px] gap-[10px]">
            <div>
              <img
                src={baby}
                alt="Child"
                className="w-[300px] object-contain"
              />
            </div>
            <div className="flex gap-[20px] w-full items-center justify-center">
              <div className="bg-white/60 backdrop-blur-md rounded-[30px] p-[15px] shadow-sm border border-white min-h-[200px] w-[40%] flex flex-col items-center gap-[15px]">
                <h3 className="text-[22px] font-bold text-gray-800 flex items-center gap-[8px]">
                  <span className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-[16px]">
                    🏠
                  </span>
                  Второй дом для вашего малыша
                </h3>
                <p className="text-gray-600 text-[16px] text-justify">
                  В нашем саду мы объединили современные образовательные
                  программы с домашним уютом. Пока вы заняты делами, мы
                  развиваем интеллект, творческое мышление и социальные навыки
                  ребенка в игровой и безопасной форме.
                </p>
                <div className="flex gap-4 mt-5">
                  <div className="flex items-center gap-2 text-[14px] font-medium text-green-800 bg-green-100/50 px-3 py-1 rounded-full">
                    🍎 Здоровое питание
                  </div>
                  <div className="flex items-center gap-2 text-[14px] font-medium text-pink-800 bg-pink-100/50 px-3 py-1 rounded-full">
                    🛡️ Безопасность 24/7
                  </div>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-md rounded-[30px] p-[15px] shadow-sm border border-white min-h-[200px] w-[40%]">
                <div className="text-center">
                  <p className="text-[17px] text-gray-700 italic leading-relaxed mb-4">
                    "{quoteData.text}"
                  </p>
                  <div className="border-t border-gray-300">
                    <p className="font-bold text-green-700 mt-[10px]">
                      {quoteData.position}
                    </p>
                    <p className="text-[14px] text-gray-500">
                      {quoteData.name}
                    </p>
                  </div>
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
      <SliderAwards />

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
