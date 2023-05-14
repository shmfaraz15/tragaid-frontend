import {
    createStyles,
    ThemeIcon,
    Text,
    SimpleGrid,
    Box,
    Stack,
    AppShell
} from "@mantine/core"
import { IconAt, IconUser, IconMan, IconBuildingHospital } from "@tabler/icons-react"

import React, { useContext, useEffect, useState } from 'react'
import appcontext from '../context/Context';
// import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { AdminNavbar } from "./AdminNavbar";

const useStyles = createStyles((theme, { variant }) => ({
    wrapper: {
        display: "flex",
        alignItems: "center",
        color: theme.white
    },

    icon: {
        marginRight: theme.spacing.md,
        backgroundImage:
            variant === "gradient"
                ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][6]
                } 100%)`
                : "none",
        backgroundColor: "transparent"
    },

    title: {
        color:
            variant === "gradient"
                ? theme.colors.gray[6]
                : theme.colors[theme.primaryColor][0]
    },

    description: {
        color: variant === "gradient" ? theme.black : theme.white
    }
}))

function ContactIcon({
    icon: Icon,
    title,
    description,
    variant = "gradient",
    className,
    ...others
}) {
    const { classes, cx } = useStyles({ variant })
    return (
        <div className={cx(classes.wrapper, className)} {...others}>
            {variant === "gradient" ? (
                <ThemeIcon size={40} radius="md" className={classes.icon}>
                    <Icon size="1.5rem" />
                </ThemeIcon>
            ) : (
                <Box mr="md">
                    <Icon size="1.5rem" />
                </Box>
            )}

            <div>
                <Text size="xs" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    )
}



export function ContactIconsList({ data, variant }) {
    const items = data.map((item, index) => (
        <ContactIcon key={index} variant={variant} {...item} />
    ))
    return <Stack>{items}</Stack>
}

export function AdminDashboard() {
    const context = useContext(appcontext)
    // eslint-disable-next-line
    const { } = context

    let navigate = useNavigate();
    // eslint-disable-next-line
    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {

        }
        else {
            navigate("/hospitalhome");
        }
        // eslint-disable-next-line
    }, []);



    const MOCKDATA = [
        { title: "Doctor ID", description: doctor.doctorId, icon: IconUser },
        { title: "Doctor Name", description: doctor.doctorName, icon: IconUser },
        { title: "Doctor Email", description: doctor.doctorEmail, icon: IconAt },
        { title: "Doctor Gender", description: doctor.doctorGender, icon: IconMan },
        { title: "Hospital Name", description: doctor.hospitalName, icon: IconBuildingHospital }
    ]
    return (
        <>
            <AppShell
                padding="md"
                navbar={<AdminNavbar />}
                // header={<Header height={60} p="xs">{/* Header content */}</Header>}
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}
            >
                {
                    <SimpleGrid cols={1} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
                        <Box
                            sx={theme => ({
                                padding: theme.spacing.xl,
                                borderRadius: theme.radius.md,
                                backgroundColor: theme.white
                            })}
                        >
                            <ContactIconsList data={MOCKDATA} />
                        </Box>
                    </SimpleGrid>
                }
            </AppShell>

        </>
    )
}
