import Typography from '@mui/material/Typography';

import ContactForm from '@/components/ContactForm/ContactForm';
import ContactParticles from '@/components/ContactParticles';
import Meta from '@/components/Meta';

function Contact() {
  return (
    <>
      <Meta title="Contact" />
      <Typography variant="h3" textAlign="center" margin="1em auto">
        Contact
      </Typography>
      <ContactForm />
      <ContactParticles />
    </>
  );
}

export default Contact;
