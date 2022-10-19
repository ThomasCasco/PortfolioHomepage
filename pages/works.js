import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDisney from '../public/images/works/disney-plus-portfolio-01.png'
import thumbPokedex from '../public/images/works/pokedex-portfolio-01.png'
import thumbQuizz from '../public/images/works/quizz-app-01.png'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* <Section>
          <WorkGridItem 
          id="disneyplus" 
          title="Disney+ clone" 
          thumbnail={thumbDisney}>
            A Disney+ clone with authentication suport!
          </WorkGridItem>
        </Section> */}
        
        <Section>
          <WorkGridItem
            id="pokedex"
            title="Pokedex"
            thumbnail={thumbPokedex}
          >
            A functional pokedex web!
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="quizz"
            title="Quizz"
            thumbnail={thumbQuizz}
          >
           A trivia game!
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works