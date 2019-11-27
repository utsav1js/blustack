/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './CampaignTableRow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import calendarImage from '../../assets/calendar.png';
import csvImage from '../../assets/csv.png';
import priceImage from '../../assets/price.png';
import reportImage from '../../assets/report.png';

import pic1 from "../../assets/pic1.png";
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
    pic8,
};

const months = ['Jan', "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


const CampaignTableRow = ({ data, openModal, onChange, diffText}) => {
    const { imageKey, name, region, createdOn } = data;
    const createdDate = new Date(createdOn);
    return <div className="row-wrapper">
        <div className="flex-column">
            <span className="date-text">{months[createdDate.getMonth()]} {createdDate.getFullYear()}, {createdDate.getDate()}</span>
            <span className="date-diff">{diffText}</span>
        </div>
        <div className="campaign">
            <div className="campaign-image">
                <img src={imageConfig[imageKey]} />
            </div>
            <div className="campaign-text flex-column">
                <span>{name}</span>
                <span><i>{region}</i></span>
            </div>
        </div>
        <div className="action-wrapper" onClick={openModal}>
            <div className="icon-wrapper">
                <img src={priceImage} alt="price-icon" />
            </div>
            <span> View Pricing</span>
        </div>
        <div className="action-col">
            <div className="action-wrapper">
                <div className="icon-wrapper">
                    <img src={csvImage} alt="csv-icon" />
                </div>
                <span>CSV</span>
            </div>
            <div className="action-wrapper">
                <div className="icon-wrapper">
                    <img src={reportImage} alt="report-icon" />
                </div>
                <span> Report</span>
            </div>
            <div className="action-wrapper">
                <div className="icon-wrapper">
                    <img className="imgfix" src={calendarImage} alt="calendar-icon" />
                </div>
                <DatePicker
                    onChange={onChange}
                    selected={data.createdDate}
                    withPortal={false}
                />
                <span className="scheduleAgain"> Schedule Again </span>
            </div>
        </div>
    </div>
}

export default CampaignTableRow;