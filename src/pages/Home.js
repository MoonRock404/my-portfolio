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
  height: 700px; /* or whatever height fits all buttons */
`;

const Button = styled.button`
  position: absolute;

  width: 700px; 
  height: 130px;

  background: rgba(165, 117, 80, 0.2);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;

  font-family: 'Georgia', serif;
  font-size: 1.4rem;
  color: #4a3a2c;

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
  padding-left: 3rem;
  border-left: 5px dashed #a57450;
  background: linear-gradient(180deg, rgba(248, 244, 237, 0.8), rgba(255, 250, 240, 0.9));
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
`;

const Entry = styled.div`
  background: rgba(255, 248, 240, 0.9);
  border-left: 6px solid #a57450;
  border-right: 6px solid #a57450;
  padding: 1.5rem 2rem;
  margin: 2rem 0;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(80, 50, 30, 0.15);
  position: relative;
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px) rotate(-0.5deg);
    box-shadow: 0 12px 30px rgba(80, 50, 30, 0.25);
  }

  &::before {
    content: '📜';
    position: absolute;
    left: -2.5rem;
    top: 1rem;
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #3b2f2f;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #5e4630;
    margin-bottom: 0.75rem;
  }

  ul {
    list-style: none;
    padding-left: 1rem;

    li::before {
      content: '✦ ';
      color: #a57450;
      font-weight: bold;
      margin-right: 0.5rem;
    }

    li {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: #4a3a2c;
    }
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
  padding: 4rem 2rem;
  background-color: #f8f4ed;
  border-top: 2px solid #d7c6b4;
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background: rgba(255, 248, 240, 0.95); /* parchment tone */
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 6px 6px 15px rgba(80, 50, 30, 0.1);
  max-width: 300px;
  min-width: 260px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid #d7c6b4;
  font-family: 'Georgia', serif;

  &:hover {
    transform: translateY(-8px) rotate(-0.5deg);
    box-shadow: 10px 10px 25px rgba(80, 50, 30, 0.2);
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #4a3a2c;
    border-bottom: 2px solid #e4d2ba;
    padding-bottom: 0.25rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
    color: #5e4630;
    margin: 0;
  }
`;


const CertificationsSection = styled.section`
  padding: 2rem 0;
`;

const FancyCertGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const CertCard = styled.div`
  background: rgba(255, 248, 240, 0.95);
  border: 2px solid #d7c6b4;
  border-radius: 16px;
  box-shadow: 6px 6px 15px rgba(80, 50, 30, 0.1);
  max-width: 320px;
  min-width: 260px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Georgia', serif;

  &:hover {
    transform: translateY(-6px) rotate(-0.5deg);
    box-shadow: 10px 10px 25px rgba(80, 50, 30, 0.2);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #4a3a2c;
    font-weight: bold;
    border-bottom: 2px dashed #e4d2ba;
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #5e4630;
    line-height: 1.5;
    margin-top: 0.75rem;
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
              I'm a student at the University of Illinois at Urbana-Champaign majoring in 
              Computer Science and Anthropology passionate about cybersecurity and software engineering. 
              This is my portfolio, built with love and a little creativity. Click on the buttons to the
              right to explore more!
            </p>
          </AboutText>
        </LeftPanel>

        <RightPanel>
          <ButtonContainer>
            <Button style={{ top: '50px', left: '17%' }} onClick={() => console.log('Projects')} />
            <Button style={{ top: '265px', left: '17%' }} onClick={() => console.log('Experience')} />
            <Button style={{ top: '490px', left: '17%' }} onClick={() => console.log('Certifications')} />
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
            <h3>ThinkNeuro - Summer Research Intern <span>| Remote</span></h3>
            <p><strong>June 2025 – August 2025</strong></p>
            <ul>
              <li>Utilized R and the Bibliometrix package to conduct bibliometric analysis on neuroscience literature, identifying influential research trends and key contributors in the field of brain-computer interfaces and neuroprosthetics</li>
              <li>Gained hands-on experience navigating the Web of Science database to collect, clean, and analyze citation data for research synthesis and visualization</li>
              <li>Collaborated with a research team to develop a publishable abstract and e-poster, presenting data-driven findings at a virtual neuroscience symposium</li>
            </ul>
          </Entry>
          <Entry>
              <h3>Brighton Collectables - Sales Partner <span>| California, CA</span></h3>
              <p><strong>August 2023 – July 2024</strong></p>
              <ul>
                <li>Operated point-of-sale (POS) systems to efficiently process transactions, support team collaboration, drive sales performance, and uphold visual merchandising standards</li>
                <li>Managed and analyzed sales data using Excel functions and visualizations to identify trends, track performance, and generate actionable reports for strategic decision-making</li>
              </ul>
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
            <h3>PrairieLearn Chrome Extension <span>| Women in Computer Science, UIUC</span></h3>
            <ul>
              <li>Developed a Chrome extension in JavaScript that dynamically scraped and sorted PrairieLearn assignments by due date across courses using <code>fetch</code>, <code>DOMParser</code>, and asynchronous logic</li>
              <li>Applied modular design and DOM manipulation techniques to build a maintainable, user‑focused UI enhancement for the platform</li>
              <li>Placed 3rd out of 12 teams in a club showcase; received faculty and CEO feedback, resulting in an official feature request submitted to PrairieLearn’s open‑source GitHub repository</li>
              <li><strong>Utilized:</strong> JavaScript, Chrome Extensions API (MV3, Content Scripts, Action API), Fetch API, DOMParser, Git/GitHub</li>
            </ul>
          </ProjectCard>

          <ProjectCard>
            <h3>High School Dropout Rates <span>| Data Science Club, UIUC</span></h3>
            <ul>
              <li>Engineered a clean, balanced dataset by encoding categorical variables, imputing missing values, and applying SMOTE to address class imbalance, enabling reliable decision‑tree training</li>
              <li>Tuned and evaluated a <code>DecisionTreeClassifier</code> using cross‑validation and classification metrics; incorporated industry feedback to refine feature engineering, boosting model accuracy by 15%</li>
              <li><strong>Utilized:</strong> Python, pandas, Matplotlib, scikit‑learn</li>
            </ul>
          </ProjectCard>

          <ProjectCard>
            <h3>Sell My Dry Shampoo <span>| Dublin High School, CA</span></h3>
            <ul>
              <li>Scraped and exported user reviews using Jsoup, then applied automated keyword filtering for sentiment analysis and pattern identification to support ad‑targeting systems</li>
              <li>Developed a recommendation system leveraging user feedback and keyword analysis, increasing ad relevance by 85 % through personalized content aligned with customer preferences</li>
              <li><strong>Utilized:</strong> Java, Jsoup</li>
            </ul>
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
        <h2 style={{ textAlign: 'center' }}>🎖️ My Collection of Certifications</h2>
        <FancyCertGrid>
          <CertCard>
            <h3>📜 ISC² Certified in Cybersecurity</h3>
            <p>A foundational credential demonstrating knowledge in key cybersecurity principles, awarded by (ISC)².</p>
          </CertCard>
          <CertCard>
            <h3>💻 Google IT Support Professional Certificate</h3>
            <p>Industry-recognized certificate covering troubleshooting, customer service, networking, system administration, and security.</p>
          </CertCard>
        </FancyCertGrid>
      </CertificationsSection>
    </SectionWrapper>
  );
}


export default Home;
