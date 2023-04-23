import { Avatar, Flex, Stack } from '@mantine/core'
import React from 'react'
import {
    Card,
    Image,
    Group,
    Badge,
    ActionIcon, Title, Text, Button, Overlay, createStyles, rem
} from '@mantine/core';
import { IconHeart } from "@tabler/icons-react"

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: rem(180),
        paddingBottom: rem(130),
        backgroundImage:
            'url(https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/99/a2/21.jpg)',
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

const useStyles2 = createStyles(theme => ({
    card: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    },

    section: {
        borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md
    },

    like: {
        color: theme.colors.red[6]
    },

    label: {
        textTransform: "uppercase",
        fontSize: theme.fontSizes.xs,
        fontWeight: 700
    }
}))

const useStyles3 = createStyles(theme => ({
    body: {
        paddingLeft: rem(54),
        paddingTop: theme.spacing.sm
    }
}))

export function CommentSimple({ postedAt, body, author }) {
    const { classes } = useStyles3()
    return (
        <div>
            <Group>
                <Avatar src={author.image} alt={author.name} radius="xl" />
                <div>
                    <Text size="sm">{author.name}</Text>
                    <Text size="xs" color="dimmed">
                        {postedAt}
                    </Text>
                </div>
            </Group>
            <Text className={classes.body} size="sm">
                {body}
            </Text>
        </div>
    )
}

export function BadgeCard({ image, title, description, country, badges }) {
    const { classes, theme } = useStyles2()

    const features = badges.map(badge => (
        <Badge
            color={theme.colorScheme === "dark" ? "dark" : "gray"}
            key={badge.label}
            leftSection={badge.emoji}
        >
            {badge.label}
        </Badge>
    ))
    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image src={image} alt={title} height={180} />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group position="apart">
                    <Text fz="lg" fw={500}>
                        {title}
                    </Text>
                    <Badge size="sm">{country}</Badge>
                </Group>
                <Text fz="sm" mt="xs">
                    {description}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Perfect for you, if you enjoy
                </Text>
                <Group spacing={7} mt={5}>
                    {features}
                </Group>
            </Card.Section>

            <Group mt="xs">
                <Button radius="md" style={{ flex: 1 }}>
                    Show details
                </Button>
                <ActionIcon variant="default" radius="md" size={36}>
                    <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
                </ActionIcon>
            </Group>
        </Card>
    )
}

export function HeroImageBackground() {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.50} zIndex={1} />
            <div className={classes.inner}>
                <Title className={classes.title}>
                    Offbeat Places to Explore
                </Title>
            </div>
        </div>
    );
}
export default function OffBPlaceList() {
    const data2 = {
        "postedAt": "10 minutes ago",
        "body": "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        "author": {
            "name": "Jacob Warnhalter",
            "image": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
        }
    }
    const data = {
        "image": "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        "title": "Verudela Beach",
        "country": "Croatia",
        "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
        "badges": [
            {
                "emoji": "☀️",
                "label": "Sunny weather"
            },
            {
                "emoji": "🦓",
                "label": "Onsite zoo"
            },
            {
                "emoji": "🌊",
                "label": "Sea"
            },
            {
                "emoji": "🌲",
                "label": "Nature"
            },
            {
                "emoji": "🤽",
                "label": "Water sports"
            }
        ]
    }
    return (
        <>
            <HeroImageBackground />
            {/* <Stack align="center" spacing="sm" h={300} sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
                <BadgeCard image={data.image} title={data.title} description={data.description} country={data.country} badges={data.badges} />
                
            </Stack> */}
            <Stack align="center" h={1000} sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>

                <Flex
                    mih={50}
                    bg="rgba(F, F, F)"
                    gap="xs"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="nowrap"
                >
                    <BadgeCard image={data.image} title={data.title} description={data.description} country={data.country} badges={data.badges} />
                    <CommentSimple postedAt={data2.postedAt} body={data2.body} author={data2.author} />
                </Flex>
            </Stack>
        </>
    )
}
