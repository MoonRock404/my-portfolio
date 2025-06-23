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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  padding: 2rem;
  height: 100%;
`;

const Button = styled.button`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  padding: 1.5rem 0.5rem;
  background-color: ${(props) => props.bg || '#8b5e3c'};
  color: white;
  border: none;
  font-size: 1.2rem;
  font-family: 'Georgia', serif;
  font-weight: bold;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s;

  &:hover {
    transform: rotate(180deg) scale(1.05);
    background-color: #5a3e2b;
  }
`;


function Home() {
  return (
    <Section>
      {/* Left - Book */}
      <LeftPanel>
        <CenteredImageContainer>
          <BookImage
            src={`${process.env.PUBLIC_URL}/assets/open-book.png`}
            alt="Open Book"
          />
        </CenteredImageContainer>
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
          <Button bg="#a0522d">📘 Projects</Button>
          <Button bg="#8b5e3c">📕 Experience</Button>
          <Button bg="#7b4b2a">📗 Certifications</Button>
          <Button bg="#6b3e21">📙 Skills</Button>
        </ButtonContainer>
      </RightPanel>
    </Section>
  );
}

export default Home;