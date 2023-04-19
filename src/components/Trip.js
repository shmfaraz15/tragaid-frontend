import TripData from "./TripData"
import "./TripStyles.css"
import React from 'react'
import Trip1 from '../assests/3.jpg'
import Trip2 from '../assests/4.jpg'
import Trip3 from '../assests/5.jpeg'



export default function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trip</h1>
            <p>You can discover unique destinations using google maps.</p>

            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="Indonesia, officially the
                    Republic of Indonesia, is a
                    country in Southeast Asia and
                    Oceania between the Indian and
                    Pacific oceans. It consists of
                    over 17,000 islands, including
                    Sumatra, Java, Sulawesi, and
                    parts of Borneo and New Guinea"
                />
                <TripData
                    image={Trip2}
                    heading="Trip in France"
                    text="France, in Western Europe,
                    encompasses medieval cities,
                    alpine villages and Mediterranean
                    beaches. Paris, its capital, is
                    famed for its fashion houses,
                    classical art museums including
                    the Louvre and monuments like the
                    Eiffel Tower"
                />
                <TripData
                    image={Trip3}
                    heading="Trip in France"
                    text="France, in Western Europe,
                    encompasses medieval cities,
                    alpine villages and Mediterranean
                    beaches. Paris, its capital, is
                    famed for its fashion houses,
                    classical art museums including
                    the Louvre and monuments like the
                    Eiffel Tower"
                />
            </div>
        </div>
    )
}
