import React from 'react';
import FadeInSection from '../smoothTransitions'; // Adjust the import path as necessary
import { 
  BackgroundContainer,
  AboutSection, 
  H2, 
  Paragraph, 
  Skills, 
  Icon,
  AboutContainer
} from './styled'; 

function About() {
  return (
    <>
      <BackgroundContainer />
      <AboutSection>
        <FadeInSection> {/* Wrap the entire content or individual sections */}
          <AboutContainer>
            <H2>About</H2>
            <FadeInSection> {/* Example: Wrapping individual paragraphs */}
              <Paragraph>
                I've recently completed my studies in Frontend Development at Noroff School of Technology and Technology in Norway, and I'm eager to apply what I've learned in a real-world setting. I'm skilled in HTML, CSS, JavaScript, and React and I'm always looking for opportunities to improve and expand my skills.
              </Paragraph>
            </FadeInSection>
            <FadeInSection>
              <Paragraph>
                I thrive on problem-solving and love the process of creating functional, user-friendly websites. I've worked on several projects during my studies. You can check them out in my 'Projects' section!
              </Paragraph>
            </FadeInSection>
            <FadeInSection>
              <Paragraph>
                When I'm not coding, you'll find me enjoying outdoor activities, or travelling. I'm a family person and the proud dad of a little girl.
              </Paragraph>
            </FadeInSection>
            <FadeInSection>
              <Paragraph>
                I'm interested in any work related to frontend development, especially opportunities that will allow me to grow and learn. If you think we could work well together, I'd love to hear from you!
              </Paragraph>
            </FadeInSection>

            <FadeInSection> {/* Wrapping the Skills section */}
              <Skills>
                <h2>Skills</h2>
                <div>
                  <Icon className="fa-brands fa-html5"></Icon>
                  <Icon className="fa-brands fa-css3-alt"></Icon>
                  <Icon className="fa-brands fa-js"></Icon>
                  <Icon className="fa-brands fa-react"></Icon>
                </div>
              </Skills>
            </FadeInSection>
          </AboutContainer>
        </FadeInSection>
      </AboutSection>
    </>
  );
}

export default About;

