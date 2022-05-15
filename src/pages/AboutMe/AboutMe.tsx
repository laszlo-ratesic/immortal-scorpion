import { Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import ParticleReactor from '@/components/ParticleReactor';
import { ColumnFlexBox, FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import { person } from '@/portfolio';
import Footer from '@/sections/Footer';

import muiLogo from './logos/mui.svg';
import pwaLogo from './logos/pwa.svg';
import reactLogo from './logos/react_ed.svg';
import recoilLogo from './logos/recoil.svg';
import rrLogo from './logos/rr.svg';
import tsLogo from './logos/ts.svg';
import viteLogo from './logos/vite.svg';
import { Image } from './styled';

function AboutMe() {
  const isPortrait = useOrientation();
  const { full_name, image, bio } = person;
  const width = isPortrait ? '40%' : '30%';
  const height = isPortrait ? '30%' : '40%';

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
            padding: '1em',
            opacity: '.96',
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
            <Tooltip title="React-Router" style={{ margin: '0 2em' }} arrow placement="top">
              <Image alt="react-router" src={rrLogo} style={{ transform: 'scale(.7)' }} />
            </Tooltip>
            <Tooltip title="Vite" style={{ margin: '0 2em' }} arrow>
              <Image alt="vite" src={viteLogo} style={{ transform: 'scale(.7)' }} />
            </Tooltip>
            <Tooltip title="TypeScript" style={{ margin: '0 2em' }} arrow placement="top">
              <Image alt="typescript" src={tsLogo} style={{ transform: 'scale(.7)' }} />
            </Tooltip>
            <Tooltip title="React" style={{ margin: '0 2em' }} arrow>
              <Image
                alt="react"
                src={reactLogo}
                style={{ transform: 'scale(.7)' }}
                sx={{ width, height }}
              />
            </Tooltip>
            <Tooltip title="MUI" style={{ margin: '0 2em' }} arrow placement="top">
              <Image alt="mui" src={muiLogo} style={{ transform: 'scale(.7)' }} />
            </Tooltip>
            <Tooltip title="Recoil" style={{ margin: '0 2em' }} arrow>
              <Image alt="recoil" src={recoilLogo} style={{ transform: 'scale(.7)' }} />
            </Tooltip>
            <Tooltip title="PWA" style={{ margin: '0 2em' }} arrow placement="top">
              <Image alt="pwa" src={pwaLogo} style={{ transform: 'scale(.7)' }} />
            </Tooltip>
          </FullSizeCenteredFlexBox>
        </Paper>
        <Footer />
      </ColumnFlexBox>
      <ParticleReactor />
    </>
  );
}

export default AboutMe;
