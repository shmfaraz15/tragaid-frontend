import React, { useContext, useEffect } from 'react'
import {
    Container,
    Grid,
    SimpleGrid,
    useMantineTheme,
    rem,
    Paper,
    Highlight,
    Image,
    Divider,
    Overlay,
    Title
} from "@mantine/core"
import img1 from '../assests/1.jpg'
import {
    createStyles,
    Card,
    Text,
    AspectRatio
} from "@mantine/core"
import Navbar from './Navbar';
import appcontext from '../context/Context';
import { useNavigate } from 'react-router-dom';


const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        paddingTop: rem(180),
        paddingBottom: rem(130),
        backgroundImage:
            'url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/5e/d2/1e/jr-resorts-perfect-place.jpg?w=1600&h=900&s=1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        [theme.fn.smallerThan('xs')]: {
            paddingTop: rem(80),
            paddingBottom: rem(50),
        },
    },

    inner: {
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        zIndex: 1,
    },

    title: {
        fontWeight: 900,
        fontSize: rem(50),
        letterSpacing: rem(-1),
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        marginBottom: theme.spacing.xs,
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            textAlign: 'left',
        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][4],
    },

    description: {
        color: theme.colors.gray[0],
        textAlign: 'center',

        [theme.fn.smallerThan('xs')]: {
            fontSize: theme.fontSizes.md,
            textAlign: 'left',
        },
    },


}));


const mockdata = [
    {
        title: "List of Hotels",
        image:
            "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
        date: "August 18, 2022",
        link: '/hotellist'
    },
    {
        title: "List of Off Beat Places",
        image:
            "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
        date: "August 27, 2022",
        link: '/offbeatplacelist'
    },
    {
        title: "List of Food Items",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
        date: "September 9, 2022",
        link: '/foodlist'
    },
    {
        title: "List of Restaurants",
        image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
        date: "September 12, 2022",
        link: '/restaurantlist'
    }
]

const useStyles1 = createStyles(theme => ({
    card: {
        transition: "transform 150ms ease, box-shadow 150ms ease",

        "&:hover": {
            transform: "scale(1.01)",
            boxShadow: theme.shadows.md
        }
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600
    }
}))

export function ArticlesCardsGrid(props) {
    const { classes } = useStyles1()
    // const context = useContext(appcontext);
    // const { } = context

    let navigate = useNavigate()

    const { placeName } = props

    const cards = mockdata.map(article => (
        <Card
            key={article.title}
            p="md"
            radius="md"
            component="a"
            // href={article.link}
            className={classes.card}
            onClick={() => {
                console.log(placeName)
                // setPlace(placeName)
                localStorage.setItem("place", placeName)
                navigate(article.link)
            }}
        >
            <AspectRatio ratio={1920 / 1080}>
                <Image src={article.image} />
            </AspectRatio>
            {/* <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                {article.date}
            </Text> */}
            <Text className={classes.title} mt={5}>
                {article.title}
            </Text>
        </Card>
    ))

    return (
        <Container py="xl">
            <Divider my="sm" />

            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </Container>
    )
}



const PRIMARY_COL_HEIGHT = rem(300)

export function LeadGrid() {
    const theme = useMantineTheme()
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`

    return (
        <Container my="xs">
            <SimpleGrid
                cols={2}
                spacing="xs"
                breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            >
                {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="sm" animate={false} /> */}
                <Image mx="auto" radius="sm" src={img1} alt="Random image" height={PRIMARY_COL_HEIGHT} />
                <Grid gutter="xs">
                    <Grid.Col>
                        {/* <Skeleton
                            height={SECONDARY_COL_HEIGHT}
                            radius="sm"
                            animate={false}
                        /> */}
                        <Image mx="auto" radius="sm" src={img1} alt="Random image" height={SECONDARY_COL_HEIGHT} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        {/* <Skeleton
                            height={SECONDARY_COL_HEIGHT}
                            radius="sm"
                            animate={false}
                        /> */}
                        <Image mx="auto" radius="sm" src={img1} alt="Random image" height={SECONDARY_COL_HEIGHT} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        {/* <Skeleton
                            height={SECONDARY_COL_HEIGHT}
                            radius="sm"
                            animate={false}
                        /> */}
                        <Image mx="auto" radius="sm" src={img1} alt="Random image" height={SECONDARY_COL_HEIGHT} />
                    </Grid.Col>
                </Grid>
            </SimpleGrid>
        </Container>
    )
}

export function HeroImageBackground() {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.30} zIndex={1} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Explore the Reigion
                    {/* <Text component="span" inherit className={classes.highlight}>
                        any stack
                    </Text> */}
                </Title>

                <Container size={640}>
                    <Text size="lg" className={classes.description}>
                        Find Essential things in your near by location right now
                    </Text>
                </Container>


            </div>
        </div>
    );
}

export function Places() {
    const context = useContext(appcontext);
    const { getPlacesOfRegion, places } = context
    // let string = ""
    // const placeList = async () => {
    //     console.log("places", places)
    //     return await places
    // }

    useEffect(() => {
        getPlacesOfRegion(localStorage.getItem("region"))
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {console.log("places in component", places)}
            {places.map((place) => {
                if (!place.name) return null; // check if place.name is defined
                const value = `Explore ${place.name}`;
                return <div key={place.id}>
                    <Paper className="header_" shadow="sm" p="md" withBorder maw='58rem' ml='auto' mr='auto'>
                        {/* {string = `Explore ${place.name}`} */}
                        <Highlight
                            size={35}
                            weight={600}
                            // span={true}
                            highlight={['Explore']}
                            highlightStyles={(theme) => ({
                                backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
                                fontWeight: 700,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            })}
                        >
                            {value}
                        </Highlight>
                        {/* {string} */}
                    </Paper>
                    <LeadGrid />
                    <ArticlesCardsGrid placeName={place.name} />
                </div>
            })}
        </>
    )
}

export default function Region() {
    // const context = useContext(appcontext);
    // const { getPlacesOfRegion, region } = context
    // const placeList = []

    // useEffect(() => {

    //     placeList = getPlacesOfRegion(region)

    // }, [])

    return (
        <div>
            <Navbar />
            <HeroImageBackground />
            <Places />

        </div>
    )
}
