import React from 'react'
import '../HomeAdmin/Admin.css';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import VendorMasterContent from '../VendorMasterContent/VendorMasterContent'

const VendorMaster = () => {
    return (
        <>
             <Header />
                <Sidebar />
                <VendorMasterContent />
                <Footer />

        </>
    )
}

export default VendorMaster