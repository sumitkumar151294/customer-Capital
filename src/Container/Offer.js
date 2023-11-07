import React from 'react'
import { RecommendedGifts } from '../Component/RecommendedGifts/RecommendedGifts'
import Header from '../Component/Header/Header'
import NewHeader from '../Component/NewHeader/NewHeader'
import Footer from '../Component/Footer/Footer'
import Login from '../Component/Login/Login'

const Offer = () => {
    return (
        <>
            <Header />
            <Login />
            <NewHeader />
            <RecommendedGifts />
            <Footer />
        </>
    )
}

export default Offer
