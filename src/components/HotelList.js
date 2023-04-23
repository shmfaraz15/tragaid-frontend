import { Avatar, Flex, Paper, Stack, TypographyStylesProvider } from '@mantine/core'
import React from 'react'
import {
    Card,
    Image,
    Group,
    Badge,
    ActionIcon, Title, Text, Container, Button, Overlay, createStyles, rem
} from '@mantine/core';
import { IconHeart } from "@tabler/icons-react"

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
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

    // controls: {
    //     marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     paddingLeft: theme.spacing.md,
    //     paddingRight: theme.spacing.md,

    //     [theme.fn.smallerThan('xs')]: {
    //         flexDirection: 'column',
    //     },
    // },

    // control: {
    //     height: rem(42),
    //     fontSize: theme.fontSizes.md,

    //     '&:not(:first-of-type)': {
    //         marginLeft: theme.spacing.md,
    //     },

    //     [theme.fn.smallerThan('xs')]: {
    //         '&:not(:first-of-type)': {
    //             marginTop: theme.spacing.md,
    //             marginLeft: 0,
    //         },
    //     },
    // },

    // secondaryControl: {
    //     color: theme.white,
    //     backgroundColor: 'rgba(255, 255, 255, .4)',

    //     '&:hover': {
    //         backgroundColor: 'rgba(255, 255, 255, .45) !important',
    //     },
    // },
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
    comment: {
        padding: `${theme.spacing.lg} ${theme.spacing.xl}`
    },

    body: {
        paddingLeft: rem(54),
        paddingTop: theme.spacing.sm,
        fontSize: theme.fontSizes.sm
    },

    content: {
        "& > p:last-child": {
            marginBottom: 0
        }
    }
}))

export function CommentHtml({ postedAt, body, author }) {
    const { classes } = useStyles3()
    return (
        <Paper withBorder radius="md" className={classes.comment}>
            <Group>
                <Avatar src={author.image} alt={author.name} radius="xl" />
                <div>
                    <Text fz="sm">{author.name}</Text>
                    <Text fz="xs" c="dimmed">
                        {postedAt}
                    </Text>
                </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
                <div
                    className={classes.content}
                    dangerouslySetInnerHTML={{ __html: body }}
                />
            </TypographyStylesProvider>
        </Paper>
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
                    Hotels and Places to Stay
                    {/* <Text component="span" inherit className={classes.highlight}>
                        any stack
                    </Text> */}
                </Title>

                <Container size={640}>
                    <Text size="lg" className={classes.description}>
                        Popular hotels in your near by locations right now
                    </Text>
                </Container>

                {/* <div className={classes.controls}>
                    <Button className={classes.control} variant="white" size="lg">
                        Get started
                    </Button>
                    <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
                        Live demo
                    </Button>
                </div> */}
            </div>
        </div>
    );
}
export default function HotelList() {
    const data2 = {
        "postedAt": "10 minutes ago",
        "body": "<p>I use <a href=\"https://heroku.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href=\"https://www.digitalocean.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Digital Ocean</a> VPS to save some cash.</p>",
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
                    bg="rgba(0, 0, 0, .3)"
                    gap="xs"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="nowrap"
                >
                    <BadgeCard image={data.image} title={data.title} description={data.description} country={data.country} badges={data.badges} />
                    <CommentHtml postedAt={data2.postedAt} body={data2.body} author={data2.author} />
                </Flex>
                <Button variant="outline">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>

            </Stack>
        </>
    )
}
