/* 
git add .
git commit -m "Message"
git push
npm run build
npm run deploy
*/

import styled from 'styled-components';
import bookImage from '/Users/chandinichennakesavan/Projects/my-portfolio/public/assets';

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
  background-color: #ede3d0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const BookImage = styled.img`
  width: 100%;
  max-width: 500px;
`;

const BookTextLeft = styled.div`
  position: absolute;
  top: 4rem;
  left: 3rem;
  width: 45%;
`;

const BookTextRight = styled.div`
  position: absolute;
  top: 4rem;
  right: 3rem;
  width: 45%;
`;

const RightPanel = styled.div`
  width: 100%;
  padding: 1.5rem;
  background-color: #fffefc;
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

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 0.75rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: ${(props) => props.bg};

  &:hover {
    transform: scale(1.05);
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Home() {
  return (
    <Section>
      {/* Left - Book */}
      <LeftPanel>
        <img src={`${process.env.PUBLIC_URL}/assets/open-book.png`} alt="Open Book" />
        <BookTextLeft>
          <h1 style={{ fontSize: '1.875rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            Hello, I'm Chandini
          </h1>
        </BookTextLeft>
        <BookTextRight>
          <p>
            A student exploring cybersecurity and software engineering, with a
            love for creativity.
          </p>
        </BookTextRight>
      </LeftPanel>

      {/* Right - Shelf */}
      <RightPanel>
        <ShelfHeader>📚 Select a Shelf</ShelfHeader>
        <ButtonContainer>
          <Button bg="#c9a97e">🧪 Projects</Button>
          <Button bg="#b08f6c">🛠️ Experience</Button>
          <Button bg="#a0816a">🎖️ Certifications</Button>
        </ButtonContainer>
      </RightPanel>
    </Section>
  );
}

export default Home;
