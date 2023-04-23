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

    const offers = [
        {
            id: 1,
            imgSrc: Mountain1,
            destTitle: 'Machhu Pichhu',
            location: 'Peru',
            price: '$7,452'
        },
        {
            id: 2,
            imgSrc: Mountain1,
            destTitle: 'Machhu Pichhu',
            location: 'Peru',
            price: '$7,452'
        },
        {
            id: 3,
            imgSrc: Mountain1,
            destTitle: 'Machhu Pichhu',
            location: 'Peru',
            price: '$7,452'
        }
    ]

    return (
        <section className='offer container section'>
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="secTitle">Special Offers</h2>
                    <p>From historical cities to natural specteculars,come to see the best of the world</p>

                </div>

                <div className="mainContent grid">
                    {
                        offers.map((offer) => {
                            return (
                                <div className="singleOffer" key={offer.id}>
                                    <div className="destImage">
                                        <img src={offer.imgSrc} alt={offer.destTitle} />
                                        <span className='discount'>
                                            30% Off
                                        </span>
                                    </div>
                                    <div className="offerBody">
                                        <div className="price flex">
                                            <h4>{offer.price}</h4>
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
                                            <small>450 Vine #310,{offer.location}</small>
                                        </div>

                                        <button className="btn flex">
                                            View Details
                                            <BsArrowRightShort className='icon' />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}
