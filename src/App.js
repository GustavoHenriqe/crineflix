import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Session from "./components/Session"
import Header from "./components/Header"
import Seats from "./components/Seats";

// Estilização global
import GlobalStyle from "./style/global";

function App() {
  const [session, setSession] = useState(0)
  const [seatID, setSeatID] = useState(0)
  const [seat, setSeat] = useState(0)

  const object_api_request = {
    ids: [session, seatID, seat],
    name: "",
    cpf: ""
  }

  function sessionButton(element) {
    setSession(element.target.id)
  }

  return (
    <React.StrictMode>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home sessionButton={sessionButton} />} />
          <Route path={"/session/:idSession"} element={<Session />} />
          <Route path="/seats/:idSeats" element={<Seats />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
