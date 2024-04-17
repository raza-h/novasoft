import React from 'react'
import LandingScreen from '../layout/LandingScreen'
import CustomHeading from '../components/CustomHeading'
import { Grid } from '@chakra-ui/react'
import Card from '../components/Card'

const Services = () => {
    const services = [
        {
            title: 'API Integration',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod augue sit amet enim vehicula, quis lobortis libero accumsan.'
        },
        {
            title: 'API Integration',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod augue sit amet enim vehicula, quis lobortis libero accumsan.'
        },
        {
            title: 'API Integration',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod augue sit amet enim vehicula, quis lobortis libero accumsan.'
        },
        {
            title: 'API Integration',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod augue sit amet enim vehicula, quis lobortis libero accumsan.'
        },
        {
            title: 'API Integration',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod augue sit amet enim vehicula, quis lobortis libero accumsan.'
        },
        {
            title: 'API Integration',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod augue sit amet enim vehicula, quis lobortis libero accumsan.'
        }
    ]

    return (
        <LandingScreen 
            id={'services'}
            padding={[2, 4, 6, 32]}
            spacing={10}
            minH={'100vh'}
        >
            <CustomHeading>
                SERVICES
            </CustomHeading>
            <Grid
                templateColumns={['auto', 'auto', 'auto auto', 'auto auto auto']}
                width={'100%'}
                gap={5}
                paddingX={[4, 6, 12, 0, 14]}
                textAlign={'justify'}
            >
                {services?.map(({ title, description }) => <Card key={title} title={title} description={description} />)}
            </Grid>
        </LandingScreen>
    )
}

export default Services