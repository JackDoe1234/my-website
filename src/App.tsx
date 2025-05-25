import React from "react";
import { Routes, Route } from "react-router-dom";
import NetflixTitle from "./NetflixTitle";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
    </Routes>
  );
};

export default App;
