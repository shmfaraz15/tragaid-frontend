// import React, { useContext } from 'react'
import Hero from './Hero'
import Destination from './Destination'
import Trip from './Trip'
import Footer from './Footer'
// import Offer from './Offer'
import "./HomeStyles.css"
import Navbar from './Navbar';
import ReagionList from './ReagionList'
import { Title } from '@mantine/core'
// import appcontext from '../context/Context';


export default function Home() {
    // const context = useContext(appcontext);
    // const { link, setLink } = context

    // const clickHandler = (cllickedLink) => {
    //     console.log("clickedLink", cllickedLink)
    //     setLink(cllickedLink)
    //     console.log('link in home', link)
    // }
    return (
        <div className='home'>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://adventurecenter.com.pk/wp-content/uploads/2021/12/jeep_2.jpg"
                title="Your Journey/Your Story"
                text="Choose Your Favourite Destination."
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Title size="3rem" mt={20} mb={-20}>Regions</Title>
            <ReagionList />
            <Destination />
            <Trip />
            {/* <Offer /> */}
            <Footer />
        </div>
    )
}
