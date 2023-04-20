import React from "react";
import Collection from "./components/collection/Collection";
import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Collection />
    </div>
  );
};

export default App;
