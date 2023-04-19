import React from 'react'
import "./OfferStyles.scss"
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import Mountain1 from "../assests/1.jpg"


export default function Offer() {
    return (
        <section className='offer container section'>
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="secTitle">Special Offers</h2>
                    <p>From historical cities to natural specteculars,come to see the best of the world</p>

                </div>

                <div className="mainContent grid">
                    <div className="singleOffer">
                        <div className="destImage">
                            <img src={Mountain1} alt='Img Name' />
                            <span className='discount'>
                                30% Off
                            </span>
                        </div>
                        <div className="offerBody">
                            <div className="price flex">
                                <h4>$1000</h4>
                                <span className="status">
                                    For rent
                                </span>
                            </div>
                            <div className="amenities flex">
                                <div className="singleAmenity flex">
                                    <MdKingBed className='icon' />
                                    <small>2 Beds</small>
                                </div>
                                <div className="singleAmenity flex">
                                    <MdBathtub className='icon' />
                                    <small>1 Batch</small>
                                </div>
                                <div className="singleAmenity flex">
                                    <FaWifi className='icon' />
                                    <small>Wi-Fi</small>
                                </div>
                                <div className="singleAmenity flex">
                                    <MdAirportShuttle className='icon' />
                                    <small>Shuttle</small>
                                </div>
                            </div>

                            <div className="location flex">
                                <MdLocationOn className='icon' />
                                <small>450 Vine #310,London</small>
                            </div>

                            <button className="btn flex">
                                View Details
                                <BsArrowRightShort className='icon' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}