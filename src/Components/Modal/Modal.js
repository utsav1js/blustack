import React from 'react';
import './Modal.css';

import PricingRow from '../PricingRow';
import pic1 from "../../assets/80.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import pic4 from "../../assets/pic4.png";
import pic5 from "../../assets/pic5.png";
import pic6 from "../../assets/pic6.png";
import pic7 from "../../assets/pic7.png";
import pic8 from "../../assets/pic8.png";
const imageConfig = {
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8
}
const Modal = ({ modalData, close, lang }) => {
    const { imageKey, name, region, price } = modalData;
    return <div className="modal">
        <div className="modal-content">
            <div className="modal-top">
                <div className="modal-image">
                    <img src={imageConfig[imageKey]} alt="modal" />
                </div>
                <div className="modal-text">
                    <span className="game-text">{name}</span>
                    <span className="region-text">{region}</span>
                </div>
            </div>
            <h2 className="pricing-heading">{lang ? 'fijación de precios':'Pricing'}</h2>
            {price && price.map((priceItem, index) => 
            <PricingRow lang={lang} key={index} durationText={priceItem.durationText} durationAmount={priceItem.durationAmount} />
            )}
            <button onClick={close} className="close">{lang ? 'CERRAR':'CLOSE'}</button>
        </div>
    </div>
}

export default Modal;