import React, { useState, useRef, useEffect } from "react";
import Groups from "./groupList/groupList";
import info from "./groupList/infoList";
import teachers from "./groupList/teacherList";

export default function Parents() {
  const [openedGroup, setOpenedGroup] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [heights, setHeights] = useState({});
  const contentRefs = useRef({});

  const toggleGroup = (groupId) => {
    setOpenedGroup(openedGroup === groupId ? null : groupId);
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    if (expandedId && contentRefs.current[expandedId]) {
      setHeights((prev) => ({
        ...prev,
        [expandedId]: contentRefs.current[expandedId].scrollHeight,
      }));
    }
  }, [expandedId]);

  const borderColors = [
    "border-blue-500",
    "border-green-500",
    "border-purple-500",
    "border-pink-500",
    "border-yellow-500",
    "border-red-500",
    "border-indigo-500",
    "border-teal-500",
    "border-orange-500",
    "border-cyan-500",
  ];

  return (
    <section className="flex flex-col items-center w-full gap-[30px]">
      <div className="flex w-full gap-[30px] main-parents">
        <section className="w-[50%] flex flex-col items-center gap-[30px]">
          <div className="max-h-max bg-gray-50 p-4 w-full flex flex-col items-center">
            <h1 className="text-2xl font-bold text-center mb-6 zagolovok">
              Примерное 20-дневное меню
            </h1>
            <div className="flex flex-col gap-[30px] items-center">
              {Groups.map((group) => (
                <div
                  key={group.id}
                  className="bg-white rounded-[20px] overflow-hidden shadow relative w-[500px] raspisanie menu"
                >
                  <div
                    className="min-h-[50px] flex items-center justify-center cursor-pointer text-stone-50 text-[20px]"
                    onClick={() => toggleGroup(group.id)}
                    style={{ backgroundColor: group.color }}
                  >
                    {group.name}
                  </div>
                  {openedGroup === group.id && (
                    <div className="flex flex-col items-start gap-[10px] p-[10px]">
                      <div className="w-full">
                        <h3 className="font-semibold mb-2 text-center">
                          Распорядок дня:
                        </h3>
                        <ul className="flex flex-col gap-[5px]">
                          {group.schedule.items.map((item, index) => (
                            <li key={index} className="flex">
                              <span className="font-medium w-24">
                                {item.time}
                              </span>
                              <span>{item.activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-[5px] w-full">
                        <h3 className="font-semibold text-center">Меню:</h3>
                        <ul className="flex flex-col gap-[10px] w-full">
                          <li>
                            <span className="font-medium">Завтрак:</span>
                            {group.menu.breakfast}
                          </li>
                          <li>
                            <span className="font-medium">Обед:</span>
                            {group.menu.lunch}
                          </li>
                          <li>
                            <span className="font-medium">Полдник:</span>
                            {group.menu.snack}
                          </li>
                          <li>
                            <span className="font-medium">Ужин:</span>
                            {group.menu.dinner}
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-[20px] font-bold card-groupParent flex flex-col p-[10px] gap-[5px] justify-center w-full">
            <h1 className="text-center">В нашем садике ребенок научится:</h1>
            <p>
              👫 Социализация: игра в коллективе, sharing, разрешение
              конфликтов.
            </p>
            <p>🔢 Основы счёта и букв: цифры 1-10, алфавит, формы и цвета.</p>
            <p>🎨 Творчество: рисование, лепка, аппликации, пение.</p>
            <p>🏃‍♂️ Моторика: зарядка, подвижные игры, координация.</p>
            <p>🧺 Самообслуживание: одевание, уборка игрушек, гигиена.</p>
          </div>
        </section>

        <section className="w-[50%] flex flex-col items-center">
          <div className="w-[90%] flex flex-col p-[10px] min-h-[600px] justify-center rounded-[20px] border-form">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Наши специалисты
            </h2>
            <div className="flex flex-col gap-[10px] w-full">
              {teachers.map((teacher, index) => (
                <div
                  key={teacher.id}
                  className={`flex w-full border-l-8 rounded-r-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ${
                    borderColors[index % borderColors.length]
                  }`}
                >
                  {/* Фото специалиста */}
                  <div className="flex-shrink-0">
                    <img
                      src={
                        teacher.img.FacePng ||
                        teacher.img.Face ||
                        teacher.img.Face2 ||
                        teacher.img.Face3
                      }
                      alt={teacher.name}
                      className="w-[150px] h-full object-cover"
                    />
                  </div>

                  {/* Информация о специалисте */}
                  <div className="p-4 w-full">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {teacher.name}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mb-3">
                      {teacher.post}
                    </p>

                    {/* Дополнительная информация */}
                    <div
                      ref={(el) => (contentRefs.current[teacher.id] = el)}
                      style={{
                        maxHeight:
                          expandedId === teacher.id ? heights[teacher.id] : 0,
                      }}
                      className="overflow-hidden transition-all duration-500 ease-in-out"
                    >
                      <div className="space-y-2 text-sm text-gray-600 pt-2">
                        <p>
                          <span className="font-semibold">Стаж:</span>{" "}
                          {teacher.experience}
                        </p>
                        <p className="text-xs text-gray-500">
                          <span className="font-semibold">Аттестация:</span>{" "}
                          {teacher.certification}
                        </p>
                      </div>
                    </div>

                    {/* Кнопка "Узнать больше" */}
                    <button
                      onClick={() => toggleExpand(teacher.id)}
                      className="mt-3 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      {expandedId === teacher.id ? (
                        <>
                          <span>Свернуть</span>
                          <svg
                            className="w-4 h-4 transform rotate-180 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>Узнать больше</span>
                          <svg
                            className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="w-full flex flex-col items-center">
        <h1 className="text-[25px] font-bold mb-[20px]">Важная информация</h1>
        <div className="grid grid-cols-3 w-[90%] gap-[20px] justify-items-center important-info">
          {info.map((item) => (
            <div key={item.id} className="flex justify-center ">
              <img
                src={item.image}
                alt={`Информация ${item.id}`}
                className="max-w-max h-auto object-cover rounded-[40px] shadow-md cursor-pointer card-groupInfo"
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
