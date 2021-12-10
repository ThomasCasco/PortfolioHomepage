import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSrr from '../no-srr.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog.js'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Thomas Casco Portfolio</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSrr>
                    <VoxelDog />
                </NoSrr>
                {children}
            </Container>
        </Box>
    )
}

export default Main