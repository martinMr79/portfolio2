import React, { useState } from 'react';
import { ContactLink, ContactSection, ContactList, PageWrapper, InnerWrapper, H2 } from './Styled';

const ContactForm = () => {
  const [language, setLanguage] = useState('English'); // Default language

  const LanguageToggle = ({ language, setLanguage }) => {
    return (
      <label>
        <input
          type="checkbox"
          checked={language === 'Norwegian'}
          onChange={() => setLanguage(language === 'English' ? 'Norwegian' : 'English')}
        />
        {language === 'English' ? 'Switch to Norwegian' : 'Switch to English'}
      </label>
    );
  };

  const handleDownloadCV = () => {
    const cvFile = language === 'English' ? '/CV/CV Martin Mroz-English.pdf' : '/CV/CV Martin Mroz.pdf' /* '/CV/CV Martin Mroz.pdf' : '/CV/CV Martin Mroz-English.pdf'; */
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = `CV Martin Mroz ${language}.pdf`;
    link.click();
  };
  

  return (
    <PageWrapper>
      <InnerWrapper> 
        <ContactSection>
          <H2>You can reach me on:</H2>
          <ContactList>
              <li><ContactLink href="mailto:mamr@hotmal.no" title="e-mail" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></ContactLink></li>
              <li><ContactLink href="tel:004790285550" title="phone" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone"></i></ContactLink></li>
              <li><ContactLink href="https://no.linkedin.com/in/martin-mroz-28008121a?original_referer=https%3A%2F%2Fwww.google.com%2F" title="linkedin" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></ContactLink></li>
              <li><ContactLink id="profile-link" href="https://github.com/martinMr79" title="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></ContactLink></li>              
          </ContactList>
          <LanguageToggle language={language} setLanguage={setLanguage} />
        <button onClick={handleDownloadCV}>Download CV</button>
        </ContactSection>
      </InnerWrapper>
    </PageWrapper>
  );
};

export default ContactForm;





