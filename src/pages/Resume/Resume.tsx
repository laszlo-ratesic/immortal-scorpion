import Typography from '@mui/material/Typography';

import CV from '@/components/CV';
import Meta from '@/components/Meta';
import ResumeParticles from '@/components/ResumeParticles';
import { ColumnFlexBox, FullSizeCenteredFlexBox } from '@/components/styled';
import Footer from '@/sections/Footer';

import './CVButton.css';

function Resume() {
  return (
    <>
      <Meta title="Resume" />
      <FullSizeCenteredFlexBox>
        <ColumnFlexBox>
          <Typography variant="h3" style={{ margin: '2rem auto' }}>
            Resume
          </Typography>
          <CV />
        </ColumnFlexBox>
        <Footer />
      </FullSizeCenteredFlexBox>
      <ResumeParticles />
    </>
  );
}

export default Resume;
