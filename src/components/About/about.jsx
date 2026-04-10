import Map from "../map/map";
import SliderAbout from "../SliderAbout/sliderNumbers";
import intelligenceList from "./listAbout/intelligenceList";
import {
  contactsData,
  quoteData,
  kindergartenName,
} from "./listAbout/listText";
import SliderTeachers from "../sliderTeachers/sliderTeachers";

export default function About() {
  return (
    <section className="w-full flex flex-col items-center gap-[60px] pb-[60px] about-main">
      <div className="w-full bg-[linear-gradient(94.37deg,#d5ffd6,#ffbef9_74.09%)] py-[60px]">
        <div className="w-[90%] mx-auto">
          <div className="text-center mb-[50px]">
            <h1 className="text-[50px] font-bold text-green-700 mb-[20px] about-title">
              Муниципальное бюджетное дошкольное
            </h1>
            <p className="text-[30px] font-bold text-gray-700 about-subtitle">
              {kindergartenName.full}
            </p>
            <p className="text-[18px] text-gray-500 mt-[10px]">
              {kindergartenName.short}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div className="bg-white rounded-[30px] p-[30px] shadow-lg hover:shadow-2xl transition-all contacts-card">
              <h2 className="text-[28px] font-bold text-green-600 mb-[20px]">
                Контакты
              </h2>
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[15px]">
                  <span className="text-[24px]">🏠</span>
                  <div>
                    <p className="font-bold">Адрес:</p>
                    <p className="text-gray-600">{contactsData.address}</p>
                  </div>
                </div>
                <div className="flex gap-[15px]">
                  <span className="text-[24px]">📞</span>
                  <div>
                    <p className="font-bold">Телефон:</p>
                    <p className="text-gray-600">{contactsData.phone}</p>
                  </div>
                </div>
                <div className="flex gap-[15px]">
                  <span className="text-[24px]">✉️</span>
                  <div>
                    <p className="font-bold">Email:</p>
                    <p className="text-gray-600">{contactsData.email}</p>
                  </div>
                </div>
                <div className="flex gap-[15px]">
                  <span className="text-[24px]">⏰</span>
                  <div>
                    <p className="font-bold">Режим работы:</p>
                    <p className="text-gray-600">{contactsData.workHours}</p>
                    <p className="text-gray-500 text-[14px]">
                      {contactsData.weekend}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[30px] p-[30px] shadow-lg hover:shadow-2xl transition-all quote-card">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
          {intelligenceList.map((item) => (
            <div
              key={item.id}
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
      <div className="bg-white p-6 rounded-lg shadow w-[90%] h-[450px] hover:shadow-2xl transition-all map-container flex flex-col gap-[10px] text-orange">
        <h2 className="text-[30px] font-bold text-center">Где нас найти</h2>
        <div className="rounded-lg overflow-hidden h-[350px] map-wrapper">
          <Map />
        </div>
      </div>
    </section>
  );
}
