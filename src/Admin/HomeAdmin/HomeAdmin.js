import React from 'react'
import './Admin.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';
const HomeAdmin = (props) => {
    const { Component } = props;
    return (
        <>
            <div id="main-wrapper">
                <Header />
                <Sidebar />
                <Component />
                <Footer />
            </div>
        </>
    )
}

export default HomeAdmin
