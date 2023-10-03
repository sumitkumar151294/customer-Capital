import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import RoleMasterContent from '../RoleMasterContent/RoleMasterContent'
import Sidebar from '../Sidebar/Sidebar'

const RoleMaster = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <RoleMasterContent />
            <Footer />
        </>
    )
}

export default RoleMaster