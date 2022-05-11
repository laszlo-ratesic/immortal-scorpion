import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import ProjectCard from '@/components/ProjectCard';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import { projects } from '@/portfolio';

function Projects() {
  return (
    <>
      <Meta title="projects" />
      <Typography variant="h3" style={{ textAlign: 'center', margin: '1rem auto' }}>
        Projects
      </Typography>
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
    </>
  );
}

export default Projects;
