import {
    TextInput,

    Paper,
    Title,
    Container,
    Button,
    AppShell,
    NativeSelect,
    Textarea,
    Checkbox,
} from '@mantine/core';
import { AdminNavbar } from './AdminNavbar';
import appcontext from '../context/Context';
import { useContext, useEffect, useState } from 'react';


export function AddRestaurant() {
    const context = useContext(appcontext);
    const { addRestaurant, getRegions, getPlacesOfRegion, places } = context
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
            newData.push({ value: 0, label: null });

            setData2(newData);
            console.log("data2:", newData)
            setIsLoading(false);
        }
        fetchData();
    }, [])

    const [value, setValue] = useState(0);

    useEffect(() => {

        async function fetchData() {
            console.log("region_value:", value)

            if (value !== 0) {
                console.log("data2 for data3:", data2)

                const v = value
                let targetLabel
                for (const obj of data2) {

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
                newData.push({ value: 0, label: null });
                setData3(newData);
                console.log("data3:", newData)
                setIsLoading2(false);
            }

        }
        fetchData();
    }, [value])


    const [value2, setValue2] = useState(0);

    const [restaurant, setRestaurant] = useState({
        "name": "Eighteen71 Cookhouse & Bar",
        "address": "Near Tourism Lift Hotel Willow Banks, The Mall, Shimla, Himachal Pradesh 171001",
        "rate": "500 per person",
        "type": "Restro Bar",
        "images": "https://example.com/images/eighteen71-cookhouse-bar.jpg",
        "starRating": 4.5,
        "typeOfCuisines": "Multi-Cuisine",
        "menuLink": "https://example.com/menus/eighteen71-cookhouse-bar",
        "mapLocation": "https://goo.gl/maps/XXXXXX",
        "phoneNo": "+91 1234567890",
        "description": "Located in the heart of Shimla, Eighteen71 Cookhouse & Bar offers a wide range of multi-cuisine dishes along with an extensive selection of cocktails and beverages. The restaurant features a cozy and elegant ambiance, perfect for a night out with friends or a romantic dinner for two.",
        "specialDiets": "Halal, Gluten-Free",
        "noContactDelivery": false,
        "takeaway": true,
        "dineIn": true,
        "unlimited": false,
        "kidsMenu": true,
        "veganOptions": false,
        "vegetarianOptions": true,
        "goodForKids": true,
        "highChairs": true,
        "toilets": true,
        "freeWifi": true,

    })

    const onChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setRestaurant({ ...restaurant, [e.target.name]: value })
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
                    Add Restaurant
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

                    <TextInput label="Restaurant Name" name="name" id='name'
                        onChange={onChange} value={restaurant.name} required />

                    <Textarea label="Address" name="address" id='address'
                        onChange={onChange} value={restaurant.address} required />

                    <TextInput label="Rate" name="rate" id="rate" onChange={onChange} value={restaurant.rate} required />

                    <Textarea label="Links of Images" name="images" id="images" onChange={onChange} value={restaurant.images} required />

                    <TextInput label="Star Rating" name="starRating" id="starRating" onChange={onChange} value={restaurant.starRating} required />

                    <TextInput label="Type of Cuisines" name="typeOfCuisines" id="typeOfCuisines" onChange={onChange} value={restaurant.typeOfCuisines} required />

                    <TextInput label="Menu Link" name="menuLink" id="menuLink" onChange={onChange} value={restaurant.menuLink} required />

                    <TextInput label="Map Location" name="mapLocation" id="mapLocation" onChange={onChange} value={restaurant.mapLocation} required />

                    <TextInput label="Phone Number" name="phoneNo" id="phoneNo" onChange={onChange} value={restaurant.phoneNo} required />

                    <Textarea label="Description" name="description" id="description" onChange={onChange} value={restaurant.description} required />

                    <TextInput label="Special Diets" name="specialDiets" id="specialDiets" onChange={onChange} value={restaurant.specialDiets} required />

                    <TextInput label="Type" name="type" id="type" onChange={onChange} value={restaurant.type} required />

                    <Checkbox label="No Contact Delivery" id="noContactDelivery" name="noContactDelivery" checked={restaurant.noContactDelivery} onChange={onChange} required />

                    <Checkbox label="Dine In" id="dineIn" name="dineIn" checked={restaurant.dineIn} onChange={onChange} required />

                    <Checkbox label="Unlimited" id="unlimited" name="unlimited" checked={restaurant.unlimited} onChange={onChange} required />

                    <Checkbox label="Kids Menu" id="kidsMenu" name="kidsMenu" checked={restaurant.kidsMenu} onChange={onChange} required />

                    <Checkbox label="Vegan Options" id="veganOptions" name="veganOptions" checked={restaurant.veganOptions} onChange={onChange} required />

                    <Checkbox label="Vegetarian Options" id="vegetarianOptions" name="vegetarianOptions" checked={restaurant.vegetarianOptions} onChange={onChange} required />

                    <Checkbox label="Good for Kids" id="goodForKids" name="goodForKids" checked={restaurant.goodForKids} onChange={onChange} required />

                    <Checkbox label="High Chairs" id="highChairs" name="highChairs" checked={restaurant.highChairs} onChange={onChange} required />

                    <Checkbox label="Toilets" id="toilets" name="toilets" checked={restaurant.toilets} onChange={onChange} required />

                    <Checkbox label="Free Wifi" id="freeWifi" name="freeWifi" checked={restaurant.freeWifi} onChange={onChange} required />

                    <Checkbox
                        label="Takeaway"
                        id="takeaway"
                        name="takeaway"
                        checked={restaurant.takeaway}
                        onChange={onChange}
                        required
                        mt={5}
                    />


                    <Button fullWidth mt="xl"
                        onClick={() => {
                            console.log("restaurant:", restaurant, "id:", value2)
                            addRestaurant(restaurant, parseInt(value2))
                            setRestaurant({
                                "name": "",
                                "address": "",
                                "rate": "",
                                "type": "",
                                "images": "",
                                "starRating": 0,
                                "typeOfCuisines": "",
                                "menuLink": "",
                                "mapLocation": "",
                                "phoneNo": "",
                                "description": "",
                                "specialDiets": "",
                                "noContactDelivery": false,
                                "takeaway": false,
                                "dineIn": false,
                                "unlimited": false,
                                "kidsMenu": false,
                                "veganOptions": false,
                                "vegetarianOptions": false,
                                "goodForKids": false,
                                "highChairs": false,
                                "toilets": false,
                                "freeWifi": false,
                            })
                        }}>
                        Add
                    </Button>
                </Paper>
            </Container>
        </AppShell>

    );
}