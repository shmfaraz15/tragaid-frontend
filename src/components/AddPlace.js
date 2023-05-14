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


export function AddPlace() {
    const context = useContext(appcontext);
    const { addPlace, getRegions } = context
    const [isLoading, setIsLoading] = useState(true);
    const [data2, setData2] = useState([]);
    useEffect(() => {
        // async function fetchData() {
        //     const data = await getRegions()
        //     console.log("data:", data)
        //     for (let i = 0; i < data.length; i++) {
        //         const region = data[i];
        //         data2.push({
        //             value: region.regionId,
        //             label: region.regionName
        //         });
        //     }
        // }
        // fetchData()
        // getRegions()
        // console.log("regions:", regions)

        // for (let i = 0; i < regions.length; i++) {
        //     const region = regions[i];
        //     data2.push({
        //         value: region.regionId,
        //         label: region.regionName
        //     });
        // }

        // console.log("data2:", data2)
        async function fetchData() {
            const data = await getRegions();
            console.log("data:", data);
            const newData = data.map((region) => ({
                value: region.regionId,
                label: region.regionName,
            }));
            setData2(newData);
            setIsLoading(false);
        }
        fetchData();
    }, [])

    const [value, setValue] = useState('');

    const [place, setPlace] = useState({
        "name": "Dharamshala",
        "history": "Dharamshala is a popular hill station in the Kangra district of Himachal Pradesh. It was founded by the British in the mid-19th century and served as a summer retreat for them.",
        "culture": "The culture of Dharamshala is a blend of Tibetan and Indian cultures. The town is home to many Tibetan refugees and has a strong Tibetan influence in its food, culture, and handicrafts.",
        "customs": "The locals of Dharamshala follow traditional Himachali customs and wear traditional attire during festivals and celebrations.",
        "description": "Dharamshala is a popular hill station in the Kangra district of Himachal Pradesh.",
        "images": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/9f/05/0d.jpg,https://media-cdn.tripadvisor.com/media/photo-s/18/17/08/b8/triund-trek.jpg",

    })

    const onChange = (e) => {
        setPlace({ ...place, [e.target.name]: e.target.value })
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
                    Add Place
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
                    {/* [{ value: '1', label: 'NorthIndia' }, { value: '2', label: 'SouthIndia' }, { value: '3', label: 'Maharastra' }] */}
                    <TextInput label="Place Name" name="name" id='name'
                        onChange={onChange} value={place.name} required />

                    <Textarea label="Description" name="description" id='description'
                        onChange={onChange} value={place.description} required />

                    <Textarea label="History" name="history" id='history'
                        onChange={onChange} value={place.history} required />

                    <Textarea label="Culture" name="culture" id='culture'
                        onChange={onChange} value={place.culture} required />

                    <Textarea label="Customs" name="customs" id='customs'
                        onChange={onChange} value={place.customs} required />

                    <Textarea label="Links of Images" name="images" id='images'
                        onChange={onChange} value={place.images} required />

                    <Button fullWidth mt="xl"
                        onClick={() => {
                            console.log("place:", place, "id:", value)
                            addPlace(place, value)
                            setPlace({
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