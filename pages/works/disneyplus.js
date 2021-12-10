import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Disney+ Clone">
    <Container>
      <Title>
        Disney+ Clone <Badge>2021-</Badge>
      </Title>
      <P>
      Disney clone application, with user authentication by google. done with firebase, redux and react js
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://disney-clone-55d72.web.app/">
          https://disney-clone-55d72.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android WEB-APP</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React js, Redux, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/disney-plus-portfolio-02.png" alt="Disney" />
      <WorkImage src="/images/works/disney-plus-portfolio-03.png" alt="Disney" />
    </Container>
  </Layout>
)

export default Work