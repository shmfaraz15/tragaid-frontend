import {
    TextInput,
    Checkbox,
    Paper,
    Title,
    Container,
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
    const { addHotel, getRegions, getPlacesOfRegion } = context
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
        // eslint-disable-next-line
    }, [])

    const [value, setValue] = useState(null);

    useEffect(() => {

        async function fetchData() {
            console.log("region_value:", value)

            if (value) {
                console.log("data2 for data3:", data2)

                const v = value
                let targetLabel
                for (const obj of data2) {
                    // console.log("object:", obj)
                    // console.log(obj.value)
                    // console.log(typeof parseInt(v)); console.log(typeof obj.value);
                    if (obj.value === parseInt(v)) {

                        targetLabel = obj.label;
                        console.log("targetLabel:", targetLabel);
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
        // eslint-disable-next-line
    }, [value])


    const [value2, setValue2] = useState(1);

    const [hotel, setHotel] = useState({
        "type": "Hotel",
        "name": "Courtyard by Marriott Bengaluru Hebbal",
        "address": "No 2/55 Outer Ring Road Nagavara, Bengaluru",
        "number": "084463 10595",
        "rate": "Rs. 5724",
        "images": "https://images.trvl-media.com/lodging/14000000/13180000/13173200/13173198/b340574f.jpg?impolicy=resizecrop&rw=1200&ra=fit,",
        "mapLocation": "https://www.google.com/maps/place/Courtyard+by+Marriott+Bengaluru+Hebbal/@13.0399755,77.6062485,15.49z/data=!4m9!3m8!1s0x3bae177641c68697:0x31938d8d6a69c167!5m2!4m1!1i2!8m2!3d13.0428253!4d77.6096314!16s%2Fg%2F11hbqvx6l2?hl=en-GB",
        "starRating": 5,
        "description": "Courtyard by Marriott Bengaluru Hebbal offers luxury accommodations, exceptional service, and a prime location. Our hot",
        "parking": true,
        "internet": true,
        "pool": true,
        "fitnessCenter": true,
        "bar": true,
        "taxiService": true,
        "bathRobes": true,
        "airConditioning": true,
        "additionalBathroom": true,
        "desk": true,
        "dinningArea": true,
        "cable": true,

    })

    const onChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setHotel({ ...hotel, [e.target.name]: value })
        console.log(hotel)
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
                                console.log("value in native select:", value2);
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
                        label="Parking"
                        id="parking"
                        name="parking"
                        checked={hotel.parking}
                        onChange={onChange}
                        required
                        mt={5}
                    />

                    <Checkbox
                        label="Internet"
                        id="internet"
                        name="internet"
                        checked={hotel.internet}
                        onChange={onChange}
                        required
                        mt={5}
                    />

                    <Checkbox
                        label="Pool"
                        id="pool"
                        name="pool"
                        checked={hotel.pool}
                        onChange={onChange}
                        required
                        mt={5}
                    />

                    <Checkbox
                        label="Fitness Center"
                        id="fitnessCenter"
                        name="fitnessCenter"
                        checked={hotel.fitnessCenter}
                        onChange={onChange}
                        required
                        mt={5}
                    />
                    <Checkbox
                        label="Bar"
                        id="bar"
                        name="bar"
                        checked={hotel.bar}
                        onChange={onChange}
                        required
                        mt={5}
                    />
                    <Checkbox
                        label="Taxi Service"
                        id="taxiService"
                        name="taxiService"
                        checked={hotel.taxiService}
                        onChange={onChange}
                        required
                        mt={5}
                    />
                    <Checkbox
                        label="Bath Robes"
                        id="bathRobes"
                        name="bathRobes"
                        checked={hotel.bathRobes}
                        onChange={onChange}
                        required
                        mt={5}
                    />

                    <Checkbox
                        label="Air Conditioning"
                        id="airConditioning"
                        name="airConditioning"
                        checked={hotel.airConditioning}
                        onChange={onChange}
                        required
                        mt={5}
                    />

                    <Checkbox
                        label="Additional Bathroom"
                        id="additionalBathroom"
                        name="additionalBathroom"
                        checked={hotel.additionalBathroom}
                        onChange={onChange}
                        required
                        mt={5}
                    />

                    <Checkbox
                        label="Desk"
                        id="desk"
                        name="desk"
                        checked={hotel.desk}
                        onChange={onChange}
                        required
                        mt={5}
                    />

                    <Checkbox
                        label="Dinning Area"
                        id="dinningArea"
                        name="dinningArea"
                        checked={hotel.dinningArea}
                        onChange={onChange}
                        required
                        mt={5}
                    />

                    <Checkbox
                        label="Cable TV"
                        id="cable"
                        name="cable"
                        checked={hotel.cable}
                        onChange={onChange}
                        required
                        mt={5}
                    />
                    <Button fullWidth mt="xl"
                        onClick={() => {
                            console.log("hotel:", hotel, "id:", value2)
                            addHotel(hotel, parseInt(value2))
                            setHotel({
                                "type": "Hotel",
                                "name": "",
                                "address": "",
                                "number": "",
                                "rate": "",
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
                        }}>
                        Add
                    </Button>
                </Paper>
            </Container>
        </AppShell>

    );
}