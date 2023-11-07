import React from 'react'
import Footer from '../Footer/Footer'
import GrayBox from '../GrayBox/GrayBox'
import Header from '../Header/Header'
import NewHeader from '../NewHeader/NewHeader'
import OrderContainer from '../OrderContainer/OrderContainer'
import OrderSummary from '../OrderSummary/OrderSummary'
import Login from '../Login/Login'


const OrderPlaced = () => {
    return (
        <>
            <Header />
            <Login/>
            <GrayBox />
            <NewHeader />
            <OrderSummary />
            <OrderContainer />
            <Footer />
        </>
    )
}

export default OrderPlaced