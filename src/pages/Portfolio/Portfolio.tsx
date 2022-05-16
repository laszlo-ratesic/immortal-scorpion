import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import PortfolioParticles from '@/components/PortfolioParticles';
import ProjectCard from '@/components/ProjectCard';
import { ColumnFlexBox, FullSizeCenteredFlexBox } from '@/components/styled';
import { projects } from '@/portfolio';
import Footer from '@/sections/Footer';

function Portfolio() {
  return (
    <>
      <Meta title="Portfolio" />
      <Typography variant="h3" style={{ textAlign: 'center', margin: '1rem auto' }}>
        Projects
      </Typography>
      <ColumnFlexBox>
        <FullSizeCenteredFlexBox>
          {projects.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                title={project.title}
                description={project.description}
                app_url={project.app_url}
                repo_link={project.repo_link}
                img={project.img}
              />
            );
          })}
        </FullSizeCenteredFlexBox>
        <Footer />
      </ColumnFlexBox>
      <PortfolioParticles />
    </>
  );
}

export default Portfolio;
