import Typography from '@mui/material/Typography';

import ContactForm from '@/components/ContactForm/ContactForm';
import ContactParticles from '@/components/ContactParticles';
import Meta from '@/components/Meta';
import { ColumnFlexBox } from '@/components/styled';
import Footer from '@/sections/Footer';

function Contact() {
  return (
    <>
      <Meta title="Contact" />
      <ColumnFlexBox>
        <Typography variant="h3" textAlign="center" margin="1em auto">
          Contact
        </Typography>
        <ContactForm />
        <Footer />
      </ColumnFlexBox>
      <ContactParticles />
    </>
  );
}

export default Contact;
