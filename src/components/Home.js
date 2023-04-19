import React from 'react'
import Hero from './Hero'
import Destination from './Destination'
import Trip from './Trip'
import Footer from './Footer'
import Offer from './Offer'

export default function Home() {
    return (
        <>
            <Hero
                cName="hero"
                heroImg="https://adventurecenter.com.pk/wp-content/uploads/2021/12/jeep_2.jpg"
                title="Your Journey/Your Story"
                text="Choose Your Favourite Destination."
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
            <Offer />
            <Footer />
        </>
    )
}
