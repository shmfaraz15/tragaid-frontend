import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    AppShell,
    NativeSelect,
    Textarea,
} from '@mantine/core';
import { AdminNavbar } from './AdminNavbar';
import appcontext from '../context/Context';
import { useContext, useEffect, useState } from 'react';


export function AddHotel() {
    const context = useContext(appcontext);
    const { addHotel, getRegions, getPlacesOfRegion, places } = context
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true)
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    useEffect(() => {

        async function fetchData() {
            const data = await getRegions();
            console.log("data:", data);
            const newData = data.map((region) => ({
                value: region.regionId,
                label: region.regionName,
            }));
            setData2(newData);
            console.log("data2:", newData)
            setIsLoading(false);
        }
        fetchData();
    }, [])

    const [value, setValue] = useState(null);

    useEffect(() => {

        async function fetchData() {
            console.log("region_value:", value)

            if (value) {
                console.log("data2 for data3:", data2)
                // const targetObj = data2.find(obj => obj.value === value);
                // console.log("object:", targetObj)
                // const targetLabel = targetObj ? targetObj.label : null;
                // console.log("targetLabel:", targetLabel);

                // const findLabel = (value) => {
                //     const region = data2.find((region) => region.value === value);
                //     return region ? region.label : null;
                // };
                // console.log("targetLabel:", findLabel(value))

                // Iterate over the objects in the list
                const v = value
                let targetLabel
                for (const obj of data2) {
                    // console.log("object:", obj)
                    // console.log(obj.value)
                    // console.log(typeof parseInt(v)); console.log(typeof obj.value);
                    if (obj.value === parseInt(v)) {
                        // console.log("o:", obj)
                        //Found the object with the matching value, extract its label

                        targetLabel = obj.label;
                        console.log("targetLabel:", targetLabel);  // Output: "North"
                        break;
                    }
                }

                const data = await getPlacesOfRegion(targetLabel);
                // const data = await places
                console.log("data for place:", data);
                const newData = data.map((place) => ({
                    value: place.id,
                    label: place.name,
                }));
                setData3(newData);
                console.log("data3:", newData)
                setIsLoading2(false);
            }

        }
        fetchData();
    }, [value])


    const [value2, setValue2] = useState(null);

    const [hotel, setHotel] = useState({
        "type": "Hotel",
        "name": "Courtyard by Marriott Bengaluru Hebbal",
        "address": "No 2/55 Outer Ring Road Nagavara, Bengaluru",
        "number": "084463 10595",
        "rate": "Rs. 5724",
        "images": "",
        "mapLocation": "",
        "starRating": 0,
        "description": "",
        "parking": false,
        "internet": false,
        "pool": false,
        "fitnessCenter": false,
        "bar": false,
        "taxiService": false,
        "bathRobes": false,
        "airConditioning": false,
        "additionalBathroom": false,
        "desk": false,
        "dinningArea": false,
        "cable": false,

    })

    const onChange = (e) => {
        setHotel({ ...hotel, [e.target.name]: e.target.value })
    }

    return (
        <AppShell
            padding="md"
            navbar={<AdminNavbar />}
            // header={<Header height={60} p="xs">{/* Header content */}</Header>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            <Container size={420} my={40}>
                <Title
                    align="center"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                >
                    Add Hotel
                </Title>


                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    {!isLoading && (
                        <NativeSelect
                            label="Select Region"
                            value={value}
                            onChange={(event) => {
                                setValue(event.currentTarget.value);
                                console.log(value);
                            }}
                            data={data2}
                        />
                    )}
                    {!isLoading2 && (
                        <NativeSelect
                            label="Select Place"
                            value={value2}
                            onChange={(event) => {
                                setValue2(event.currentTarget.value);
                                console.log(value2);
                            }}
                            data={data3}
                        />
                    )}

                    <TextInput label="Hotel Name" name="name" id='name'
                        onChange={onChange} value={hotel.name} required />

                    <Textarea label="Description" name="description" id='description'
                        onChange={onChange} value={hotel.description} required />

                    <Textarea label="Address" name="address" id='address'
                        onChange={onChange} value={hotel.address} required />

                    <TextInput label="Mobile Number" name="number" id='number'
                        onChange={onChange} value={hotel.number} required />

                    <TextInput label="Cost Per Person" name="rate" id='rate'
                        onChange={onChange} value={hotel.rate} required />

                    <TextInput label="Location Link" name="mapLocation" id='mapLocation'
                        onChange={onChange} value={hotel.mapLocation} required />

                    <TextInput type="number" label="Star Rating" name="starRating" id='starRating'
                        onChange={onChange} value={hotel.starRating} required />

                    <TextInput label="Cost Per Person" name="rate" id='rate'
                        onChange={onChange} value={hotel.rate} required />

                    <Textarea label="Links of Images" name="images" id='images'
                        onChange={onChange} value={hotel.images} required />

                    <Checkbox
                        label="Emergency Consent"
                        id="isEmergency"
                        name="isEmergency"
                        checked={hotel.isEmergency}
                        onChange={onChange}
                        required
                        mt={5}
                    />

                    <Button fullWidth mt="xl"
                        onClick={() => {
                            console.log("hotel:", hotel, "id:", value)
                            addHotel(hotel, value)
                            setHotel({
                                "name": "",
                                "history": "",
                                "culture": "",
                                "customs": "",
                                "description": "",
                                "images": "",
                            })
                        }}>
                        Add
                    </Button>
                </Paper>
            </Container>
        </AppShell>

    );
}