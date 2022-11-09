import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import { DataApp } from "./DataApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";

//# En react comieza por un functional component
//# Renderizar

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <DataApp
      // title="Hola, soy "
      name="Fernanda"
      text=" y estoy aprendiendo React"
      number={123}
    /> */}
    {/* <FirstApp title="First  App" subTitle="React" name="Fernanda Vidal" /> */}

    <CounterApp value={100} />
  </React.StrictMode>
);
