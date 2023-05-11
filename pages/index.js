import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, useColorModeValue,SimpleGrid,List,ListItem,Icon } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection , BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'


const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello i&apos;m a full-stack developer based in Argentina!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Thomas Casco
                    </Heading>
                    <p>Digital Craftzman ( Artist / Developer / Designer )</p>
                </Box>
                <Box 
                flexShrinx={0} 
                mt={{base: 4, md: 0}} 
                ml={{md: 6}} 
                align="center"
                >
                    <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                    borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius="full" 
                    src="/images/thomas.jpg" 
                    alt="Profile Image" 
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>Thomas is a full-stack developer based in Buenos Aires, Argentina, who is passionate about creating digital products and services. He has a natural talent for all aspects of product launches, from planning and design to solving real-life problems with code. When he's not working online, he enjoys spending time with his pens and drawings or making music. His most recent project was a CoffeApp, so don't hesitate to give him a {' '}
                <NextLink 
                href="/works/coffeapp">
                    <Link>Try!</Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My Portfolio
                        </Button>    
                    </NextLink>    
                </Box>    
            </Section>


            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2001</BioYear>
                    Born in Buenos Aires, Argentina.
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    I completed high school with a focus on art 🎨! In that same year, I began studying programming for the first time at Nucba.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    He started pursuing a technical degree in programming at the National University of Hurlingham.
                </BioSection>
                <BioSection>
                    <BioYear>2022 to present</BioYear>
                    After starting his technical degree in programming at the National University of Hurlingham, he began contributing to online communities such as The Odin Project and Front End Cafe.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I♥
                </Heading>
                <Paragraph>
                    Art, Programming, Drawing , {''}
                    <Link href="https://www.youtube.com/watch?v=0AlX67QpRcY">
                        Composse Music
                    </Link>
                    {''} ,Web Design , Ux, UI, Learn
                </Paragraph>
            </Section>
            
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/ThomasCasco" target="_blank">
                            <Button 
                            variant="ghost" 
                            colorScheme="teal" 
                            leftIcon={<Icon as={IoLogoGithub} />}
                            >
                                @ThomasCasco
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://twitter.com/thomas_casco" target="_blank">
                            <Button 
                            variant="ghost" 
                            colorScheme="teal" 
                            leftIcon={<Icon as={IoLogoTwitter} />}
                            >
                                @thomas_casco
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.instagram.com/thomi_casco/" target="_blank">
                            <Button 
                            variant="ghost" 
                            colorScheme="teal" 
                            leftIcon={<Icon as={IoLogoInstagram} />}
                            >
                                @thomi_casco
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/thom%C3%A1s-casco-43b4491a3" target="_blank">
                            <Button 
                            variant="ghost" 
                            colorScheme="teal" 
                            leftIcon={<Icon as={IoLogoLinkedin} />}
                            >
                                @Thomas Casco
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>  
        </Layout>  
    )
}

export default Page