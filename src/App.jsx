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
  return (
    <HashRouter>
      <Header />
      <main className="flex w-full gap-[100px] flex-col h-full">
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
