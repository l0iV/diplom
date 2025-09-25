import { aboutCards, aboutContent } from "./aboutData.jsx/aboutData";
import Map from "../map/map";
import SliderAbout from "../SliderAbout/sliderNews";
export default function About() {
  return (
    <section className="w-full items-center flex-col gap-[100px] flex ">
      <div className="w-[80%] grid grid-cols-2 gap-[30px] justify-between about-main">
        <div className="flex flex-col items-start gap-[60px] text-[18px]">
          {aboutCards.map((card) => (
            <div
              key={card.id}
              className="rounded-[20px] shadow w-[500px] min-h-[100px] items-center justify-center flex flex-col card-info"
            >
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <div className={`flex flex-col items-center ${card.className}`}>
                {card.isSocial ? (
                  <div className="flex gap-[20px] items-center">
                    {card.socialIcons.map((social, index) => (
                      <img
                        key={index}
                        src={social.icon}
                        alt={social.alt}
                        className={`${social.className} cursor-pointer`}
                      />
                    ))}
                  </div>
                ) : (
                  card.content.map((text, index) => (
                    <p key={index} className="text-gray-700">
                      {text}
                    </p>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow w-full text-[20px]">
          <h2 className="font-bold bg-gradient-to-r from-sky-300 via-yellow-200 via-rose-300 to-green-300 bg-clip-text text-transparent text-[40px]">
            {aboutContent.title}
          </h2>
          <div className="rounded-lg h-full flex items-center flex-col text-justify indent-16 gap-[10px] info-about">
            <p>{aboutContent.description}</p>
            <ul className="flex flex-col gap-[15px] text-justify w-full">
              <li className="flex flex-col gap-[5px]">
                {aboutContent.features.map((feature, index) => (
                  <p key={index}>{feature}</p>
                ))}
              </li>
            </ul>
            <h1 className="text-center font-bold text-[30px]">
              {aboutContent.ending}
            </h1>
          </div>
        </div>
      </div>
      <SliderAbout />
      <div className="bg-white p-6 rounded-lg shadow w-[90%] items-center h-[450px] max-h-max">
        <h2 className="text-xl font-bold mb-4 text-center">
          Карта с местонахождением
        </h2>
        <div className="rounded-lg overflow-hidden">
          <Map />
        </div>
      </div>
    </section>
  );
}
