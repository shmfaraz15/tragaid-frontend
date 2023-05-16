import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Text,
    Container,
    Button,
    Input
} from "@mantine/core"
import { IconChevronDown } from "@tabler/icons-react";
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export function AdminSignup() {
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        role: "",
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        // console.log(e.target.name)
        // console.log(e.target.value)
        // console.log("credentials", credentials)
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const host = "http://localhost:8081/api/v1/auth/register"
        const response = await fetch(host, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: credentials.first_name,
                lastname: credentials.last_name,
                email: credentials.email,
                password: credentials.password,
                role: credentials.role
            }) // body data type must match "Content-Type" header
        });
        const json = await response.json();//authntoken will be returned
        console.log(json.token)
        if (json.token) {
            //save the authtoken and redirect
            // localStorage.setItem('token', json.token);
            navigate("/login");
        }
    }

    return (
        <Container size={420} my={40}>
            <Title
                align="center"
                sx={theme => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    fontWeight: 900
                })}
            >
                Sign Up
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Create Account For Admin
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <Input.Wrapper label="Role" value={credentials.role} onChange={onChange}>
                    <Input id="role" name="role" component="select" rightSection={<IconChevronDown size={14} stroke={1.5} />}>
                        <option value="ROLE_USER">Normal User</option>
                        <option value="ROLE_ADMIN">Admin</option>
                    </Input>
                </Input.Wrapper>

                <TextInput label="First Name" id="first_name" name="first_name" value={credentials.first_name} onChange={onChange} required />
                <TextInput label="Last Name" id="last_name" name="last_name" value={credentials.last_name} onChange={onChange} required />
                <TextInput label="Email" id="email" name="email" value={credentials.email} onChange={onChange} required />
                <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    required
                    mt="md"
                />
                <Button fullWidth mt="xl" onClick={submitHandler}>
                    Sign up
                </Button>
            </Paper>
        </Container>
    )
}
