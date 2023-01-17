import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={< Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
