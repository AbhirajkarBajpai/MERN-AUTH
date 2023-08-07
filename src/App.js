import React from "react";
import './App.css';
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from './Components/header';
import Login from "./Components/login";
import Signup from "./Components/signup";
import UserPage from "./Components/userpage";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {isLoggedIn && <Route path="/user" element={<UserPage/>} />}{" "}
        </Routes>
      </main>
    </>
  );
}

export default App;
