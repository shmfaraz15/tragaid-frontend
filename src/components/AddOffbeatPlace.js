import {
    TextInput,

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


export function AddOffbeatPlace() {
    const context = useContext(appcontext);
    const { addOffbeatPlace, getRegions, getPlacesOfRegion, places } = context
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

    const [value, setValue] = useState();

    useEffect(() => {

        async function fetchData() {
            console.log("region_value:", value)

            if (value) {
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
                setData3(newData);
                console.log("data3:", newData)
                setIsLoading2(false);
            }

        }
        fetchData();
    }, [value])


    const [value2, setValue2] = useState(1);

    const [offbeatPlace, setOffbeatPlace] = useState({
        "name": "Naldehra",
        "location": "Shimla",
        "distance": 23,
        "byCarRoute": "This 23km ride will take you less than an hour. Follow Google Maps for navigation!",
        "byBusRoute": "The local HRTC buses between Shimla and Naldehra run 4 times a day. The journey takes 1hr and 55 rupees only!",
        "images": "",

    })

    const onChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setOffbeatPlace({ ...offbeatPlace, [e.target.name]: value })
        console.log(offbeatPlace)
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
                    Add offbeatPlace
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

                    <TextInput label="OffbeatPlace Name" name="name" id='name'
                        onChange={onChange} value={offbeatPlace.name} required />

                    <TextInput label="Location" name="location" id='location'
                        onChange={onChange} value={offbeatPlace.location} required />

                    <TextInput label="Distance" name="distance" id='distance'
                        onChange={onChange} value={offbeatPlace.distance} required />

                    <TextInput label="By Car Route Distance" name="byCarRoute" id='byCarRoute'
                        onChange={onChange} value={offbeatPlace.byCarRoute} required />

                    <TextInput label="By Bus Route Distance" name="byBusRoute" id='byBusRoute'
                        onChange={onChange} value={offbeatPlace.byBusRoute} required />

                    <Textarea label="Links of Images" name="images" id='images'
                        onChange={onChange} value={offbeatPlace.images} required />


                    <Button fullWidth mt="xl"
                        onClick={() => {
                            console.log("offbeatPlace:", offbeatPlace, "id:", value2)
                            addOffbeatPlace(offbeatPlace, parseInt(value2))
                            setOffbeatPlace({
                                "name": "",
                                "location": "",
                                "distance": 23,
                                "byCarRoute": "",
                                "byBusRoute": "",
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