import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LoyaltyProgramContent from "../LoyaltyProgramContent/LoyaltyProgramContent";
import Login from "../Login/Login";

const LoyaltyProgram = () => {
  return (
    <>
      <Header />
      <Login />
      <LoyaltyProgramContent />
      <Footer />
    </>
  );
};

export default LoyaltyProgram;
