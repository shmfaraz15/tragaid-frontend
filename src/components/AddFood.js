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


export function AddFood() {
    const context = useContext(appcontext);
    const { addFood, getRegions, getPlacesOfRegion } = context
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
        // eslint-disable-next-line
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
        // eslint-disable-next-line
    }, [value])


    const [value2, setValue2] = useState(0);

    const [food, setFood] = useState({
        "foodName": "Bun Nippat",
        "details": "Bangalore is a city of innovators, so naturally they have they own innovative signature chaat. Bun Nippat is a simple concept, a crisp, deep-fried masala nippat is placed in the warm confines of a fresh bun",
        "images": "",

    })

    const onChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFood({ ...food, [e.target.name]: value })
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
                    Add food
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

                    <TextInput label="Food Name" name="foodName" id='foodName'
                        onChange={onChange} value={food.foodName} required />

                    <TextInput label="Details" name="details" id='details'
                        onChange={onChange} value={food.details} required />



                    <Textarea label="Links of Images" name="images" id='images'
                        onChange={onChange} value={food.images} required />


                    <Button fullWidth mt="xl"
                        onClick={() => {
                            console.log("food:", food, "id:", value2)
                            addFood(food, parseInt(value2))
                            setFood({
                                "foodName": "",
                                "details": "",
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