import React from 'react'
import { Text, Paper, Flex, Title, Divider, ThemeIcon, Group, SimpleGrid, Spoiler, Rating } from '@mantine/core';
import { IconAirConditioning, IconBathFilled, IconBowl, IconBrandAirtable, IconBrandUber, IconDeviceTv, IconGlass, IconMapPinFilled, IconParking, IconPhone, IconPool, IconSock, IconStarFilled, IconWorldUpload, IconYoga } from '@tabler/icons-react';
import { Carousel } from "@mantine/carousel"
// import { useMediaQuery } from "@mantine/hooks"
import {
    createStyles,
    Button,
    // useMantineTheme,
    rem
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
                Hotel Images
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


export default function Hotel() {
    return (
        <Paper shadow="sm" p="md" withBorder >
            <Paper className="header_" shadow="sm" p="md" withBorder >
                <Title order={1}>Courtyard by Marriott Bengaluru Hebbal</Title>
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
                        <Text fz="sm" fw={100}>No 2/55 Outer Ring Road Nagavara, Bengaluru </Text>
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
                                <Text fz="md">Surrounded by lush greenery and overlooking Nagavara Lake in Hebbal, Bangalore. Courtyard by Marriott Bengaluru, Hebbal, is located just 30 minutes away from the Bengaluru International airport, which is the closest Marriott hotel to the airport. Relax in the modern, designed contemporary rooms and soak in breathtaking views of Nagavara lake with our first-rate amenities in our spacious hotel rooms and suites. The hotel offers multiple food and beverage outlets, including Hebbal café, which serves hand-crafted delicacies from around the nation and the globe. The restaurant aims to let your palate embark on a gastronomical journey through our thoughtfully designed buffets and the signature locally inspired dishes on our menus, or you can wine and dine at our Indian specialty open-air rooftop restaurant, Nazaara while enjoying the stellar views of Bengaluru skyline and savoring rich Indian cuisine, paired with a wide array of wines, spirits, and cocktails. Opt-in to swim in our rooftop infinity pool or work out in our modern on-site gym. Enhance your well-being with a soothing fusion of ancient Indian methodologies and modern wellness approaches, ideal for those wishing to relax during their Bengaluru visit. Discover over 11000 square feet of stylish event space, perfect for meetings, weddings, and more. Venture out to explore Bangalore's nearby shopping, dining, and attractions, or walk to Manyata Tech Park and Nagavara Lake.</Text>
                            </Spoiler>
                        </div>
                        <div className='col2'>
                            <Text fz="sm" fw={700} mb={16}>Property Amenities</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconParking /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Free Parking</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconWorldUpload /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Free Internet</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconPool /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Pool</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconYoga /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Fitness Center</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconGlass /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Bar/Lounge</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconBrandUber /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Taxi Service</Text>
                                </Flex>
                            </SimpleGrid>
                            <Text fz="sm" fw={700} mb={16} pt={20}>Room Features</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconSock /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Bath Robes</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconAirConditioning /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Air Conditioning</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconBathFilled /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Additional Bathroom</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconBrandAirtable /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Desk</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconBowl /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Dining Area</Text>
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
                                    <ThemeIcon variant="default" size="xs"><IconDeviceTv /></ThemeIcon>
                                    <Text fz="xs" fw={100}>Cable/Satellite TV</Text>
                                </Flex>
                            </SimpleGrid>
                        </div>

                    </Group>
                </Paper>
            </Group>

        </Paper>
    )
}
