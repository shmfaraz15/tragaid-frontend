import React, { useContext } from 'react'
import {
    createStyles,
    SimpleGrid,
    Card,
    Image,
    Text,
    Container,
    AspectRatio
} from "@mantine/core"
import appcontext from '../context/Context';
import { useNavigate } from 'react-router-dom';


const mockdata = [
    {
        title: "East",
        image:
            "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
        date: "August 18, 2022"
    },
    {
        title: "West",
        image:
            "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
        date: "August 27, 2022"
    },
    {
        title: "NorthIndia",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
        date: "September 9, 2022"
    },
    {
        title: "South",
        image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
        date: "September 12, 2022"
    }
]

const useStyles = createStyles(theme => ({
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

export function ArticlesCardsGrid() {
    const context = useContext(appcontext);
    const { region } = context
    const { classes } = useStyles()
    let navigate = useNavigate()

    const cards = mockdata.map(article => (
        <Card
            key={article.title}
            p="md"
            radius="md"
            component="a"
            // href="/region"
            className={classes.card}
            onClick={() => {
                localStorage.setItem("region", article.title)
                // setRegion(article.title)
                console.log("region", region)
                navigate('/region')
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
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </Container>
    )
}

export default function ReagionList(props) {
    // const context = useContext(appcontext);
    // const { link, setLink } = context

    // const clickHandler = (cllickedLink) => {
    //     console.log("clickedLink", cllickedLink)
    //     setLink(cllickedLink)
    //     console.log('link in home', link)
    // }
    return (
        <ArticlesCardsGrid />
    )
}
