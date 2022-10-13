import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./card/Card";
import Contexto from "./contexto/Contexto";
import Correcciones from "./correcciones/Correcciones";
import CustomHooks from "./customhooks/CustomHooks";
import Efectos from "./efectos/Efectos";
import ToDo from "./estructura/src/components/ToDo/ToDo";
import Form from "./formularios/Form";
import Formularios from "./formularios/Formularios";
import Controlados from "./formulariosv2/Controlados";
import NoControlados from "./formulariosv2/NoControlados";
import Llamadas from "./llamadas/Llamadas";
import Llamadas2 from "./llamadas/Llamadas2";
import PiedraPapelTijera from "./ppt/PiedraPapelTijera";
import PiedraPapelTijeraV2 from "./ppt/PiedraPapelTijeraV2";
import Promesas from "./promesas/Promesas";
import ComponenteA from "./props/ComponenteA";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contexto />} />
        <Route path="/llamadas" element={<Llamadas />} />
        <Route path="/llamadas2" element={<Llamadas2 />} />
        <Route path="/props" element={<ComponenteA />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
