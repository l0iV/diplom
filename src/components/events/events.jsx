import events from "./listEvents/listEvents";
export default function Events() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-center text-[25px] font-bold mb-[30px]">
        Новости и события
      </h1>
      <div className="grid grid-cols-3 gap-6 w-[80%]">
        {events.map((event) => (
          <div
            key={event.id}
            className="border rounded-[20px] cursor-pointer flex flex-col gap-[10px]"
          >
            <div className="min-h-[300px]">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
            <div className="flex flex-col gap-[10px] p-[5px] indent-10 text-justify">
              <h3 className="text-large font-bold">{event.title}</h3>
              <p className="text-[#727374]">{event.date}</p>
              <p className="">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
