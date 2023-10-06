import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const DashboardHome = (props) => {debugger;
    const { Component } = props;
    return (
        <>
            <div id="main-wrapper">
                <Header />
                <Component />
                <Footer />
            </div>
        </>
    )
}

export default DashboardHome
