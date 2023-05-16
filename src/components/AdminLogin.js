import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    rem,
    Text,
    Anchor
} from "@mantine/core"
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import appcontext from '../context/Context';


const useStyles = createStyles(theme => ({
    wrapper: {
        minHeight: rem(900),
        backgroundSize: 'cover',
        backgroundImage:
            'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
    },

    form: {
        borderRight: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
        minHeight: rem(900),
        maxWidth: rem(450),
        paddingTop: rem(80),

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    }
}))

export function AdminLogin() {
    const { classes } = useStyles()
    // const context = useContext(appcontext);
    // const { } = context;

    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(credentials)
        const host = "http://localhost:8081/api/v1/auth/authenticate"
        const response = await fetch(host, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            }) // body data type must match "Content-Type" header
        });
        const json = await response.json();//authntoken will be returned
        console.log("json", json)
        if (json.token) {
            //save the authtoken and redirect
            localStorage.setItem('token', json.token);
            // getLoggedInDoctor(json.id);
            localStorage.setItem('id', json.id)
            navigate("/addRegion");
        }
    }

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Admin Login
                </Title>

                <TextInput
                    label="Email address"
                    placeholder="hello@gmail.com"
                    size="md"
                    type="email"
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={onChange}
                    required
                />
                <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    mt="md"
                    size="md"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                    minLength={3}
                    required
                />
                <Checkbox label="Keep me logged in" mt="xl" size="md" />
                <Button fullWidth mt="xl" size="md" onClick={submitHandler}>
                    Login
                </Button>

                <Text ta="center" mt="md">
                    Don&apos;t have an account?{" "}
                    <Anchor
                        href="/adminsignup"
                        weight={700}
                    // onClick={event => event.preventDefault()}
                    >
                        Register
                    </Anchor>
                </Text>
            </Paper>
        </div>
    )
}
