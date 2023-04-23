import React from 'react'
import {
    Title, Overlay, createStyles, rem
} from '@mantine/core';


const useStyles = createStyles((theme) => ({
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
    const { classes } = useStyles();

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


        </>
    )
}
