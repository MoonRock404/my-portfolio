/* 
git add .
git commit -m "Message"
git push
npm run build
npm run deploy
*/

import styled from 'styled-components';
import React from 'react';

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
`;

const ExperienceSection = styled.section`
  background-image: url("${process.env.PUBLIC_URL}/assets/vintage-page.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 4rem 2rem;
  color: #3b2f2f;
  border: 4px solid #bfae9c;
  box-shadow: inset 0 0 30px rgba(0,0,0,0.1);
  margin-top: 2rem;
  border-radius: 1rem;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  border-left: 3px dashed #a08c72;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Entry = styled.div`
  position: relative;

  &::before {
    content: '📍';
    position: absolute;
    left: -2rem;
    top: 0;
    font-size: 1.5rem;
  }
`;

const Year = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: #6b4e2e;
`;

const Role = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.95rem;
`;

const ProjectsSection = styled.section`
  background-image: url("${process.env.PUBLIC_URL}/assets/parchment-dark.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 4rem 2rem;
  border: 4px solid #d0c1a1;
  border-radius: 1rem;
  margin-top: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(100, 70, 50, 0.1);
`;

const CertificationsSection = styled.section`
  background-image: url("${process.env.PUBLIC_URL}/assets/parchment-dark.png");
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  border-radius: 1rem;
  border: 4px double #cbb89d;
  margin-top: 2rem;
`;

const CertList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
`;

const CertItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #b49c82;
  font-size: 1.05rem;

  &:before {
    content: '🎖️ ';
  }
`;

function Home() {
  return (
    <>
      <Section>
        <LeftPanel>
          <AboutText>
            <h1>Hello, I'm Chandini!</h1>
            <p>
              I'm a student at UIUC majoring in Computer Science + Anthropology, passionate about cybersecurity and software engineering.
            </p>
          </AboutText>
        </LeftPanel>
        <RightPanel>
          <ButtonContainer>
            <Button style={{ top: '73px', left: '17%' }} onClick={() => {
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            }} />
            <Button style={{ top: '267px', left: '17%' }} onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }} />
            <Button style={{ top: '462px', left: '17%' }} onClick={() => {
              document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
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
    <ExperienceSection id="experience">
      <h2 style={{ textAlign: 'center' }}>📖 My Chronicle of Experience</h2>
      <Timeline>
        <Entry>
          <Year>2024</Year>
          <Role>Cybersecurity Intern @ SecureNet</Role>
          <Description>Worked on network logs and vulnerability assessments.</Description>
        </Entry>
        <Entry>
          <Year>2023</Year>
          <Role>Sales Partner @ Brighton Collectibles</Role>
          <Description>Sales and customer engagement role.</Description>
        </Entry>
      </Timeline>
    </ExperienceSection>
  );
}

function Projects() {
  return (
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
  );
}

function Certifications() {
  return (
    <CertificationsSection id="certifications">
      <h2 style={{ textAlign: 'center' }}>🎖️ Certifications</h2>
      <CertList>
        <CertItem>ISC² Certified in Cybersecurity</CertItem>
        <CertItem>Google IT Support Professional Certificate</CertItem>
      </CertList>
    </CertificationsSection>
  );
}

export default Home;
