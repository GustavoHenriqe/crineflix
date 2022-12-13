import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Session from "./components/Session"
// Estilização global
import GlobalStyle from "./style/global";

function App() {
  const [id_Session, setIdSession] = useState()

  function objectFilm(element) {
    console.log(element)
  }

  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home objectFilm={objectFilm} />} />
          <Route path={"/session/" + id_Session} element={<Session />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
