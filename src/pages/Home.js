/* 
 git add .
 git commit -m "Message"
 git push
 npm run build
 npm run deploy
*/

import React, { useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const theme = {
  colors: {
    primary: '#f8f4ed',
    text: '#3b2f2f',
    accent: '#a57450',
    lightAccent: '#d7c6b4',
    cardBg: 'rgba(255, 248, 240, 0.95)',
    overlay: 'rgba(255, 248, 240, 0.8)'
  },
  fonts: {
    serif: "'Georgia', 'Times New Roman', serif",
    palatino: "'Palatino Linotype', 'Book Antiqua', Palatino, serif"
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1024px'
  }
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: ${theme.fonts.serif};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const FadeSection = forwardRef(({ children, id }, ref) => (
  <div ref={ref}>
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-10%' }}
      style={{
        minHeight: '100vh',
        padding: '60px 8%',
        backgroundColor: theme.colors.primary,
      }}
    >
      {children}
    </motion.section>
  </div>
));

FadeSection.displayName = 'FadeSection';

const LeftPanel = styled.div`
  width: 100%;
  padding: 2rem;
  background-image: url("${process.env.PUBLIC_URL}/assets/vintage-page.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(248, 244, 237, 0.1) 0%, rgba(255, 250, 240, 0.2) 100%);
    pointer-events: none;
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
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  position: relative;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(165, 117, 80, 0.1) 0%, rgba(139, 69, 19, 0.1) 100%);
    pointer-events: none;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 600px;
  z-index: 10;
`;

const NavigationButton = styled(motion.button)`
  position: absolute;
  width: min(450px, 80vw);
  height: 120px;
  background: ${theme.colors.overlay};
  border: 2px solid ${theme.colors.lightAccent};
  border-radius: 12px;
  cursor: pointer;
  font-family: ${theme.fonts.serif};
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  font-weight: 600;
  color: ${theme.colors.text};
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 15px rgba(80, 50, 30, 0.2);
  
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.02);
    background: ${theme.colors.cardBg};
    box-shadow: 0 8px 25px rgba(80, 50, 30, 0.3);
    border-color: ${theme.colors.accent};
  }  

  &:active {
    transform: translateY(-2px) scale(1.01);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: relative;
    width: 100%;
    margin: 1rem 0;
  }
`;

const AboutText = styled(motion.div)`
  background: ${theme.colors.overlay};
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  max-width: 90%;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(120, 80, 50, 0.2);
  text-align: center;
  border: 2px solid ${theme.colors.lightAccent};
  position: relative;
  z-index: 10;

  h1 {
    font-size: clamp(1.8rem, 4vw, 2.2rem);
    font-weight: bold;
    margin-bottom: 1.5rem;
    font-family: ${theme.fonts.serif};
    color: ${theme.colors.text};
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: clamp(1rem, 2.2vw, 1.1rem);
    line-height: 1.7;
    font-family: ${theme.fonts.palatino};
    color: ${theme.colors.text};
    margin: 0;
  }
`;

const ShowcaseWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${theme.colors.primary};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const StickyTitlePanel = styled.div`
  width: 100%;
  position: relative;
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.serif};
  font-size: clamp(1.5rem, 3vw, 2rem);
  padding: 2rem;
  color: ${theme.colors.text};
  text-align: center;
  border-right: 3px dashed ${theme.colors.lightAccent};
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 35%;
    position: sticky;
    top: 0;
    height: 100vh;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    border-right: none;
    border-bottom: 3px dashed ${theme.colors.lightAccent};
    height: auto;
    min-height: 120px;
  }
`;

const ScrollableContentPanel = styled.div`
  width: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 65%;
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.lightAccent};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.accent};
    border-radius: 4px;
  }
`;

const ContentSection = styled.section`
  padding: 3rem 2rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 4rem 3rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(145deg, rgba(248, 244, 237, 0.9), rgba(255, 250, 240, 0.95));
  box-shadow: 0 10px 30px rgba(80, 50, 30, 0.1);
  border: 2px solid ${theme.colors.lightAccent};
`;

const TimelineEntry = styled(motion.div)`
  background: ${theme.colors.cardBg};
  border: 2px solid ${theme.colors.lightAccent};
  padding: 2rem;
  margin: 2.5rem 0;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(80, 50, 30, 0.15);
  position: relative;
  font-family: ${theme.fonts.palatino};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(80, 50, 30, 0.25);
    border-color: ${theme.colors.accent};
  }

  &::before {
    content: '📜';
    position: absolute;
    left: -1.5rem;
    top: 1.5rem;
    font-size: 2rem;
    background: ${theme.colors.cardBg};
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${theme.colors.accent};
  }

  h3 {
    font-size: clamp(1.2rem, 2.5vw, 1.4rem);
    font-weight: bold;
    color: ${theme.colors.text};
    margin-bottom: 0.75rem;
    padding-left: 1rem;

    span {
      font-weight: normal;
      color: ${theme.colors.accent};
    }
  }

  p {
    font-size: 1.1rem;
    color: #5e4630;
    margin-bottom: 1rem;
    padding-left: 1rem;
  }

  ul {
    list-style: none;
    padding-left: 2rem;

    li {
      font-size: 1rem;
      margin-bottom: 0.75rem;
      color: #4a3a2c;
      line-height: 1.5;
      position: relative;

      &::before {
        content: '✦';
        color: ${theme.colors.accent};
        font-weight: bold;
        position: absolute;
        left: -1.5rem;
      }
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
  }
`;

const Card = styled(motion.div)`
  background: ${theme.colors.cardBg};
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(80, 50, 30, 0.12);
  border: 2px solid ${theme.colors.lightAccent};
  font-family: ${theme.fonts.serif};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(80, 50, 30, 0.2);
    border-color: ${theme.colors.accent};
  }

  h3 {
    font-size: clamp(1.1rem, 2.2vw, 1.25rem);
    margin-bottom: 1rem;
    font-weight: bold;
    color: ${theme.colors.text};
    border-bottom: 2px solid ${theme.colors.lightAccent};
    padding-bottom: 0.5rem;
    line-height: 1.3;

    span {
      font-size: 0.9em;
      color: ${theme.colors.accent};
      font-weight: normal;
    }
  }

  p, li {
    font-size: 1rem;
    line-height: 1.5;
    color: #5e4630;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;

    li {
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: '•';
        color: ${theme.colors.accent};
        font-weight: bold;
        position: absolute;
        left: 0;
      }
    }
  }
`;

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <Section>
        <LeftPanel>
          <AboutText
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1>Hello, I'm Chandini!</h1>
            <p>
              I'm a student at the University of Illinois at Urbana-Champaign majoring in 
              Computer Science and Anthropology, passionate about cybersecurity and software engineering. 
              This is my portfolio, built with love and creativity. Explore my journey below!
            </p>
          </AboutText>
        </LeftPanel>

        <RightPanel>
          <ButtonContainer>
            <NavigationButton
              style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}
              onClick={() => scrollToSection('experience-subsection')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              📖 Experience
            </NavigationButton>
            <NavigationButton
              style={{ top: '40%', left: '50%', transform: 'translateX(-50%)' }}
              onClick={() => scrollToSection('projects-subsection')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              🧪 Projects
            </NavigationButton>
            <NavigationButton
              style={{ top: '70%', left: '50%', transform: 'translateX(-50%)' }}
              onClick={() => scrollToSection('certifications-subsection')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              🎖️ Certifications
            </NavigationButton>
          </ButtonContainer>
        </RightPanel>
      </Section>

      <CombinedShowcase />
    </>
  );
}

function CombinedShowcase() {
  const [currentSection, setCurrentSection] = useState('📖 My Chronicle of Experience');

  const { ref: expRef, inView: inViewExp } = useInView({ threshold: 0.3 });
  const { ref: projRef, inView: inViewProj } = useInView({ threshold: 0.3 });
  const { ref: certRef, inView: inViewCert } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inViewExp) setCurrentSection('📖 My Chronicle of Experience');
    else if (inViewProj) setCurrentSection('🧪 Projects Showcase');
    else if (inViewCert) setCurrentSection('🎖️ My Certifications');
  }, [inViewExp, inViewProj, inViewCert]);

  return (
    <ShowcaseWrapper>
      <StickyTitlePanel>
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {currentSection}
        </motion.div>
      </StickyTitlePanel>
      
      <ScrollableContentPanel>
        <FadeSection id="experience-subsection" ref={expRef}>
          <ContentSection>
            <Timeline>
              <TimelineEntry
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>ThinkNeuro - Summer Research Intern <span>| Remote</span></h3>
                <p><strong>June 2025 – August 2025</strong></p>
                <ul>
                  <li>Utilized R and the Bibliometrix package to conduct comprehensive bibliometric analysis on neuroscience literature</li>
                  <li>Gained hands-on experience navigating the Web of Science database for academic research</li>
                  <li>Collaborated with research team to develop publishable abstracts and research findings</li>
                </ul>
              </TimelineEntry>
              
              <TimelineEntry
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3>Brighton Collectables - Sales Partner <span>| California, CA</span></h3>
                <p><strong>August 2023 – July 2024</strong></p>
                <ul>
                  <li>Operated point-of-sale systems and supported seamless team collaboration</li>
                  <li>Managed and analyzed sales data using advanced Excel functions and visualizations</li>
                  <li>Provided exceptional customer service and product recommendations</li>
                </ul>
              </TimelineEntry>
            </Timeline>
          </ContentSection>
        </FadeSection>

        <FadeSection id="projects-subsection" ref={projRef}>
          <ContentSection>
            <GridContainer>
              <Card
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3>PrairieLearn Chrome Extension <span>| Women in Computer Science, UIUC</span></h3>
                <ul>
                  <li>Developed a Chrome extension in JavaScript to enhance learning platform functionality</li>
                  <li>Applied modular design principles and DOM manipulation techniques</li>
                  <li>Placed 3rd out of 12 teams in competitive development challenge</li>
                  <li><strong>Tech Stack:</strong> JavaScript, Chrome Extensions API, HTML/CSS</li>
                </ul>
              </Card>
              
              <Card
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3>High School Dropout Analysis <span>| Data Science Club, UIUC</span></h3>
                <ul>
                  <li>Engineered clean, balanced dataset from raw educational statistics</li>
                  <li>Tuned and evaluated DecisionTreeClassifier for predictive modeling</li>
                  <li>Achieved 85% accuracy in identifying at-risk student populations</li>
                  <li><strong>Tech Stack:</strong> Python, pandas, scikit-learn, matplotlib</li>
                </ul>
              </Card>
              
              <Card
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3>Sell My Dry Shampoo <span>| Dublin High School, CA</span></h3>
                <ul>
                  <li>Scraped and processed user reviews using Jsoup for market analysis</li>
                  <li>Developed intelligent recommendation system for beauty products</li>
                  <li>Implemented sentiment analysis to gauge customer satisfaction</li>
                  <li><strong>Tech Stack:</strong> Java, Jsoup, JSON processing</li>
                </ul>
              </Card>
            </GridContainer>
          </ContentSection>
        </FadeSection>

        <FadeSection id="certifications-subsection" ref={certRef}>
          <ContentSection>
            <GridContainer>
              <Card
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3>📜 ISC² Certified in Cybersecurity</h3>
                <p>A foundational credential demonstrating comprehensive knowledge in cybersecurity principles, risk management, and security best practices.</p>
              </Card>
              
              <Card
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3>💻 Google IT Support Professional Certificate</h3>
                <p>Industry-recognized certification covering advanced troubleshooting, networking fundamentals, system administration, and security protocols.</p>
              </Card>
            </GridContainer>
          </ContentSection>
        </FadeSection>
      </ScrollableContentPanel>
    </ShowcaseWrapper>
  );
}

export default Home;