import React, { useState } from 'react';
import { ContactLink, ContactSection, ContactList, PageWrapper, InnerWrapper, H2, CVButton } from './Styled';
import Checkbox from '@mui/material/Checkbox';


const EnglishFlagIcon = () => (
  <img src="/FlagIcons/Flag_of_the_United_Kingdom_(3-5).svg" alt="English flag" width="24" height="24" />
);


const NorwegianFlagIcon = () => (
  <img src="/FlagIcons/Flag_of_Norway_(c8102e_for_red_&_00205b_for_blue).svg" alt="Norwegian flag" width="24" height="24" />
);

const LanguageCheckbox = ({ language, Icon, checked, onChange }) => (
  <div>
    <Checkbox
      checked={checked}
      onChange={onChange}
      name={language}
      icon={<Icon />}
      checkedIcon={<Icon />}
    />
    {language}
  </div>
);

const ContactForm = () => {
  const [selectedLanguages, setSelectedLanguages] = useState({
    English: false,
    Norwegian: false,
  });

  const handleLanguageChange = (event) => {
    setSelectedLanguages({ ...selectedLanguages, [event.target.name]: event.target.checked });
  };

  const handleDownloadCV = () => {
    Object.entries(selectedLanguages).forEach(([language, isSelected]) => {
      if (isSelected) {
        const cvFile = language === 'English' ? '/CV/cv-name-english.pdf' : '/CV/cv-name-norwegian.pdf';
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = `Your_CV_${language}.pdf`;
        document.body.appendChild(link); // Required for Firefox
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  return (
    <PageWrapper>
      <InnerWrapper> 
        <ContactSection>
          <H2>Reach me on:</H2>
          <ContactList>
          <li><ContactLink href="mailto:mamr@hotmal.no" title="e-mail" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></ContactLink></li>
              <li><ContactLink href="tel:004790285550" title="phone" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone"></i></ContactLink></li>
              <li><ContactLink href="https://no.linkedin.com/in/martin-mroz-28008121a?original_referer=https%3A%2F%2Fwww.google.com%2F" title="linkedin" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></ContactLink></li>
              <li><ContactLink id="profile-link" href="https://github.com/martinMr79" title="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></ContactLink></li>
          </ContactList>

          <H2>Download my CV</H2>
          <div> {/* Wrapper div */}
            <LanguageCheckbox
              language="English"
              Icon={EnglishFlagIcon}
              checked={selectedLanguages.English}
              onChange={handleLanguageChange}
            />
            <LanguageCheckbox
              language="Norwegian"
              Icon={NorwegianFlagIcon}
              checked={selectedLanguages.Norwegian}
              onChange={handleLanguageChange}
            />
          </div>
          <CVButton onClick={handleDownloadCV}>Download CV</CVButton>
        </ContactSection>
      </InnerWrapper>
    </PageWrapper>
  );
};

export default ContactForm;






