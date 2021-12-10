import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Pokedex!">
    <Container>
      <Title>
        Pokedex! <Badge>2020-</Badge>
      </Title>
      <P>
      A Pokedex web app with html css and vanilla js
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://thomascasco.github.io/Pokedex/">
          https://thomascasco.github.io/Pokedex/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android WEB-APP</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/pokedex-portfolio-02.png" alt="Pokedex" />
      <WorkImage src="/images/works/pokedex-portfolio-03.png" alt="Pokedex" />
    </Container>
  </Layout>
)

export default Work