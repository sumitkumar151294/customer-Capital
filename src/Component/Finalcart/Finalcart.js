import React from "react";
import FinalCartContent from "../FinalCartContent/FinalCartContent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewHeader from "../NewHeader/NewHeader";
import Login from "../Login/Login";

const Finalcart = () => {
  return (
    <>
      <Header />
      <Login />
      <NewHeader />
      <FinalCartContent />
      <Footer />
    </>
  );
};
export default Finalcart;
