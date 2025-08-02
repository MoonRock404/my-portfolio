/* 
 git add .
 git commit -m "Message"
 git push
 npm run build
 npm run deploy
*/

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

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

const SectionWrapper = styled.section`
  min-height: 100vh;
  padding: 80px 10%;
  background-color: #f8f4ed; /* same as your body background */
  scroll-snap-align: start;
  scroll-behavior: smooth;
  transition: background-color 0.5s ease;
`;

const FadeSection = forwardRef(({ children, id }, ref) => (
  <motion.section
    id={id}
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}
    style={{
      minHeight: '100vh',
      padding: '80px 10%',
      backgroundColor: '#f8f4ed',
    }}
  >
    {children}
  </motion.section>
));



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

  width: 540px; 
  height: 135px;

  background: transparent;
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

const MainContent = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
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

const ShowcaseWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f8f4ed;
`;

const StickyTitlePanel = styled.div`
  width: 35%;
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: #f8f4ed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Georgia', serif;
  font-size: 2rem;
  padding: 2rem;
  color: #3b2f2f;
  text-align: center;
  border-right: 2px dashed #d7c6b4;
`;

const ScrollableContentPanel = styled.div`
  width: 65%;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
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
            <Button
              style={{ top: '45px', left: '18%' }}
              onClick={() => document.getElementById('experience-subsection')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <Button
              style={{ top: '265px', left: '18%' }}
              onClick={() => document.getElementById('projects-subsection')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <Button
              style={{ top: '490px', left: '18%' }}
              onClick={() => document.getElementById('certifications-subsection')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </ButtonContainer>
        </RightPanel>
      </Section>

      <CombinedShowcase />
    </>
  );
}

function CombinedShowcase() {
  const [currentSection, setCurrentSection] = useState('📖 My Chronicle of Experience');

  const [expRef, inViewExp] = useInView({ threshold: 0.5 });
  const [projRef, inViewProj] = useInView({ threshold: 0.5 });
  const [certRef, inViewCert] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewExp) setCurrentSection('📖 My Chronicle of Experience');
    else if (inViewProj) setCurrentSection('🧪 Projects');
    else if (inViewCert) setCurrentSection('🎖️ My Certifications');
  }, [inViewExp, inViewProj, inViewCert]);

  return (
    <ShowcaseWrapper>
      <StickyTitlePanel>{currentSection}</StickyTitlePanel>
      <ScrollableContentPanel>
        <FadeSection id="experience-subsection" ref={expRef}>
          <ExperienceSection>
            <Timeline>
              <Entry>
                <h3>ThinkNeuro - Summer Research Intern <span>| Remote</span></h3>
                <p><strong>June 2025 – August 2025</strong></p>
                <ul>
                  <li>Utilized R and the Bibliometrix package to conduct bibliometric analysis on neuroscience literature...</li>
                  <li>Gained hands-on experience navigating the Web of Science database...</li>
                  <li>Collaborated with a research team to develop a publishable abstract...</li>
                </ul>
              </Entry>
              <Entry>
                <h3>Brighton Collectables - Sales Partner <span>| California, CA</span></h3>
                <p><strong>August 2023 – July 2024</strong></p>
                <ul>
                  <li>Operated point-of-sale systems, supported team collaboration...</li>
                  <li>Managed and analyzed sales data using Excel functions and visualizations...</li>
                </ul>
              </Entry>
            </Timeline>
          </ExperienceSection>
        </FadeSection>

        <FadeSection id="projects-subsection" ref={projRef}>
          <ProjectsSection>
            <ProjectGrid>
              <ProjectCard>
                <h3>PrairieLearn Chrome Extension <span>| Women in Computer Science, UIUC</span></h3>
                <ul>
                  <li>Developed a Chrome extension in JavaScript...</li>
                  <li>Applied modular design and DOM manipulation techniques...</li>
                  <li>Placed 3rd out of 12 teams...</li>
                  <li><strong>Utilized:</strong> JavaScript, Chrome Extensions API, etc.</li>
                </ul>
              </ProjectCard>
              <ProjectCard>
                <h3>High School Dropout Rates <span>| Data Science Club, UIUC</span></h3>
                <ul>
                  <li>Engineered a clean, balanced dataset...</li>
                  <li>Tuned and evaluated a DecisionTreeClassifier...</li>
                  <li><strong>Utilized:</strong> Python, pandas, scikit-learn</li>
                </ul>
              </ProjectCard>
              <ProjectCard>
                <h3>Sell My Dry Shampoo <span>| Dublin High School, CA</span></h3>
                <ul>
                  <li>Scraped and exported user reviews using Jsoup...</li>
                  <li>Developed a recommendation system...</li>
                  <li><strong>Utilized:</strong> Java, Jsoup</li>
                </ul>
              </ProjectCard>
            </ProjectGrid>
          </ProjectsSection>
        </FadeSection>

        <FadeSection id="certifications-subsection" ref={certRef}>
          <CertificationsSection>
            <FancyCertGrid>
              <CertCard>
                <h3>📜 ISC² Certified in Cybersecurity</h3>
                <p>A foundational credential demonstrating knowledge in key cybersecurity principles.</p>
              </CertCard>
              <CertCard>
                <h3>💻 Google IT Support Professional Certificate</h3>
                <p>Industry-recognized certificate covering troubleshooting, networking, and security.</p>
              </CertCard>
            </FancyCertGrid>
          </CertificationsSection>
        </FadeSection>
      </ScrollableContentPanel>
    </ShowcaseWrapper>
  );
}

export default Home;
