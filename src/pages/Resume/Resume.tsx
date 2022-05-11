import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Resume() {
  return (
    <>
      <Meta title="Resume" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Resume</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Resume;
