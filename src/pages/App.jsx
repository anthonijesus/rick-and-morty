import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../Components/Home/Home.jsx";
import Characters from "./Characters/Characters.jsx";
import PageDefault from "./PageDefault/PageDefault.jsx";
import DetailsCharacter from "./Characters/DetailsCharacter/DetailsCharacter.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personajes">
          <Route index element={<Characters />} />
          <Route
            path="infoCharacter/:characterId"
            element={<DetailsCharacter />}
          />
        </Route>
        <Route path="*" element={<PageDefault />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
