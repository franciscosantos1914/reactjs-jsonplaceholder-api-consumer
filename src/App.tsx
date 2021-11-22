import React from "react";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import NavBar from "./components/partials/NavBar";
import Footer from "./components/partials/Footer";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes />
      <GlobalStyle />
      <Footer />
    </>
  );
};

export default App;
