import React from 'react'
import EditInfo from '../EditInfo/EditInfo'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MyProfileContent from '../MyProfileContent/MyProfileContent'
import NewHeader from '../NewHeader/NewHeader'


const MyProfile = () => {
  return (
    <>
    <Header />
    <NewHeader />
    <MyProfileContent />
    <Footer />
    <EditInfo />
    </>
  )
}

export default MyProfile