import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Contact() {
  return (
    <>
      <Meta title="Contact" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Typography variant="h3">Contact</Typography>
        <Button
          to={`/${Math.random().toString()}`}
          component={Link}
          variant="outlined"
          sx={{ mt: 4 }}
          size="small"
          color="warning"
        >
          Whant to check 404?
        </Button>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Contact;
