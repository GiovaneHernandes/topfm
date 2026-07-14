import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ARadio from "./pages/ARadio";
import Noticias from "./pages/Noticias";
import Contato from "./pages/Contato";
import OucaAoVivo from "./pages/OucaAoVivo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/radio" element={<ARadio />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/ouca-ao-vivo" element={<OucaAoVivo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;