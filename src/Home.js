import React from 'react';
import './Home.css';
import CardPay from './CardPay';
import ButtonHome from './ButtonHome';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-a756983c-89cb-49b6-b787-e37a8c8340e0.png" />
            </div>
            <div className="home_cardPayment">
                <CardPay />
                <h1>Descubrí</h1>
                <ButtonHome />
            </div>
            
        </div>
    )
}

export default Home
