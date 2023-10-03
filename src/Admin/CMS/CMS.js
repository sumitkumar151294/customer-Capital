import React from 'react'
import CMSContent from '../CMSContent/CMSContent'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const CMS = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <CMSContent />
            <Footer />
        </>
    )
}

export default CMS