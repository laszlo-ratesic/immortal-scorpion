import Meta from '@/components/Meta';
import ParticleReactor from '@/components/ParticleReactor';
import ProjectCard from '@/components/ProjectCard';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import muiLogo from './logos/mui.svg';
import pwaLogo from './logos/pwa.svg';
import recoilLogo from './logos/recoil.svg';
import rrLogo from './logos/rr.svg';
import tsLogo from './logos/ts.svg';
import viteLogo from './logos/vite.svg';
import { Image } from './styled';

function Welcome() {
  const isPortrait = useOrientation();

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <Image alt="react-router" src={rrLogo} />
        <Image alt="vite" src={viteLogo} />
        <Image alt="typescript" src={tsLogo} />
        <ParticleReactor />
        <ProjectCard />
        <Image alt="mui" src={muiLogo} />
        <Image alt="recoil" src={recoilLogo} />
        <Image alt="pwa" src={pwaLogo} />
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
