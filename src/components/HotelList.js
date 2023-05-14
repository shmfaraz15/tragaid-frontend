import React, { useContext, useEffect } from 'react'
import {
    Title, Overlay, createStyles, rem, Rating, ThemeIcon, Anchor, ActionIcon
} from '@mantine/core';
import { IconMapPinShare } from '@tabler/icons-react';
import { Text, Paper, Flex, Divider, Group } from '@mantine/core';

import { Carousel } from "@mantine/carousel"
// import { useMediaQuery } from "@mantine/hooks"
import {

    Button,
    // useMantineTheme,

} from "@mantine/core"
import Navbar from './Navbar';
import appcontext from '../context/Context';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles(theme => ({
    card: {
        height: rem(440),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundSize: "contain",
        backgroundPosition: "center"

    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs
    },

    category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: "uppercase"
    }
}))

function Card({ image, title, category }) {
    const { classes } = useStyles()

    return (
        <Paper
            shadow="md"
            p="xl"
            radius="xs"
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
            maw={400}
            w={400}
            mah={300}
        >
            <Button variant="white" color="dark">
                Images
            </Button>
        </Paper>
    )
}

const data = [
    {
        image:
            "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/03/793f682aec8c3e49a7ebf834cace561a.jpg",
        title: "Best forests to visit in North America",
        category: "nature"
    },
    {
        image:
            "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/5a/03/9e/inside-outside-combo.jpg",
        title: "Hawaii beaches review: better than you think",
        category: "beach"
    },
    {
        image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/75/59/cd/executive-club-lounge.jpg?w=900&h=-1&s=1",
        title: "Mountains at night: 12 best locations to enjoy the view",
        category: "nature"
    },
    {
        image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/75/5a/36/roof-top-infinity-pool.jpg?w=900&h=-1&s=1",
        title: "Aurora in Norway: when to visit for best experience",
        category: "nature"
    },
    {
        image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/0c/6e/dc/courtyard-bengaluru-hebbal.jpg?w=900&h=-1&s=1",
        title: "Best places to visit this winter",
        category: "tourism"
    },
    {
        image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/a6/5b/95/a-5-star-hotel-in-hebbal.jpg?w=900&h=-1&s=1",
        title: "Active volcanos reviews: travel at your own risk",
        category: "nature"
    }
]

export function CardsCarousel() {
    // const theme = useMantineTheme()
    // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
    const slides = data.map(item => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ))

    return (
        <Carousel
            slideSize="100%"
            breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
            slideGap="xl"
            align="start"
            // slidesToScroll={mobile ? 1 : 2}
            slidesToScroll={1}
            maw={400}
            mah={300}
        >
            {slides}
        </Carousel>
    )
}

const useStyles1 = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: rem(180),
        paddingBottom: rem(130),
        backgroundImage:
            'url(https://media-cdn.tripadvisor.com/media/photo-m/1280/13/99/6e/d6/getlstd-property-photo.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        [theme.fn.smallerThan('xs')]: {
            paddingTop: rem(80),
            paddingBottom: rem(50),
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    title: {
        fontWeight: 900,
        fontSize: rem(40),
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

export function HeroImageBackground() {
    const { classes } = useStyles1();

    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.50} zIndex={1} />
            <div className={classes.inner}>
                <Title className={classes.title}>
                    Top hotels in Bangalore
                </Title>
            </div>
        </div>
    );
}
export default function HotelList() {

    const context = useContext(appcontext);
    const { hotels, getHotels, setHotel } = context
    let navigate = useNavigate()

    useEffect(() => {
        // console.log(gethotels)
        getHotels(localStorage.getItem("place"))
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Navbar />
            <HeroImageBackground />
            <Flex
                mih={50}
                bg="rgba(F, F, F)"
                gap="xs"
                justify="flex-start"
                align="center"
                direction="column"
                wrap="wrap"
            >
                {hotels.map(hotel => {
                    return <div key={hotel.id}>
                        <Paper shadow="sm" p="md" withBorder mt={20} maw={900} >

                            <Group
                                mih={50}
                                bg="rgba(F,F,F)"
                                spacing="xs"
                                noWrap
                                grow
                                align="flex-start"
                                mt={15}
                            >
                                <CardsCarousel />
                                <Paper className="about_" pl={10} maw={795}>
                                    <Flex
                                        // mih={50}
                                        bg="rgba(F,F,F)"
                                        gap={3}
                                        justify="flex-start"
                                        align="flex-start"
                                        direction="column"
                                        wrap="wrap"
                                    >
                                        <Anchor td="underline" color='black'
                                            onClick={() => {
                                                console.log("hotel clicked:", hotel)
                                                setHotel(hotel)
                                                navigate("/hotel")
                                            }}>
                                            <Title order={3} weight={700} >
                                                {hotel.id}. {hotel.name}
                                            </Title>
                                        </Anchor>

                                        <Group spacing={3}>
                                            <Rating value={4.5} fractions={2} readOnly size="xs" />
                                            <Divider orientation="vertical" />
                                            <Text fz="xs">515 reviews</Text>
                                        </Group>

                                    </Flex>
                                    <Divider my="sm" />
                                    <Group
                                        mih={50}
                                        bg="rgba(F,F,F)"
                                        spacing="xl"
                                        noWrap
                                        grow
                                        align="flex-start"
                                    >
                                        <div className='col1'>
                                            <Group spacing={2} noWrap>
                                                <Text fz="sm">{hotel.address}</Text>
                                                <ActionIcon component="a" href="https://www.google.com/maps/place/46+Ounces+Brewgarden/@12.8495322,77.6558743,17.29z/data=!4m6!3m5!1s0x3bae6d248fd8f02b:0x65951f6a484727a6!8m2!3d12.849616!4d77.6578129!16s%2Fg%2F11gxw0jm5r?hl=en-US">
                                                    <ThemeIcon variant="default" size="xs">
                                                        <IconMapPinShare />
                                                    </ThemeIcon>
                                                </ActionIcon>
                                            </Group>

                                        </div>
                                    </Group>
                                </Paper>
                            </Group>

                        </Paper>
                    </div>
                })}


            </Flex>


        </>
    )
}
