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

const CenteredImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BookImage = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
`;

const BookTextLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
  width: 45%;
`;

const BookTextRight = styled.div`
  position: absolute;
  top: 50%;
  right: 3rem;
  transform: translateY(-50%);
  width: 45%;
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


const ShelfHeader = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  background: rgba(165, 117, 80, 0.2); /* light brown tint with transparency */
  border: none;
  cursor: pointer;
  width: 440px;        /* wider button */
  height: 105px;       /* adjust height as needed */
  transition: transform 0.2s;
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
    background: rgba(165, 117, 80, 0.3); /* slightly darker on hover */
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
  background-image: url("${process.env.PUBLIC_URL}/assets/vintage-page.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 4rem 2rem;
  font-family: 'Georgia', serif;
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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    bottom: 0;
    width: 5px;
    background: linear-gradient(to bottom, #d9b899 0%, transparent 100%);
  }
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

function Home() {
  return (
    <>
      <Section>
        {/* Left - Book */}
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

        {/* Right - Shelf */}
        <RightPanel>
          <ButtonContainer>
            <Button style={{ top: '73px', left: '17%' }} onClick={() => {
              const el = document.getElementById('experience');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}></Button>

            <Button style={{ top: '267px', left: '17%' }} onClick={() => console.log('Experience')} />
            <Button style={{ top: '462px', left: '17%' }} onClick={() => console.log('Certifications')} />
          </ButtonContainer>
        </RightPanel>
      </Section>
      <Experience />
    </>
  );
}


function Experience() {
  return (
    <ExperienceSection id="experience">
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
        📖 My Chronicle of Experience
      </h2>

      <Timeline>
        <Entry>
          <Year>2024</Year>
          <Role>Examples</Role>
          <Description>
            Built threat monitoring scripts, analyzed network logs, and contributed to vulnerability assessments.
          </Description>
        </Entry>

        <Entry>
          <Year>2023</Year>
          <Role> Sales Partner @ Brighton Collectibles</Role>
          <Description>
            Sales stuff!
          </Description>
        </Entry>
      </Timeline>
    </ExperienceSection>
  );
}

export default Home;
