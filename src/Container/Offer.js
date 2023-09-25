import React from 'react'
import { RecommendedGifts } from '../Component/RecommendedGifts/RecommendedGifts'
import Header from '../Component/Header/Header'
import NewHeader from '../Component/NewHeader/NewHeader'
import Footer from '../Component/Footer/Footer'

const Offer = () => {
    return (
        <>
            <Header />
            <NewHeader />
            <RecommendedGifts />
            <Footer />
        </>
    )
}

export default Offer
