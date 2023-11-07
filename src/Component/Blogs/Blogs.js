import React from "react";
import BlogContent from "../BlogContent/BlogContent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewHeader from "../NewHeader/NewHeader";
import Login from "../Login/Login";

const Blog = () => {
  return (
    <>
      <Header />
      <Login />
      <NewHeader />
      <BlogContent />
      <Footer />
    </>
  );
};

export default Blog;
