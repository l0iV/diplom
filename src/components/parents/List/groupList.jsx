const getDateOffset = (date) => {
  return `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}`;
};
const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};
const createWorkDaysArray = (daysCount) => {
  const workDays = [];
  let currentDate = new Date();
  while (workDays.length < daysCount) {
    if (!isWeekend(currentDate)) {
      const dayOfWeek = currentDate.getDay(); // 1 = пн, 5 = пт
      const dayNames = {
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
      };

      workDays.push({
        day: workDays.length + 1,
        date: getDateOffset(currentDate),
        dayOfWeek: dayOfWeek,
        dayName: dayNames[dayOfWeek],
        fullDate: `${currentDate.toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
        })}, ${dayNames[dayOfWeek]}`,
        breakfast: [
          "Каша рисовая молочная",
          "Чай с молоком",
          "Бутерброд с маслом",
        ][workDays.length % 3],
        lunch: [
          "Суп овощной, котлета куриная с пюре, компот",
          "Борщ, рыба запечённая с рисом, кисель",
          "Суп-лапша, тефтели с гречкой, сок",
        ][workDays.length % 3],
        afternoonSnack: ["Йогурт", "Творожная запеканка", "Печенье с молоком"][
          workDays.length % 3
        ],
        dinner: ["Омлет, чай", "Сырники со сметаной", "Пудинг творожный"][
          workDays.length % 3
        ],
      });
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return workDays;
};

const menuData = [
  {
    key: "yasli",
    name: "Зайчик (1.5 - 3 года)",
    days: createWorkDaysArray(20),
  },
  {
    key: "mladshaya",
    name: "Карлосон (3 - 4 года)",
    days: (() => {
      const workDays = [];
      let currentDate = new Date();

      while (workDays.length < 20) {
        if (!isWeekend(currentDate)) {
          const dayOfWeek = currentDate.getDay();
          const dayNames = {
            1: "Понедельник",
            2: "Вторник",
            3: "Среда",
            4: "Четверг",
            5: "Пятница",
          };

          workDays.push({
            day: workDays.length + 1,
            date: getDateOffset(currentDate),
            dayOfWeek: dayOfWeek,
            dayName: dayNames[dayOfWeek],
            fullDate: `${currentDate.toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
            })}, ${dayNames[dayOfWeek]}`,
            breakfast: ["Каша манная", "Какао", "Сыр с хлебом"][
              workDays.length % 3
            ],
            lunch: [
              "Рассольник, гуляш с макаронами, морс",
              "Щи, плов куриный, компот",
              "Суп грибной, биточки с картофельным пюре, кисель",
            ][workDays.length % 3],
            afternoonSnack: ["Фрукты", "Булочка с чаем", "Смузи"][
              workDays.length % 3
            ],
            dinner: [
              "Рыбные котлеты с пюре",
              "Макароны с сыром",
              "Запеканка рисовая",
            ][workDays.length % 3],
          });
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return workDays;
    })(),
  },
  {
    key: "srednyaya",
    name: "Буратино (4 - 5 лет)",
    days: (() => {
      const workDays = [];
      let currentDate = new Date();

      while (workDays.length < 20) {
        if (!isWeekend(currentDate)) {
          const dayOfWeek = currentDate.getDay();
          const dayNames = {
            1: "Понедельник",
            2: "Вторник",
            3: "Среда",
            4: "Четверг",
            5: "Пятница",
          };

          workDays.push({
            day: workDays.length + 1,
            date: getDateOffset(currentDate),
            dayOfWeek: dayOfWeek,
            dayName: dayNames[dayOfWeek],
            fullDate: `${currentDate.toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
            })}, ${dayNames[dayOfWeek]}`,
            breakfast: ["Овсяная каша с ягодами", "Чай", "Омлет с сыром"][
              workDays.length % 3
            ],
            lunch: [
              "Солянка, печень по-строгановски с гречкой, сок",
              "Свекольник, голубцы, компот",
              "Уха, курица запечённая с овощами, морс",
            ][workDays.length % 3],
            afternoonSnack: ["Ряженка", "Пряники", "Кефир с печеньем"][
              workDays.length % 3
            ],
            dinner: ["Драники со сметаной", "Гречневики", "Ленивые вареники"][
              workDays.length % 3
            ],
          });
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return workDays;
    })(),
  },
  {
    key: "starshaya",
    name: "Незнайка (5 - 6 лет)",
    days: (() => {
      const workDays = [];
      let currentDate = new Date();

      while (workDays.length < 20) {
        if (!isWeekend(currentDate)) {
          const dayOfWeek = currentDate.getDay();
          const dayNames = {
            1: "Понедельник",
            2: "Вторник",
            3: "Среда",
            4: "Четверг",
            5: "Пятница",
          };

          workDays.push({
            day: workDays.length + 1,
            date: getDateOffset(currentDate),
            dayOfWeek: dayOfWeek,
            dayName: dayNames[dayOfWeek],
            fullDate: `${currentDate.toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
            })}, ${dayNames[dayOfWeek]}`,
            breakfast: ["Сырники со сгущёнкой", "Какао", "Гренки с яйцом"][
              workDays.length % 3
            ],
            lunch: [
              "Харчо, бефстроганов с рисом, кисель",
              "Гороховый суп, котлета по-киевски с пюре, компот",
              "Крем-суп из брокколи, запеканка мясная, сок",
            ][workDays.length % 3],
            afternoonSnack: [
              "Йогурт с мюсли",
              "Фруктовое пюре",
              "Молоко с печеньем",
            ][workDays.length % 3],
            dinner: [
              "Блинчики с творогом",
              "Рисовая запеканка",
              "Рыбное суфле",
            ][workDays.length % 3],
          });
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return workDays;
    })(),
  },
];

export default menuData;
