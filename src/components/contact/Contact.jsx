import React, { useState, useEffect } from 'react'; 
import { useInView } from 'react-intersection-observer';
import { FlagIcon, LanguageCheckboxWrapper, LanguageSelectionWrapper, ContactLink, ContactSection, ContactList, PageWrapper, InnerWrapper, H2, CVButton } from './Styled';
import Checkbox from '@mui/material/Checkbox';
import FadeInSection from '../smoothTransitions';

const EnglishFlagIcon = () => <FlagIcon src="/FlagIcons/Flag_of_the_United_Kingdom_(3-5).svg" alt="English flag" />;
const NorwegianFlagIcon = () => <FlagIcon src="/FlagIcons/Flag_of_Norway_(c8102e_for_red_&_00205b_for_blue).svg" alt="Norwegian flag" />;


const LanguageCheckbox = ({ language, Icon, selectedLanguage, onLanguageChange }) => (
  <LanguageCheckboxWrapper isSelected={selectedLanguage === language} onClick={() => onLanguageChange(language)}>
    <Checkbox
      checked={selectedLanguage === language}
      readOnly 
      icon={<Icon />}
      checkedIcon={<Icon />}
    />
    <span style={{ marginLeft: '8px' }}>{language}</span>
  </LanguageCheckboxWrapper>
);

const ContactForm = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const { ref, inView } = useInView({
    threshold: 0.1, 
  });
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  useEffect(() => {
    if (inView) {
      console.log('Contact section is in view');
    }
  }, [inView]);


  const handleDownloadCV = () => {
    const cvFile = selectedLanguage === 'English' ? '/CV/CV-Martin-Mroz-English.pdf' : '/CV/CV-Martin-Mroz.pdf';
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = `Martin_Mroz_CV_${selectedLanguage}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  

  return (
    <PageWrapper>
      <InnerWrapper>
        <FadeInSection> 
          <ContactSection>
            <H2>Reach me on:</H2>
            <FadeInSection ref={ref}> 
              <ContactList>
                <li><ContactLink href="mailto:mamr@hotmal.no" title="e-mail" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></ContactLink></li>
                <li><ContactLink href="tel:004790285550" title="phone" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone"></i></ContactLink></li>
                <li><ContactLink href="https://no.linkedin.com/in/martin-mroz-28008121a?original_referer=https%3A%2F%2Fwww.google.com%2F" title="linkedin" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></ContactLink></li>
                <li><ContactLink id="profile-link" href="https://github.com/martinMr79" title="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></ContactLink></li>
              </ContactList>
            </FadeInSection>
            <H2>Download my CV</H2>
            <FadeInSection> 
              <LanguageSelectionWrapper>
                <LanguageCheckbox
                  language="English"
                  Icon={EnglishFlagIcon}
                  selectedLanguage={selectedLanguage}
                  onLanguageChange={handleLanguageChange}
                />
                <LanguageCheckbox
                  language="Norwegian"
                  Icon={NorwegianFlagIcon}
                  selectedLanguage={selectedLanguage}
                  onLanguageChange={handleLanguageChange}
                />
              </LanguageSelectionWrapper>
              <CVButton onClick={handleDownloadCV}>Download CV</CVButton>
            </FadeInSection>
          </ContactSection>
        </FadeInSection>
      </InnerWrapper>
    </PageWrapper>
  );
};

export default ContactForm;






