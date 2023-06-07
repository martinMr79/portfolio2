import React from 'react';
import { ContactSection, ContactLink, ContactList } from "./Styled"


function Contact() {
    const handleSubmit = e => {
        e.preventDefault();
        // Add your form handling code here
    };

        return (
            <ContactSection id="contact">
                <h2>Contact</h2>
                <div>
                    <div className="validform"></div>
                </div>
                <div className="container">
                    <form id="contactForm" onSubmit={handleSubmit}>
                    <div>
                        <label>Enter your full name
                            <input name="name" id="name" />
                        </label>
                        <div className="form-error" id="nameError">
                            Please enter full name (min 6 characters)
                        </div>
                    </div>

                    <div>
                         <label
                        >Subject
                           <input name="subject" id="subject" />
                       </label>
                        <div class="form-error" id="subjectError">
                        Please give me more details (min 16 characters long)
                        </div>
                    </div>

                    <div>
                        <label>
                        Email is required
                        <input name="email" id="email" />
                        </label>
                        <div class="form-error" id="emailError">
                        Please enter a valid email address
                        </div>
                    </div>

                    <div>
            <label
              >Message
              <textarea
                class="message-input"
                name="message"
                id="messageForm"
              ></textarea>
            </label>
            <div class="form-error" id="messageError">
              Message must be at least 26 characters long
            </div>
          </div>
                    
          <div className="button-container">
                        <button className="contact-form-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <p>You can also reach me on:</p>
            <ContactList>
                <li><ContactLink href="mailto:mamr@hotmal.no" title="e-mail" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></ContactLink></li>
                <li><ContactLink href="tel:004790285550" title="phone" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone"></i></ContactLink></li>
                <li><ContactLink href="linkedinProfileURL" title="linkedin" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></ContactLink></li>
                <li><ContactLink id="profile-link" href="https://github.com/martinMr79" title="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></ContactLink></li>
            </ContactList>
        </ContactSection>
    );
}

export default Contact;
