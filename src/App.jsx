import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Components */
import Login from './Component/Login/Login';
import Main from './Component/Main/Main'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/mainpage" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
