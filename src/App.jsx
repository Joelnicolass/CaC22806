import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import Banner from "./Banner/Banner";
import Title from "./Banner/components/Title";
import Card from "./card/Card";
import Contexto from "./contexto/Contexto";
import Hijo1 from "./contexto/Hijo1";
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
import AppRoutes from "./routes/App.routes";

const App = () => {
  return <AppRoutes />;
};

export default App;
