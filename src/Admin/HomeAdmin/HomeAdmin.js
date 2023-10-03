import React from 'react'
import './Admin.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
const HomeAdmin = () => {
    return (
        <>
            <div id="main-wrapper">
                <Header />
                <Sidebar />
                <Content />
                <Footer />
            </div>
        </>
    )
}

export default HomeAdmin
