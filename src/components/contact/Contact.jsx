import React from 'react';
import { ContactLink, ContactSection, ContactList, PageWrapper, InnerWrapper } from './Styled';

const ContactForm = () => {
  return (
    <PageWrapper>
      <InnerWrapper> 
        <ContactSection>
          <p>You can reach me on:</p>
          <ContactList>
              <li><ContactLink href="mailto:mamr@hotmal.no" title="e-mail" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></ContactLink></li>
              <li><ContactLink href="tel:004790285550" title="phone" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone"></i></ContactLink></li>
              <li><ContactLink href="linkedinProfileURL" title="linkedin" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></ContactLink></li>
              <li><ContactLink id="profile-link" href="https://github.com/martinMr79" title="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></ContactLink></li>
          </ContactList>
        </ContactSection>
      </InnerWrapper>
    </PageWrapper>
  );
};

export default ContactForm;




