import { HashRouter, Route, Routes } from "react-router-dom";
import "../src/components/styles/media.css";
import Index from "./components/index/index";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/About/about";
import Events from "./components/events/events";
import Parents from "./components/parents/parents";
function App() {
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
