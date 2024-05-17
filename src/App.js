import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import Services from "./Services";
import Projects from "./Projects";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
