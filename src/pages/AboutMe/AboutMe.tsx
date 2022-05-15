import Avatar from '@mui/material/Avatar';

import Meta from '@/components/Meta';
import ParticleReactor from '@/components/ParticleReactor';
import { FullSizeCenteredFlexBox } from '@/components/styled';
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
  const { full_name, image } = person;

  return (
    <>
      <Meta title="About Me" />
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <Image alt="react-router" src={rrLogo} />
        <Image alt="vite" src={viteLogo} />
        <Image alt="typescript" src={tsLogo} />
        <Avatar alt={full_name} src={image} sx={{ width: 360, height: 360 }} />
        <Image alt="mui" src={muiLogo} />
        <Image alt="recoil" src={recoilLogo} />
        <Image alt="pwa" src={pwaLogo} />
      </FullSizeCenteredFlexBox>
      <ParticleReactor />
    </>
  );
}

export default AboutMe;
