// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import NewTournament from "./components/Tournament/NewTournament";
import Home from "./pages/Home";
import Article from "./pages/Article";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </Router>
  );
};

export default App;
