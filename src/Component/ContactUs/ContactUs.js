import React from "react";
import ContactusContent from "../ContactUsContent/ContactusContent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewHeader from "../NewHeader/NewHeader";
import Login from "../Login/Login";

const ContactUs = () => {
  return (
    <>
      <Header />
      <Login />
      <NewHeader />
      <ContactusContent />
      <Footer />
    </>
  );
};

export default ContactUs;
