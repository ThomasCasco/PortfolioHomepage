import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Coffe App!">
    <Container>
      <Title>
        Coffe App <Badge>2023-</Badge>
      </Title>
      <P>
      A Coffe app made with kotlin and Jetpack Compose
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/ThomasCasco/CoffeApp">
          https://github.com/ThomasCasco/CoffeApp <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Kotlin, JetPackCompose, Web View</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/coffe_app_01.jpeg" alt="CoffeApp" />
      <WorkImage src="/images/works/coffe_app_02.jpeg" alt="CoffeApp" />
      <WorkImage src="/images/works/coffe_app_03.jpeg" alt="CoffeApp" />
      <WorkImage src="/images/works/coffe_app_04.jpeg" alt="CoffeApp" />
    </Container>
  </Layout>
)

export default Work