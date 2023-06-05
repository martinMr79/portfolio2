import React from 'react';
import { AboutSection, AboutHr, H2, Paragraph, Skills, Icon } from './styled'; 

function About() {
  return (
    <div>
      <AboutHr id="about" />
      <AboutSection>
        <H2>About</H2>
        <Paragraph>
          I`m a front end development student at Noroff school of technology,
          located in Norway.
        </Paragraph>
        <Paragraph>
          Fan of outdoor activities. A family person, and dad to a little girl
        </Paragraph>
        <br />
        <Paragraph>
          I`m always eager to learn new skills, and am interested in any work
          related to frontend development. Hope we can work together!
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