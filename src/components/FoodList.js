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
            "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/03/793f682aec8c3e49a7ebf834cace561a.jpg",
        title: "Best forests to visit in North America",
        category: "nature"
    },
    {
        image:
            "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/03/d8f3c0b85dacacf59959be1702b87d0b_1458110067_200_thumb.jpg",
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
            'url(https://media-cdn.tripadvisor.com/media/photo-w/1c/3f/b6/1b/starter.jpg)',
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
                    Foods to indulge in
                </Title>
            </div>
        </div>
    );
}
export default function FoodList() {

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
                                Bisi Bele Bhath
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
                                    <Text fz="md">Bisi Bele Bhath literally translates to ‘Hot Dal Rice’ (the name alone should invoke in you a warmth akin to eating mom’s homemade daal chawal). The dish features daal, rice and vegetables blended together like a khichdi, and served with boondi, namkeen or sometimes potato chips. It’s soul food at its best. Burping is encouraged. Where to get it? Bisi Bele Bhath is a very common ‘rice item’, available at most local South Indian joints. If you have to eat it just once, one of the best places is Maiya’s.</Text>
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
                                Bun Nippat
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
                                    <Text fz="md">Bangalore is a city of innovators, so naturally they have they own innovative signature chaat. Bun Nippat is a simple concept, a crisp, deep-fried masala nippat is placed in the warm confines of a fresh bun, along with chopped onions, grated cheese and a secret sauce that cannot be revealed to non-Bangaloreans! Pair this with a bottle of masala coke, and you will be transported to pure chatpata paradise. Where to get it? Bun Nippat stalls are found around college areas because the kids love it. The best bun nippat and masala coke combination is available at Chetty’s Corner.</Text>
                                </Spoiler>
                            </div>
                        </Group>
                    </Paper>
                </Group>

            </Paper>

        </>
    )
}
