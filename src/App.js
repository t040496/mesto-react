import React from "react";
import "./styles/App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="page-content">
      <div className="page">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
