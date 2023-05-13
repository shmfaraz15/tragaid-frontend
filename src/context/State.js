import Context from './Context'
// import { faker } from '@faker-js/faker';
import { useState } from 'react';


const State = (props) => {

    const host = "http://localhost:8081"

    const [link, setLink] = useState('');

    const [region, setRegion] = useState(null)
    const [places, setPlaces] = useState([])
    const [hotels, setHotels] = useState([])

    const [place, setPlace] = useState(null)

    const [foods, setFoods] = useState([])

    const [restaurants, setRestaurants] = useState([])

    const [restaurant, setRestaurant] = useState({})

    const [hotel, setHotel] = useState({})

    const [offbeatPlaces, setOffbeatPlaces] = useState([])

    const [offbeatPlace, setOffbeatPlace] = useState({})

    const getPlacesOfRegion = async (region) => {
        // const name = localStorage.getItem("doctorName")
        const url = `${host}/user/getAllPlaces/${region}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            // body: JSON.stringify({
            //     "hospitalId": consent.hospital_id,
            //     "patientId": consent.patient_id,
            //     "message": consent.message,
            //     "isEmergency": consent.isEmergency,
            //     "doctorId": consent.doctor_id,
            //     "doctorName": name
            // }) // body data type must match "Content-Type" header
        });
        console.log("response", response)
        const json = await response.json();//added ehr object will be returned
        console.log("json response", json)
        setPlaces(json)

    }

    const getHotels = async (place) => {
        // const name = localStorage.getItem("doctorName")
        const url = `${host}/user/getAllAccommodation/${place}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            // body: JSON.stringify({
            //     "hospitalId": consent.hospital_id,
            //     "patientId": consent.patient_id,
            //     "message": consent.message,
            //     "isEmergency": consent.isEmergency,
            //     "doctorId": consent.doctor_id,
            //     "doctorName": name
            // }) // body data type must match "Content-Type" header
        });
        console.log("response", response)
        const json = await response.json();//added ehr object will be returned
        console.log("json response", json)
        setHotels(json)

    }

    const getFoods = async (place) => {
        // const name = localStorage.getItem("doctorName")
        const url = `${host}/user/getAllFoodsForaPlace/${place}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            // body: JSON.stringify({
            //     "hospitalId": consent.hospital_id,
            //     "patientId": consent.patient_id,
            //     "message": consent.message,
            //     "isEmergency": consent.isEmergency,
            //     "doctorId": consent.doctor_id,
            //     "doctorName": name
            // }) // body data type must match "Content-Type" header
        });
        console.log("response", response)
        const json = await response.json();//added ehr object will be returned
        console.log("json response", json)
        setFoods(json)

    }

    const getRestaurants = async (place) => {
        // const name = localStorage.getItem("doctorName")
        const url = `${host}/user/getAllRestaurants/${place}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            // body: JSON.stringify({
            //     "hospitalId": consent.hospital_id,
            //     "patientId": consent.patient_id,
            //     "message": consent.message,
            //     "isEmergency": consent.isEmergency,
            //     "doctorId": consent.doctor_id,
            //     "doctorName": name
            // }) // body data type must match "Content-Type" header
        });
        console.log("response", response)
        const json = await response.json();//added ehr object will be returned
        console.log("json response", json)
        setRestaurants(json)

    }

    const getOffbeatPlaces = async (place) => {
        // const name = localStorage.getItem("doctorName")
        const url = `${host}/user/getAllOffBeatPlaces/${place}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            // body: JSON.stringify({
            //     "hospitalId": consent.hospital_id,
            //     "patientId": consent.patient_id,
            //     "message": consent.message,
            //     "isEmergency": consent.isEmergency,
            //     "doctorId": consent.doctor_id,
            //     "doctorName": name
            // }) // body data type must match "Content-Type" header
        });
        console.log("response", response)
        const json = await response.json();//added ehr object will be returned
        console.log("json response", json)
        setOffbeatPlaces(json)

    }

    return (
        <Context.Provider value={{ link, setLink, region, setRegion, getPlacesOfRegion, places, setPlaces, hotels, setHotels, getHotels, place, setPlace, foods, setFoods, getFoods, restaurants, setRestaurants, getRestaurants, restaurant, setRestaurant, hotel, setHotel, offbeatPlaces, setOffbeatPlaces, getOffbeatPlaces, offbeatPlace, setOffbeatPlace }}>
            {props.children}
        </Context.Provider>
    )
}

export default State 