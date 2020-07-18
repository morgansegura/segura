import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { ButtonOutline } from '../../components/Button'

// Material UI
import Grid from '@material-ui/core/Grid';

// Styled components
import { Section, SectionInner, SectionTitleBlock, SectionTitle, SectionDescription, SectionContent, TitleBlock } from '../../styles/layout/styled'
import * as S from '../../styles/resume/styled'
import { ButtonBlock } from '../../components/Button/styled'

export default ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Resume" />
      <Section>
        <SectionInner>
          <SectionTitleBlock>
            <SectionTitle>Resume</SectionTitle>
            <SectionDescription>10 Years of Experience</SectionDescription>
          </SectionTitleBlock>

          <SectionContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8} className="pb-4">

                <TitleBlock>
                  <h3>Education</h3>
                </TitleBlock>

                <div className="pb-4">
                  <S.TimelineItem>
                    <S.TimelineLeft>
                      <S.ItemPeriod>2008</S.ItemPeriod>
                      <S.ItemCompany>University of Studies</S.ItemCompany>
                    </S.TimelineLeft>
                    <div class="divider"></div>
                    <S.TimelineRight>
                      <S.ItemTitle>Fronted Development</S.ItemTitle>
                      <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                    </S.TimelineRight>
                  </S.TimelineItem>

                  <S.TimelineItem>
                    <S.TimelineLeft>
                      <S.ItemPeriod>2007</S.ItemPeriod>
                      <S.ItemCompany>University of Studies</S.ItemCompany>
                    </S.TimelineLeft>
                    <div class="divider"></div>
                    <S.TimelineRight>
                      <S.ItemTitle>Graphic Design</S.ItemTitle>
                      <p>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                    </S.TimelineRight>
                  </S.TimelineItem>
                </div>

                <TitleBlock>
                  <h3>Experience<span></span></h3>
                </TitleBlock>


                <div class="timeline timeline-second-style clearfix">
                  <S.TimelineItem>
                    <S.TimelineLeft>
                      <S.ItemPeriod>2016 - Current</S.ItemPeriod>
                      <S.ItemCompany>Google</S.ItemCompany>
                    </S.TimelineLeft>
                    <div class="divider"></div>
                    <S.TimelineRight>
                      <S.ItemTitle>Lead Ui/Ux Designer</S.ItemTitle>
                      <p>Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.</p>
                    </S.TimelineRight>
                  </S.TimelineItem>

                  <S.TimelineItem>
                    <S.TimelineLeft>
                      <S.ItemPeriod>2013 - 2016</S.ItemPeriod>
                      <S.ItemCompany>Adobe</S.ItemCompany>
                    </S.TimelineLeft>
                    <div class="divider"></div>
                    <S.TimelineRight>
                      <S.ItemTitle>Senior Ui/Ux Designer</S.ItemTitle>
                      <p>Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.</p>
                    </S.TimelineRight>
                  </S.TimelineItem>

                  <S.TimelineItem>
                    <S.TimelineLeft>
                      <S.ItemPeriod>2011 - 2013</S.ItemPeriod>
                      <S.ItemCompany>Google</S.ItemCompany>
                    </S.TimelineLeft>
                    <div class="divider"></div>
                    <S.TimelineRight>
                      <S.ItemTitle>Junior Ui/Ux Designer</S.ItemTitle>
                      <p>Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet.</p>
                    </S.TimelineRight>
                  </S.TimelineItem>
                </div>

              </Grid>

              <Grid item xs={12} sm={4} className="pb-4">
                <TitleBlock>
                  <h3>Design Skills<span></span></h3>
                </TitleBlock>

                <S.SkillsInfo>

                  <S.SkillValueContainer>
                    <h4>Web Design</h4>
                    <S.SkillValue>95%</S.SkillValue>
                  </S.SkillValueContainer>
                  <S.SkillBarContainer>
                    <S.SkillBarPercentage className="skill--95"></S.SkillBarPercentage>
                  </S.SkillBarContainer>

                  <S.SkillValueContainer>
                    <h4>Print Design</h4>
                    <S.SkillValue>65%</S.SkillValue>
                  </S.SkillValueContainer>
                  <S.SkillBarContainer>
                    <S.SkillBarPercentage className="skill--65"></S.SkillBarPercentage>
                  </S.SkillBarContainer>

                  <S.SkillValueContainer>
                    <h4>Logo Design</h4>
                    <S.SkillValue>80%</S.SkillValue>
                  </S.SkillValueContainer>
                  <S.SkillBarContainer>
                    <S.SkillBarPercentage className="skill--80"></S.SkillBarPercentage>
                  </S.SkillBarContainer>

                  <S.SkillValueContainer>
                    <h4>Graphic Design</h4>
                    <S.SkillValue>90%</S.SkillValue>
                  </S.SkillValueContainer>
                  <S.SkillBarContainer>
                    <S.SkillBarPercentage className="skill--90"></S.SkillBarPercentage>
                  </S.SkillBarContainer>

                </S.SkillsInfo>

                <TitleBlock className="pt-4">
                  <h3>Coding Skills<span></span></h3>
                </TitleBlock>


                <S.SkillsInfo>

                  <S.SkillValueContainer>
                    <h4>JavaScript</h4>
                    <S.SkillValue>85%</S.SkillValue>
                  </S.SkillValueContainer>
                  <S.SkillBarContainer>
                    <S.SkillBarPercentage className="skill--85"></S.SkillBarPercentage>
                  </S.SkillBarContainer>

                  <S.SkillValueContainer>
                    <h4>PHP</h4>
                    <S.SkillValue>70%</S.SkillValue>
                  </S.SkillValueContainer>
                  <S.SkillBarContainer>
                    <S.SkillBarPercentage className="skill--70"></S.SkillBarPercentage>
                  </S.SkillBarContainer>

                  <S.SkillValueContainer>
                    <h4>Python</h4>
                    <S.SkillValue>60%</S.SkillValue>
                  </S.SkillValueContainer>
                  <S.SkillBarContainer>
                    <S.SkillBarPercentage className="skill--60"></S.SkillBarPercentage>
                  </S.SkillBarContainer>

                  <S.SkillValueContainer>
                    <h4>Perl</h4>
                    <S.SkillValue>75%</S.SkillValue>
                  </S.SkillValueContainer>
                  <S.SkillBarContainer>
                    <S.SkillBarPercentage className="skill--75"></S.SkillBarPercentage>
                  </S.SkillBarContainer>

                  <S.SkillValueContainer>
                    <h4>HTML / CSS</h4>
                    <S.SkillValue>100%</S.SkillValue>
                  </S.SkillValueContainer>
                  <S.SkillBarContainer>
                    <S.SkillBarPercentage className="skill--100"></S.SkillBarPercentage>
                  </S.SkillBarContainer>



                  <S.SkillValueContainer>
                    <h4>Smarty / Twig</h4>
                    <S.SkillValue>80%</S.SkillValue>
                  </S.SkillValueContainer>
                  <S.SkillBarContainer>
                    <S.SkillBarPercentage className="skill--80"></S.SkillBarPercentage>
                  </S.SkillBarContainer>

                </S.SkillsInfo>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ButtonBlock>
                  <ButtonOutline>Download CV</ButtonOutline>
                </ButtonBlock>
              </Grid>
            </Grid>
          </SectionContent>
        </SectionInner>
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ResumeQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`