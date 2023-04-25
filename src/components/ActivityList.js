import React from 'react'
import {
    Title, Overlay, createStyles, rem
} from '@mantine/core';

import { Text, Paper, Flex, Divider, Group, Spoiler } from '@mantine/core';

import { Carousel } from "@mantine/carousel"
// import { useMediaQuery } from "@mantine/hooks"
import {

    Button,
    // useMantineTheme,

} from "@mantine/core"

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
            radius="md"
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
            maw={700}
            w={700}
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
            "https://images.thrillophilia.com/image/upload/s--fa2brs0D--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/374/491/original/1626069325_09jka9y6ihsjd9mn1iy2vzw7eva5__QMR5527.jpg.jpg",
        title: "Best forests to visit in North America",
        category: "nature"
    },
    {
        image:
            "https://images.thrillophilia.com/image/upload/s--ft9NX1gF--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/374/492/original/1626094582_zuwk63ts7wgm1ko2dthk8uee3h5a_1582630567_shutterstock_358931669.jpg.jpg",
        title: "Hawaii beaches review: better than you think",
        category: "beach"
    },
    {
        image:
            "https://images.thrillophilia.com/image/upload/s--ZzNHmVXc--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/374/493/original/1626069380_3orpmnbn9t0tch9oh7uhtc15uwry_skandagiri-hills-night-trek-path-our-backpack-tales.jpeg.jpg",
        title: "Mountains at night: 12 best locations to enjoy the view",
        category: "nature"
    },
    {
        image:
            "https://images.thrillophilia.com/image/upload/s--HCBca-5y--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/374/494/original/1626069429_4rxu4ca9hbgyqt6obv3ti3xpiqdk_1588749616_shutterstock_1378478267.jpg.jpg",
        category: "nature"
    },
    {
        image:
            "https://images.thrillophilia.com/image/upload/s--WcRAy0Zl--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/173/802/original/1570791985_The-15-Best-Shopping-Places-In-Bangalore-For-Retail-Therapy.jpg.jpg",
        title: "Best places to visit this winter",
        category: "tourism"
    },
    {
        image:
            "https://images.thrillophilia.com/image/upload/s--rtbSv22l--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/374/495/original/1626069512_w2fhtmpzvp2b9bpf119jrjm5qrh0_lja9yilp6wauxepgmsuh7sreduft_1575643314_1541155700_Q_Mango_Forest_-__%2810%29.jpg.jpg.jpg",
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
            maw={700}
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
            'url(https://images.thrillophilia.com/image/upload/s--DOdCq2tg--/c_fill,g_center,h_460,q_auto,w_800/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/374/492/original/1626094582_zuwk63ts7wgm1ko2dthk8uee3h5a_1582630567_shutterstock_358931669.jpg.jpg)',
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
            <Overlay color="#000" opacity={0.40} zIndex={1} />
            <div className={classes.inner}>
                <Title className={classes.title}>
                    Activities To Do Around Bangalore
                </Title>
            </div>
        </div>
    );
}
export default function ActivityList() {

    return (
        <>
            <HeroImageBackground />
            <Paper shadow="sm" p="md" withBorder >

                <Group
                    mih={50}
                    bg="rgba(F,F,F)"
                    spacing="xl"
                    // noWrap
                    grow
                    align="flex-start"
                    mt={15}
                >
                    <CardsCarousel />
                    <Paper className="about_" shadow="sm" p="md" withBorder maw={795}>
                        <Flex
                            // mih={50}
                            bg="rgba(F,F,F)"
                            gap="md"
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            wrap="wrap"
                        >
                            <Title order={3} weight={700} >
                                Camping at Nandi Hills
                            </Title>
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
                                <Spoiler maxHeight={250} showLabel="Show more" hideLabel="Hide">
                                    <Text fz="md">
                                        One of the most exciting things to do in Bangalore is to sign up for an outdoor camping trip to the picturesque Nandi Hills. The experience is defined by thrilling treks, delicious meals, comfortable accommodations and a number of other exciting activities like zip lining and bonfires that will keep you entertained throughout the activity.

                                        The camping site also has arrangements for various games such as football, foosball, volleyball, snooker and much more. It is also the perfect opportunity to explore the breathtaking natural surroundings of the Nandi Hills, which are known for their misty blue hue and the endless stretches of greenery that you can explore on foot.

                                        Location: Distance from Bangalore is 61kms

                                        Timings: Check-in time: 4:00 pm, check out at 11:00 a.m.
                                    </Text>
                                </Spoiler>
                            </div>
                        </Group>
                    </Paper>
                </Group>

            </Paper>
            <Paper shadow="sm" p="md" withBorder >

                <Group
                    mih={50}
                    bg="rgba(F,F,F)"
                    spacing="xl"
                    // noWrap
                    grow
                    align="flex-start"
                    mt={15}
                >
                    <CardsCarousel />
                    <Paper className="about_" shadow="sm" p="md" withBorder maw={795}>
                        <Flex
                            // mih={50}
                            bg="rgba(F,F,F)"
                            gap="md"
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            wrap="wrap"
                        >
                            <Title order={3} weight={700} >
                                Go for Microlight Flying
                            </Title>
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
                                <Spoiler maxHeight={250} showLabel="Show more" hideLabel="Hide">
                                    <Text fz="md">
                                        If you are searching for unique things to do in Bangalore, there is no better experience than going on a microlight flight above the city. It is considered one of the most offbeat things to do in Bangalore and is rare to find anywhere else in the country.

                                        You can get tethered to a small cart that is attached to a large parachute that uses a motor-engine mechanism like that in a plane to take you 4,000 feet in the air. From here, you can catch an incredible view of the entire city and its surroundings from above. The activity is conducted in tandem with an experienced pilot who will navigate the machine while you are in the air so that you can spend the entire time taking in the views and feeling an adrenaline rush before you land.

                                        Location: Hosakere Lakeside, Ramanagara

                                        Timings: 10:00 a.m. – 5:30 p.m.
                                    </Text>
                                </Spoiler>
                            </div>
                        </Group>
                    </Paper>
                </Group>

            </Paper>

        </>
    )
}
