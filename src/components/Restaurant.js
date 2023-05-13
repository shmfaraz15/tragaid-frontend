import React, { useContext } from 'react'
import { Text, Paper, Flex, Title, Divider, ThemeIcon, Group, SimpleGrid, Spoiler, Rating } from '@mantine/core';
import { IconCheck, IconMapPinFilled, IconPhone, IconStarFilled } from '@tabler/icons-react';
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
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/3b/9b/ad/nazaara-outdoor-dining.jpg?w=900&h=-1&s=1",
        title: "Best forests to visit in North America",
        category: "nature"
    },
    {
        image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/75/5a/68/deluxe-king-bed-guest.jpg?w=900&h=-1&s=1",
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


export default function Restaurant() {
    const context = useContext(appcontext);
    const { restaurant } = context
    return (
        <Paper shadow="sm" p="md" withBorder >
            <Paper className="header_" shadow="sm" p="md" withBorder >
                <Title order={1}>{restaurant.name}</Title>
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
                        <Text fz="sm" fw={100}>{restaurant.address}</Text>
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
                        <ThemeIcon variant="default" size="sm"><IconPhone /></ThemeIcon>
                        <Text fz="sm" fw={100}>084463 10595</Text>
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
                                <Text fz="md">Laid-back eatery offering a buffet with dishes from around the world, plus a live cooking counter.</Text>
                            </Spoiler>
                            <Divider my="sm" />
                            <Flex
                                // mih={50}
                                bg="rgba(F,F,F)"
                                gap={10}
                                justify="flex-start"
                                align="flex-start"
                                direction="column"
                                wrap="wrap"
                            >
                                <Title order={4} weight={550} >
                                    Details
                                </Title>
                                <Group spacing={3}>

                                    <Text fz="sm">{restaurant.rate}</Text>
                                </Group>
                                <Group spacing={3}>
                                    <Text fz="sm" c="dimmed">Cuisines:</Text>
                                    <Text fz="sm">Indian,Asian,International</Text>

                                </Group>
                                <Group spacing={3}>
                                    <Text fz="sm" c="dimmed">Special Diets:</Text>
                                    <Text fz="sm">Vegetarian Friendly, Vegan Options, Gluten Free Options</Text>

                                </Group>
                            </Flex>

                        </div>
                        <div className='col2'>
                            <Text fz="sm" fw={700} mb={16}>Service options</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconCheck /></ThemeIcon>
                                    <Text fz="xs" fw={100}>No Contact Delivery</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconCheck /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Takeaway</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconCheck /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Dine-in</Text>
                                </Flex>


                            </SimpleGrid>
                            <Text fz="sm" fw={700} mb={16} pt={20}>Offerings</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconCheck /></ThemeIcon>
                                    <Text fz="xs" fw={100}>All you can eat</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconCheck /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Coffee</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconCheck /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Kid's Menu</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconCheck /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Vegan Options</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconCheck /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Vegetarian Options</Text>
                                </Flex>

                            </SimpleGrid>
                            <Text fz="sm" fw={700} mb={16} pt={20}>Amenities</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconCheck /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Good For Kids</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconCheck /></ThemeIcon>
                                    <Text fz="xs" fw={100}>High Chairs</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconCheck /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Toilets</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconCheck /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Free Wifi</Text>
                                </Flex>


                            </SimpleGrid>
                        </div>

                    </Group>
                </Paper>
            </Group>

        </Paper>
    )
}
