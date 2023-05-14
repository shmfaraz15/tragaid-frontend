import { useState } from "react"
import {
    createStyles,
    Navbar,
    Group,
    getStylesRef,
    rem,
    Image,
} from "@mantine/core"
import {

    IconLogout,
    IconAddressBook,
    IconAlignBoxBottomCenterFilled,
    IconInfoSquareRounded,
} from "@tabler/icons-react"
// import { MantineLogo } from "@mantine/ds"
import { Link } from "react-router-dom"
import logo from "./admin.png"
// import { Home } from "./Home"
// import { Home } from "./Home"

const useStyles = createStyles(theme => ({
    header: {
        paddingBottom: theme.spacing.md,
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
        borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
            }`
    },

    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
            }`
    },

    link: {
        ...theme.fn.focusStyles(),
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[1]
                : theme.colors.gray[7],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
            color: theme.colorScheme === "dark" ? theme.white : theme.black,

            [`& .${getStylesRef("icon")}`]: {
                color: theme.colorScheme === "dark" ? theme.white : theme.black
            }
        }
    },

    linkIcon: {
        ref: getStylesRef("icon"),
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[2]
                : theme.colors.gray[6],
        marginRight: theme.spacing.sm
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor
            }).background,
            color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
                .color,
            [`& .${getStylesRef("icon")}`]: {
                color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
                    .color
            }
        }
    }
}))

const data = [

    { link: "/admindashboard", label: "Dash Board", icon: IconAlignBoxBottomCenterFilled },
    { link: "/addregion", label: "Add Region", icon: IconAlignBoxBottomCenterFilled },
    { link: "/addplace", label: "Add Place", icon: IconAlignBoxBottomCenterFilled },
    { link: "/addhotel", label: "Add Hotel", icon: IconAlignBoxBottomCenterFilled },
    // { link: "/hospitalhome", label: "Hospital Home", icon: IconAlignBoxBottomCenterFilled },

    { link: "/admin/assigndoctor", label: "Assign Doctor", icon: IconAlignBoxBottomCenterFilled }

]

export function AdminNavbar() {
    const { classes, cx } = useStyles()
    const [active, setActive] = useState("Doctor Info")
    // let navigate = useNavigate();


    const handleLogout = () => {
        // console.log("Logging out")
        // console.log(navigate)
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        // navigate('/login')
        // console.log("Logging out after")
        // console.log(navigate)
    }

    const links = data.map(item => (
        <Link
            className={cx(classes.link, {
                [classes.linkActive]: item.label === active
            })}
            to={item.link}
            key={item.label}
            onClick={event => {
                // event.preventDefault()
                setActive(item.label)
            }}
        >
            {/* {console.log(item)} */}
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </Link>
    ))

    return (
        <Navbar width={{ base: 300 }} height='100vh' p="md">
            <Navbar.Section grow>
                <Group className={classes.header} position="apart">
                    {/* <MantineLogo size={28} /> */}
                    <Image height={100} fit="contain" mx="auto" radius="md" src={logo} alt="Random image" />
                    {/* <Code sx={{ fontWeight: 700 }}>v3.1.2</Code> */}
                </Group>
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                {/* <Link
                                href="#"
                                className={classes.link}
                                onClick={event => event.preventDefault()}
                            >
                                <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                                <span>Change account</span>
                            </Link> */}
                {/* <Link to='/'>Home</Link> */}
                {/* <Link
                    to="/login"
                    className={classes.link}
                    onClick={event => event.preventDefault()}
                >
                    <IconLogin className={classes.linkIcon} stroke={1.5} />
                    <span>Login</span>
                </Link> */}
                <Link
                    to="/adminlogin"
                    className={classes.link}
                    onClick={handleLogout}
                >
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </Link>
            </Navbar.Section>
        </Navbar>

    )
}