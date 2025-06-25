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



function Home() {
  return (
    <Section>
      {/* Left - Book */}
      <LeftPanel>
        <AboutText>
          <h1>Hello, I'm Chandini!</h1>
          <p>
            I'm a student at the University of Illinois at Urbana Champaign majoring in 
            Computer Science and Anthropology passionate about cybersecurity and software engineering. 
            This space is my creative portfolio—built with love and a little magic.
          </p>
        </AboutText>
      </LeftPanel>

      {/* Right - Shelf */}
      <RightPanel>
        <ButtonContainer>
          <Button style={{ top: '73px', left: '17%' }} onClick={() => console.log('Projects')}></Button>
          <Button style={{ top: '267px', left: '17%' }} onClick={() => console.log('Experience')} />
          <Button style={{ top: '462px', left: '17%' }} onClick={() => console.log('Certifications')} />
        </ButtonContainer>
      </RightPanel>
    </Section>
  );
}

export default Home;