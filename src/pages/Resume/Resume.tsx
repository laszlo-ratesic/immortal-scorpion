import Typography from '@mui/material/Typography';

import CV from '@/components/CV';
import Meta from '@/components/Meta';
import ResumeParticles from '@/components/ResumeParticles';
import { ColumnFlexBox } from '@/components/styled';
import Footer from '@/sections/Footer';

import './CVButton.css';

function Resume() {
  return (
    <>
      <Meta title="Resume" />
      <ColumnFlexBox>
        <Typography variant="h3" style={{ margin: '2rem auto' }}>
          Resume
        </Typography>
        <CV />
        <Footer />
      </ColumnFlexBox>
      <ResumeParticles />
    </>
  );
}

export default Resume;
