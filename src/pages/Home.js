/* 
 git add .
 git commit -m "Message"
 git push
 npm run build
 npm run deploy
*/

import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: serif;
  background-color: #f8f4ed;
  color: #3b2f2f;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SectionWrapper = styled.div`
  background-image: url("${process.env.PUBLIC_URL}/assets/vintage-page.png");
  background-size: cover;
  background-position: center;
  background-repeat: repeat; /* Or no-repeat if you want it fixed per section */
  padding: 4rem 2rem;
  margin: 0;
  border-top: 2px solid #d7c6b4;
`;

const LeftPanel = styled.div`
  width: 100%;
  padding: 2rem;
  background-image: url("${process.env.PUBLIC_URL}/assets/vintage-page.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const RightPanel = styled.div`
  width: 100%;
  padding: 1.5rem;
  background-image: url("${process.env.PUBLIC_URL}/assets/cozy-bookshelf.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  background: rgba(165, 117, 80, 0.2);
  border: none;
  cursor: pointer;
  width: 440px;
  height: 105px;
  transition: transform 0.2s;
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
    background: rgba(165, 117, 80, 0.3);
  }
`;

const AboutText = styled.div`
  background-color: rgba(255, 248, 240, 0.8);
  padding: 2rem;
  max-width: 85%;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(120, 80, 50, 0.15);
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    font-family: 'Georgia', serif;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  }
`;

const ExperienceSection = styled.section`
  padding: 2rem 0;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  border-left: 3px solid #a57450;
`;

const Entry = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 1rem;

  &::before {
    content: '';
    position: absolute;
    left: -12px;
    top: 10px;
    width: 12px;
    height: 12px;
    background-color: #a57450;
    border-radius: 50%;
    border: 2px solid #fff;
  }
`;


const Year = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #3b2f2f;
  margin-bottom: 0.25rem;
`;

const Role = styled.p`
  font-style: italic;
  font-weight: 600;
  color: #5e4630;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #4a3a2c;
`;

const ProjectsSection = styled.section`
  padding: 2rem 0;
`;

const ProjectGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProjectCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  max-width: 300px;
  min-width: 260px;
`;

const CertificationsSection = styled.section`
  padding: 2rem 0;
`;

const CertList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CertItem = styled.li`
  padding: 0.5rem 0;
  font-size: 1.1rem;
`;


function Home() {
  return (
    <>
      <Section>
        <LeftPanel>
          <AboutText>
            <h1>Hello, I'm Chandini!</h1>
            <p>
              I'm a student at the University of Illinois at Urbana-Champaign majoring in 
              Computer Science and Anthropology passionate about cybersecurity and software engineering. 
              This is my portfolio, built with love and a little creativity. Click on the buttons to the
              right to explore more!
            </p>
          </AboutText>
        </LeftPanel>

        <RightPanel>
          <ButtonContainer>
            <Button style={{ top: '73px', left: '17%' }} onClick={() => {
              const el = document.getElementById('experience');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}></Button>

            <Button style={{ top: '267px', left: '17%' }} onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} />

            <Button style={{ top: '462px', left: '17%' }} onClick={() => {
              const el = document.getElementById('certifications');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} />
          </ButtonContainer>
        </RightPanel>
      </Section>
      <Experience />
      <Projects />
      <Certifications />
    </>
  );
}

function Experience() {
  return (
    <SectionWrapper id="experience">
      <ExperienceSection id="experience">
        <h2 style={{ textAlign: 'center' }}>📖 My Chronicle of Experience</h2>
        <Timeline>
          <Entry>
            <Year>2024</Year>
            <Role>Internship</Role>
            <Description>Worked on network logs and vulnerability assessments.</Description>
          </Entry>
          <Entry>
            <Year>2023</Year>
            <Role>Sales Partner @ Brighton Collectibles</Role>
            <Description>Sales and customer engagement role.</Description>
          </Entry>
        </Timeline>
      </ExperienceSection>
    </SectionWrapper>
  );
}

function Projects() {
  return (
    <SectionWrapper id="projects">
      <ProjectsSection id="projects">
        <h2 style={{ textAlign: 'center' }}>🧪 Projects</h2>
        <ProjectGrid>
          <ProjectCard>
            <h3>PrairieLearn Extension</h3>
            <p>Chrome extension to organize and sort PL content.</p>
          </ProjectCard>
          <ProjectCard>
            <h3>Ad Sentiment Analyzer</h3>
            <p>Python NLP pipeline for targeted ad feedback.</p>
          </ProjectCard>
          <ProjectCard>
            <h3>Dropout Predictor</h3>
            <p>Used decision trees to analyze dropout rates.</p>
          </ProjectCard>
        </ProjectGrid>
      </ProjectsSection>
    </SectionWrapper>
  );
}

function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <CertificationsSection id="certifications">
        <h2 style={{ textAlign: 'center' }}>🎖️ Certifications</h2>
        <CertList>
          <CertItem>ISC² Certified in Cybersecurity</CertItem>
          <CertItem>Google IT Support Professional Certificate</CertItem>
        </CertList>
      </CertificationsSection>
    </SectionWrapper>
  );
}

export default Home;
