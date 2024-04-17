import React from 'react'
import LandingScreen from '../layout/LandingScreen'
import CustomHeading from '../components/CustomHeading'
import { Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react'
import member1 from '../assets/team/bobby.svg'
import fonts from '../assets/fonts'
import TeamCard from '../components/TeamCard'

const Team = () => {

    const team = [
        {
            name: 'Babar Azam',
            title: 'CTO',
            link: 'https://linkedin.com/in/razah1214',
            image: member1
        },
        {
            name: 'Babar Azam',
            title: 'CTO',
            link: 'https://linkedin.com/in/razah1214',
            image: member1
        },
        {
            name: 'Babar Azam',
            title: 'CTO',
            link: 'https://linkedin.com/in/razah1214',
            image: member1
        },
        {
            name: 'Babar Azam',
            title: 'CTO',
            link: 'https://linkedin.com/in/razah1214',
            image: member1
        }
    ]

    return (
        <LandingScreen 
            id={'team'}
            padding={[2, 4, 6, 32]}
            spacing={10}
            minH={'100vh'}
        >
            <CustomHeading>
                TEAM
            </CustomHeading>
            <Grid
                gridTemplateColumns={['auto', 'auto', 'auto auto', 'auto auto auto', 'auto auto auto auto']}
                gap={10}
            >
                {
                    team.map(({name, title, image, link}) => (<TeamCard key={link} name={name} title={title} image={image} link={link}/>))
                }
            </Grid>
        </LandingScreen>
    )
}

export default Team