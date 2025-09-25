import React, { useState } from "react";
import Groups from "./groupList/groupList";
import info from "./groupList/infoList";

export default function Parents() {
  const [openedGroup, setOpenedGroup] = useState(null);

  const toggleGroup = (groupId) => {
    setOpenedGroup(openedGroup === groupId ? null : groupId);
  };

  return (
    <section className="flex flex-col items-center w-full gap-[30px]">
      <div className="flex w-full gap-[30px] main-parents">
        <section className="w-[50%] flex flex-col items-center gap-[30px]">
          <div className="max-h-max bg-gray-50 p-4 w-full flex flex-col items-center">
            <h1 className="text-2xl font-bold text-center mb-6 zagolovok">
              Расписание и меню для каждой группы
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
            <h2 className="text-xl font-semibold mb-4">Заявка в сад</h2>
            <div className="flex flex-col gap-[50px] items-center">
              <input
                type="text"
                placeholder="ФИО ребёнка"
                className="p-2 border rounded-[15px] w-full h-[70px]"
              />
              <input
                type="text"
                placeholder="Ваш E-Mail"
                className="p-2 border rounded-[15px] w-full h-[70px]"
              />
              <input
                type="text"
                placeholder="Номер телефона"
                className="p-2 border rounded-[15px] w-full h-[70px]"
              />
              <input
                type="text"
                placeholder="Комментарий"
                className="p-2 border rounded-[15px] min-h-[150px] w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-[15px] w-[100px]"
              >
                Отправить
              </button>
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
