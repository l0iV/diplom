import { HashRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import "../src/components/styles/media.css";
import Index from "./components/index/index";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/About/about";
import Events from "./components/events/events";
import Parents from "./components/parents/parents";
import { useEffect } from "react";

function App() {
  const fetchApi = async () => {
    try {
      console.log("Отправка запроса на сервер...");
      const response = await axios.get("http://localhost:5000/test");
      console.log("✅ Данные успешно получены:", response.data);
      console.log("📊 Записи из БД:", response.data.data);
    } catch (error) {
      console.log("❌ Ошибка при запросе:", error);
      console.log("Детали ошибки:", error.response?.data);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <HashRouter>
      <Header />
      <main className="flex max-w-[1920px] gap-[100px] flex-col">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="оНас" element={<About />} />
          <Route path="мероприятия" element={<Events />} />
          <Route path="родителям" element={<Parents />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
