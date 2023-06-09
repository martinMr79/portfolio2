import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Box } from '@mui/material';
import { FormContainer } from './Styled';

const schema = yup.object().shape({
  name: yup.string().min(3).max(25).required(),
  email: yup.string().required().email(),
  message: yup.string().min(5).max(500).required(),
});

const ContactForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);

  return (
    <FormContainer>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box marginBottom={2}>
        <Controller 
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField label="Name" fullWidth {...field} error={!!errors.name} helperText={errors.name?.message} />}
        />
      </Box>
      <Box marginBottom={2}>
        <Controller 
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField label="Email" fullWidth {...field} error={!!errors.email} helperText={errors.email?.message} />}
        />
      </Box>
      <Box marginBottom={2}>
        <Controller 
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField label="Message" fullWidth multiline rows={4} {...field} error={!!errors.message} helperText={errors.message?.message} />}
        />
      </Box>
      <Button variant="contained" type="submit">Submit</Button>
    </form>
    </FormContainer>
  );
};

export default ContactForm;


 
//            <ContactSection>
//                <h2>Contact</h2>
//
//            <p>You can also reach me on:</p>
//            <ContactList>
 //               <li><ContactLink href="mailto:mamr@hotmal.no" title="e-mail" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope"></i></ContactLink></li>
//                <li><ContactLink href="tel:004790285550" title="phone" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone"></i></ContactLink></li>
//                <li><ContactLink href="linkedinProfileURL" title="linkedin" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></ContactLink></li>
//                <li><ContactLink id="profile-link" href="https://github.com/martinMr79" title="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></ContactLink></li>
//            </ContactList>
//        </ContactSection>

