import React, { useEffect } from 'react'; // Import useContext and useEffect
import FadeInSection from '../smoothTransitions'; // Adjust the import path as necessary
import {
  BackgroundContainer,
  AboutSection,
  H2,
  Paragraph,
  Skills,
  AboutContainer,
} from './styled';
import { useInView } from 'react-intersection-observer';
import { useNavigation } from '../../NavigationContext'; // Ensure the correct path

function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const { setActiveSection } = useNavigation();

  useEffect(() => {
    if (inView) {
      setActiveSection('about');
    }
  }, [inView, setActiveSection]);;


  return (
    <>
      <BackgroundContainer />
      <AboutSection ref={ref}>
        <FadeInSection> 
          <AboutContainer>
            <H2>About</H2>
            <FadeInSection> 
              <Paragraph>
                I've recently completed my studies in Frontend Development at Noroff School of Technology in Norway, and I'm eager to apply what I've learned in a real-world setting. I'm skilled in HTML, CSS, JavaScript, and React and I'm always looking for opportunities to improve and expand my skills.
              </Paragraph>
            </FadeInSection>
            <FadeInSection>
              <Paragraph>
                I thrive on problem-solving and love the process of creating functional, user-friendly websites. I've worked on several projects. You can check them out in my 'Projects' section!
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

            <FadeInSection> 
            <h2>Skills</h2>
              <Skills>
                
                <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML Badge" />
                <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />
                <img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind%20css&logoColor=white" alt="Tailwind CSS Badge" />
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Badge" />
                <img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" alt="JSON Badge"/>
                <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="MUI Badge"/>
                <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" />
                <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="GIT Badge"/>
                <img src="https://img.shields.io/badge/powershell-5391FE?style=for-the-badge&logo=powershell&logoColor=white" alt="Powershell Badge"/>
                <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="Visual Studio Code Badge" />
                <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" alt="MARKDOWN Badge" />
                <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM Badge" />
                <img src="https://img.shields.io/badge/API-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="API Badge"/>
                <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS Badge"/>
                <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="JEST" />
                <img src="https://img.shields.io/badge/headless cms-21759B?style=for-the-badge&logo=wordpress&logoColor=white" alt="headless cms Badge" />
              
              </Skills>
            </FadeInSection>
          </AboutContainer>
        </FadeInSection>
      </AboutSection>
    </>
  );
}

export default About;

