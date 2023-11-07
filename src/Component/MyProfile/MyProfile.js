import React from "react";
import EditInfo from "../EditInfo/EditInfo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MyProfileContent from "../MyProfileContent/MyProfileContent";
import Login from "../Login/Login";

const MyProfile = () => {
  return (
    <>
      <Header />
      <Login />
      <MyProfileContent />
      <Footer />
      <EditInfo />
    </>
  );
};

export default MyProfile;
