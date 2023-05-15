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

    const [regions, setRegions] = useState([])

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
        console.log("response:", response)
        const json = await response.json();//added ehr object will be returned
        console.log("json response:", json)
        setPlaces(json)

        return json
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

    const addRegion = async (region_name) => {
        const url = `${host}/admin/addRegions`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify([{
                "regionName": region_name
            }])
            //     "hospitalId": consent.hospital_id,
            //     "patientId": consent.patient_id,
            //     "message": consent.message,
            //     "isEmergency": consent.isEmergency,
            //     "doctorId": consent.doctor_id,
            //     "doctorName": name
            // }) // body data type must match "Content-Type" header
        });
        console.log("response:", response)
        const json = await response.text();//added ehr object will be returned
        console.log("json response:", json)
        setOffbeatPlaces(json)
    }

    const getRegions = async () => {
        // const name = localStorage.getItem("doctorName")
        const url = `${host}/user/getAllRegions`
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
        console.log("response:", response)
        const json = await response.json();//added ehr object will be returned
        console.log("json response:", json)
        // setRegions(json)
        return json;
    }

    const addPlace = async (place, region_id) => {
        const url = `${host}/admin/addPlace`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                "name": place.name,
                "history": place.history,
                "culture": place.culture,
                "customs": place.customs,
                "description": place.description,
                "images": place.images,
                "region": {
                    "regionId": region_id
                }
            })

        });
        console.log("response:", response)
        const json = await response.text();
        console.log("json response:", json)
        setOffbeatPlaces(json)
    }

    const addHotel = async (hotel, place_id) => {
        const url = `${host}/admin/addAccommodation`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                "type": "Hotel",
                "name": hotel.name,
                "address": hotel.address,
                "number": hotel.number,
                "rate": hotel.rate,
                "images": hotel.images,
                "mapLocation": hotel.mapLocation,
                "starRating": hotel.starRating,
                "description": hotel.description,
                "parking": hotel.parking,
                "internet": hotel.internet,
                "pool": hotel.pool,
                "fitnessCenter": hotel.fitnessCenter,
                "bar": hotel.bar,
                "taxiService": hotel.taxiService,
                "bathRobes": hotel.bathRobes,
                "airConditioning": hotel.airConditioning,
                "additionalBathroom": hotel.additionalBathroom,
                "desk": hotel.desk,
                "dinningArea": hotel.dinningArea,
                "cable": hotel.cable,
                "place": {
                    "id": place_id
                }
            })

        });
        console.log("response:", response)
        const json = await response.text();
        console.log("json response:", json)

    }

    const addOffbeatPlace = async (offbeatPlace, place_id) => {
        const url = `${host}/admin/addOffBeatPlace`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                "name": offbeatPlace.name,
                "location": offbeatPlace.location,
                "distance": parseInt(offbeatPlace.distance),
                "byCarRoute": offbeatPlace.byCarRoute,
                "byBusRoute": offbeatPlace.byBusRoute,
                "images": offbeatPlace.images,
                "place": {
                    "id": place_id
                }
            })

        });
        console.log("response:", response)
        const json = await response.text();
        console.log("json response:", json)

    }

    const addFood = async (food, place_id) => {
        const url = `${host}/admin/addFoodsForPlace`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                "foodName": food.foodName,
                "details": "",
                "images": offbeatPlace.images,
                "place": {
                    "id": place_id
                }
            })

        });
        console.log("response:", response)
        const json = await response.text();
        console.log("json response:", json)

    }

    const addRestaurant = async (restaurant, place_id) => {
        const url = `${host}/admin/addRestaurantInAPlace`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                "name": restaurant.name,
                "address": restaurant.address,
                "noContactDelivery": restaurant.noContactDelivery,
                "takeaway": restaurant.takeaway,
                "dineIn": restaurant.dineIn,
                "rate": restaurant.rate,
                "type": restaurant.type,
                "images": restaurant.images,
                "starRating": restaurant.starRating,
                "typeOfCuisines": restaurant.typeOfCuisines,
                "menuLink": restaurant.menuLink,
                "mapLocation": restaurant.mapLocation,
                "phoneNo": restaurant.phoneNo,
                "description": restaurant.description,
                "specialDiets": restaurant.specialDiets,
                "unlimited": restaurant.unlimited,
                "kidsMenu": restaurant.kidsMenu,
                "veganOptions": restaurant.veganOptions,
                "vegetarianOptions": restaurant.vegetarianOptions,
                "goodForKids": restaurant.goodForKids,
                "highChairs": restaurant.highChairs,
                "toilets": restaurant.toilets,
                "freeWifi": restaurant.freeWifi,
                "place": {
                    "id": place_id
                }

            })

        });
        console.log("response:", response)
        const json = await response.text();
        console.log("json response:", json)

    }

    return (
        <Context.Provider value={{ link, setLink, region, setRegion, getPlacesOfRegion, places, setPlaces, hotels, setHotels, getHotels, place, setPlace, foods, setFoods, getFoods, restaurants, setRestaurants, getRestaurants, restaurant, setRestaurant, hotel, setHotel, offbeatPlaces, setOffbeatPlaces, getOffbeatPlaces, offbeatPlace, setOffbeatPlace, addRegion, regions, setRegions, getRegions, addPlace, addHotel, addOffbeatPlace, addFood, addRestaurant }}>
            {props.children}
        </Context.Provider>
    )
}

export default State 