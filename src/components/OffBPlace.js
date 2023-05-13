import React, { useContext } from 'react'
import { Text, Paper, Flex, Title, Divider, ThemeIcon, Group, SimpleGrid, Spoiler, Rating } from '@mantine/core';
import { IconBus, IconCar, IconMapPinFilled, IconStarFilled } from '@tabler/icons-react';
import { Carousel } from "@mantine/carousel"
// import { useMediaQuery } from "@mantine/hooks"
import {
    createStyles,
    Button,
    // useMantineTheme,
    rem
} from "@mantine/core"
import appcontext from '../context/Context';


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
            "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/Gandikota-Fort.jpg",
        title: "Best forests to visit in North America",
        category: "nature"
    },
    {
        image:
            "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/03/10114448/Untitled-design-2022-03-10T114439.356.jpg?tr=w-1920",
        title: "Hawaii beaches review: better than you think",
        category: "beach"
    },
    {
        image:
            "https://www.indiantempletour.com/wp-content/uploads/2023/03/gandikota-fort-view.jpg",
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


export default function OffBPlace() {
    const context = useContext(appcontext);
    const { offbeatPlace } = context

    return (
        <Paper shadow="sm" p="md" withBorder >
            <Paper className="header_" shadow="sm" p="md" withBorder >
                <Title order={1}>{offbeatPlace.name}</Title>
                {/* <Flex
                    // mih={50}
                    bg="rgba(F,F,F)"
                    gap="md"
                    justify="flex-start"
                    align="flex-start"
                    direction="row"
                    wrap="nowrap"
                >
                    
                </Flex> */}
                <Group>
                    < Flex
                        // mih={50}
                        bg="rgba(F,F,F)"
                        gap="xs"
                        justify="flex-start"
                        align="flex-start"
                        direction="row"
                    // wrap="wrap"
                    >
                        <ThemeIcon variant="default" size="sm"><IconMapPinFilled /></ThemeIcon>
                        <Text fz="sm" fw={100}>15 km from Jammalamadugu in Kadapa district, Andhra Pradesh, India.</Text>
                    </Flex>
                    <Divider orientation="vertical" />

                    <Flex
                        // mih={50}
                        bg="rgba(F,F,F)"
                        gap="xs"
                        justify="flex-start"
                        align="flex-start"
                        direction="row"
                    // wrap="wrap"
                    >
                        <ThemeIcon variant="default" size="sm"><IconStarFilled /></ThemeIcon>
                        <Rating defaultValue={4} size="sm" />
                    </Flex>
                </Group>
            </Paper>
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
                            About
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
                                    Gandikota, a small hamlet on the right bank of Pennar, is one of the best offbeat places near Bangalore for a day out. Glamorised by a fort made of red stones, bordered by deep and rocky gorge . it is a perfect place to feel the “Indian Grand Canyon” effect.
                                </Text>
                            </Spoiler>
                        </div>
                        <div className='col2'>
                            <Text fz="sm" fw={700} mb={16}>Time To Reach By</Text>
                            <SimpleGrid
                                cols={2}
                                spacing="xs"
                                verticalSpacing="xl"
                                mih={50}
                                bg="rgba(F,F,F)"
                                // gap="xs"
                                justify="flex-start"
                                align="flex-start"
                                direction="row"
                                wrap="wrap"
                            >
                                < Flex
                                    // mih={50}
                                    bg="rgba(F,F,F)"
                                    gap="xs"
                                    justify="flex-start"
                                    align="flex-start"
                                    direction="row"
                                // wrap="wrap"
                                >
                                    <ThemeIcon variant="default" size="sm"><IconCar /></ThemeIcon>
                                    <Text fz="sm" fw={100}>5.5 hours</Text>
                                </Flex>
                                < Flex
                                    // mih={50}
                                    bg="rgba(F,F,F)"
                                    gap="xs"
                                    justify="flex-start"
                                    align="flex-start"
                                    direction="row"
                                // wrap="wrap"
                                >
                                    <ThemeIcon variant="default" size="sm"><IconBus /></ThemeIcon>
                                    <Text fz="sm" fw={100}>16 hours</Text>
                                </Flex>

                            </SimpleGrid>

                        </div>

                    </Group>
                </Paper>
            </Group>

        </Paper>
    )
}
