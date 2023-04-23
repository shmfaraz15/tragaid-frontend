import Context from './Context'
// import { faker } from '@faker-js/faker';
import { useState } from 'react';


const State = (props) => {

    const host = "http://localhost:8081"
    const kims = "http://localhost:9090"

    const ehrsInitial = []
    // const ehrsInitial = [...Array(10)].map(() => ({
    //     "ehr_id": faker.datatype.uuid(),
    //     "hospital_id": faker.datatype.uuid(),
    //     "doctor_id": faker.datatype.uuid(),
    //     "timestamp": faker.date.past(),
    //     "diagnosis": faker.lorem.paragraph(),
    //     "medicine": faker.lorem.paragraph(),
    //     "patient_id": faker.datatype.uuid()
    // }))

    // const patientsInitial = [...Array(10)].map(() => ({
    //     "patient_id": faker.datatype.uuid(),
    //     "patient_name": faker.lorem.paragraph(),
    //     "patient_age": faker.datatype.uuid(),
    //     "patient_email": faker.lorem.paragraph(),
    //     "patient_mob_no": faker.phone.number,
    //     "patient_address": faker.address.city
    // }))
    const patientsInitial = []

    const [patients, setPatients] = useState(patientsInitial)

    const patientInitial = {};

    const [ehrs, setEhrs] = useState(ehrsInitial)
    //patient to view ehrs by a doctor
    const [patient, setPatient] = useState(patientInitial)

    const [approverPatient, setApproverPatient] = useState({
        patient_id: "",
        patient_name: "",
        patient_age: "",
        patient_email: "",
        patient_mob_no: "",
        patient_address: "",
        hospital_id: ""
    })

    const [loggedInDoctor, setLoggedInDoctor] = useState({})

    const [consents, setConsents] = useState([])
    const [consentResponses, setConsentResponses] = useState([])
    const [consentForResponse, setConsentForResponse] = useState({})

    const [loading, setLoading] = useState(true)//!! using var
    const [responseEhrs, setResponseEhrs] = useState([])

    //get details of logged in doctor
    const getLoggedInDoctor = async (id) => {

        const url = `${kims}/kims/doctor/getDoctor/${id}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },

        });
        const json = await response.json();//patients array
        console.log("logged in doctor:", json);
        setLoggedInDoctor(json)
        setLoading(false)
    }
    //generate consent request to patient
    const generateConsentRequest = async (consent) => {
        const url = `${kims}/kims/generateConsentRequest`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                "hospitalId": consent.hospital_id,
                "patientId": consent.patient_id,
                "message": consent.message,
                "isEmergency": consent.isEmergency,
                "doctorId": consent.doctor_id
            }) // body data type must match "Content-Type" header
        });
        // const json = await response.json();//added ehr object will be returned
        console.log(response)
        console.log("generating consent request")
    }

    //get all patients for a doctor
    const getPatients = async (id) => {
        const url = `${kims}/kims/getAllPatients/${id}`;//doctor_id
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },

        });
        const json = await response.json();//patients array
        console.log("Patients for a doctor:", json);
        setPatients(json)
    }


    //get all ehrs for a patient
    const getEhrs = async (patient_id) => {
        const url = `${kims}/kims/getEHR/${patient_id}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },

        });
        const json = await response.json();//ehr array
        console.log(json)
        setEhrs(json)
    }

    //to get all the consents
    const getConsents = async (doctor_id) => {
        const url = `${kims}/kims/getAllConsentRequests/${doctor_id}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }

        });
        const json = await response.json();//consent array
        console.log("consents in state", json)
        setConsents(json)
    }

    //get consent response from patient
    const getConsentResponse = async (consent) => {
        const url = `${kims}/kims/getConsentResponse`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    "consentId": consent.consent_id,
                    "hospitalId": consent.hospital_id,
                    "patientId": consent.patient_id,
                    "message": consent.message,
                    "isEmergency": consent.isEmergency,
                    "doctorId": consent.doctor_id
                }) // body data type must match "Content-Type" header

            });
            // console.log("consents in state", json)
            const r = await response
            console.log("r", r)
            const json = await response.json();//consent array
            if (json === null) {
                throw new Error('Empty list received from API');
            }
            console.log("consents in state2:", json)

            setConsentResponses(json)
        }
        catch (error) {
            console.error(error);
        }
    }

    //get ehrs by ehr ids
    const getEhrsByEhrIds = async (ids) => {
        const url = `${kims}/kims/getEHRsByIds`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(ids) // body data type must match "Content-Type" header

            });

            const json = await response.json();//consent array
            if (json === null) {
                throw new Error('Empty list received from API');
            }
            console.log("ehrs in state:", json)
            setResponseEhrs(json)
        }
        catch (error) {
            console.error(error);
        }
    }


    // const response = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${localStorage.getItem('token')}`
    //     },
    //     body: JSON.stringify({
    //         "consentId": consent.consent_id,
    //         "hospitalId": consent.hospital_id,
    //         "patientId": consent.patient_id,
    //         "message": consent.message,
    //         "isEmergency": consent.isEmergency,
    //         "doctorId": consent.doctor_id
    //     }) // body data type must match "Content-Type" header

    // });
    // const json = await response.json();//consent array
    // console.log("consents in state", json)
    // setConsentResponses(json)



    /***************************************PatientPart************************************************************************/
    //get patient info
    const getPatient = async () => {
        const url = `${host}/v1/patient/getPatientInfo/1`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const json = await response.json();//notes array
        console.log(json)
        setPatient(json)
    }

    //add a ehr
    const addEhr = async (
        hospitalId,
        hospitalName,
        doctorId,
        doctorName,
        diagnosis,
        medicine,
        patient
    ) => {
        console.log(hospitalId,
            hospitalName,
            doctorId,
            doctorName,
            diagnosis,
            medicine,
            patient);
        const url = `${host}/hospital_patient/addEhrForPatient`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                hospitalId,
                hospitalName,
                doctorId,
                doctorName,
                diagnosis,
                medicine,
                patient
            }) // body data type must match "Content-Type" header
        });
        // const json = await response.json();//added ehr object will be returned
        console.log(response)
        console.log("Adding a new ehr")

        // setEhr(ehrs.concat(json))
    }

    //patient login
    const patientLogin = async (credentials) => {
        const url = `${host}/patient/login`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: credentials.user_id, password: credentials.password }) // body data type must match "Content-Type" header
        });
        const json = await response.json();//authntoken will be returned
        console.log(json)
    }

    //patient signup
    const patientSignUp = async (newUser) => {
        const url = `${host}/v1/patient/addPatient`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: newUser.name,
                email: newUser.email,
                contact_no: newUser.contact_no,
                gender: newUser.gender,
                age: newUser.age
            }) // body data type must match "Content-Type" header
        });
        // const json = await response.json();//authntoken will be returned
        console.log(response)
    }

    return (
        <Context.Provider value={{ ehrs, setEhrs, getEhrs, patient, getPatient, addEhr, patientLogin, patientSignUp, patients, setPatients, getPatients, approverPatient, setApproverPatient, generateConsentRequest, loggedInDoctor, setLoggedInDoctor, getLoggedInDoctor, consents, setConsents, getConsents, getConsentResponse, consentResponses, setConsentResponses, consentForResponse, setConsentForResponse, loading, setLoading, responseEhrs, setResponseEhrs, getEhrsByEhrIds }}>
            {props.children}
        </Context.Provider>
    )
}

export default State 