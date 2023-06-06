import React from 'react';
import { AboutSection, 
   H2, Paragraph, Skills, Icon } from './styled'; 

function About() {
  return (
    <div>
      <AboutSection>
      <H2>About</H2>
      <Paragraph>
        I've recently completed my studies in Frontend Development at Noroff School of Technology in Norway, and I'm eager to apply what I've learned in a real-world setting. I'm skilled in HTML, CSS, JavaScript, and React and I'm always looking for opportunities to improve and expand my skills.
      </Paragraph>
      <br/>
      <Paragraph>
        I thrive on problem-solving and love the process of creating functional, user-friendly websites. I've worked on several projects during my studies, including [project name], a [brief description of the project]. You can check it out in my 'Projects' section!
      </Paragraph>
      <br/>
      <Paragraph>
        When I'm not coding, you'll find me enjoying outdoor activities, or travelling. I'm a family person and the proud dad of a little girl.
      </Paragraph>
      <br/>
      <Paragraph>
        I'm interested in any work related to frontend development, especially opportunities that will allow me to grow and learn. If you think we could work well together, I'd love to hear from you!
      </Paragraph>


        <Skills>
          <Icon className="fa-brands fa-html5"></Icon>
          <Icon className="fa-brands fa-css3-alt"></Icon>
          <Icon className="fa-brands fa-js"></Icon>
          <Icon className="fa-brands fa-wordpress"></Icon>
        </Skills>
      </AboutSection>
    </div>
  );
}

export default About;