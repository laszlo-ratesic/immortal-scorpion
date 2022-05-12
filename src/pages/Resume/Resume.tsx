import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import ResumeParticles from '@/components/ResumeParticles';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Resume() {
  return (
    <>
      <Meta title="Resume" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Resume</Typography>
      </FullSizeCenteredFlexBox>
      <ResumeParticles />
    </>
  );
}

export default Resume;
