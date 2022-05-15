import { Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import ParticleReactor from '@/components/ParticleReactor';
import { ColumnFlexBox, FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import { person } from '@/portfolio';

import muiLogo from './logos/mui.svg';
import pwaLogo from './logos/pwa.svg';
import recoilLogo from './logos/recoil.svg';
import rrLogo from './logos/rr.svg';
import tsLogo from './logos/ts.svg';
import viteLogo from './logos/vite.svg';
import { Image } from './styled';

function AboutMe() {
  const isPortrait = useOrientation();
  const { full_name, image, bio } = person;

  return (
    <>
      <Meta title="About Me" />
      <ColumnFlexBox>
        <Avatar
          alt={full_name}
          src={image}
          sx={{ width: 360, height: 360 }}
          style={{ margin: '2em auto' }}
        />
        <Paper
          elevation={3}
          sx={{ width: '80%', padding: '2em 5em', opacity: '.8', cursor: 'pointer' }}
        >
          <Typography
            variant="overline"
            component="p"
            style={{ fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center' }}
          >
            {bio}
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            margin: '3em auto',
            width: '80%',
            opacity: '.8',
            cursor: 'pointer',
            padding: '1em',
          }}
        >
          <Typography
            variant="overline"
            component="p"
            style={{ fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center' }}
          >
            This portfolio was built with
          </Typography>
          <FullSizeCenteredFlexBox
            sx={{ justifyContent: 'space-around', padding: '2em 1em' }}
            flexDirection={isPortrait ? 'column' : 'row'}
          >
            <Image alt="react-router" src={rrLogo} />
            <Image alt="vite" src={viteLogo} />
            <Image alt="typescript" src={tsLogo} />
            <Image alt="mui" src={muiLogo} />
            <Image alt="recoil" src={recoilLogo} />
            <Image alt="pwa" src={pwaLogo} />
          </FullSizeCenteredFlexBox>
        </Paper>
      </ColumnFlexBox>
      <ParticleReactor />
    </>
  );
}

export default AboutMe;
