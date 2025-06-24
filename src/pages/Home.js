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
  position: relative;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  background: rgba(165, 117, 80, 0.2); /* light brown tint with transparency */
  border: none;
  cursor: pointer;
  width: 140px;        /* wider button */
  height: 120px;       /* adjust height as needed */
  transition: transform 0.2s;
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
    background: rgba(165, 117, 80, 0.3); /* slightly darker on hover */
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
          <Button style={{ top: '60px', left: '20%' }} onClick={() => console.log('Projects')}></Button>
          <Button style={{ top: '220px', left: '20%' }} onClick={() => console.log('Experience')} />
          <Button style={{ top: '380px', left: '20%' }} onClick={() => console.log('Certifications')} />
          <Button style={{ top: '540px', left: '20%' }} onClick={() => console.log('Skills')} />
        </ButtonContainer>
      </RightPanel>
    </Section>
  );
}

export default Home;