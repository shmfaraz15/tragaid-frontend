import {
    TextInput,

    Paper,
    Title,
    Container,
    Button,
    AppShell,
} from '@mantine/core';
import { AdminNavbar } from './AdminNavbar';
import appcontext from '../context/Context';
import { useContext, useState } from 'react';


export function AddRegion() {
    const context = useContext(appcontext);
    const { addRegion } = context

    const [regionName, setRegionName] = useState("NorthEast")
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
                    Add Region
                </Title>


                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Region Name" name="regionName" id='regionName'
                        onChange={(event) => setRegionName(event.target.value)} value={regionName} required />


                    <Button fullWidth mt="xl"
                        onClick={() => {
                            console.log(regionName)
                            addRegion(regionName)
                        }}>
                        Add
                    </Button>
                </Paper>
            </Container>
        </AppShell>

    );
}