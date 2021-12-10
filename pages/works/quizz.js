import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Quizz">
    <Container>
      <Title>
        Quizz App <Badge>2020-</Badge>
      </Title>
      <P>
      A Quizz game web app with html css and vanilla js
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://thomascasco.github.io/Quizz_App/">
          https://thomascasco.github.io/Quizz_App/ <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/quizz-app-02.png" alt="Quizz" />
      <WorkImage src="/images/works/quizz-app-03.png" alt="Quizz" />
    </Container>
  </Layout>
)

export default Work