import ProjectHero from './ProjectHero';
import ProjectFacts from './ProjectFacts';
import ProjectNavigation from './ProjectNavigation';
import ProjectEnquiry from './ProjectEnquiry';
import ProjectSections from './ProjectSections';
import ProjectDisclaimer from './ProjectDisclaimer';

export default function ProjectDetailPage({ project }) {
  return (
    <article className="overflow-hidden bg-white selection:bg-ssp-gold selection:text-ssp-dark">
      <ProjectHero project={project} />

      <ProjectFacts facts={project.facts} />

      <ProjectNavigation project={project} />

      <ProjectSections project={project} />

      <ProjectDisclaimer disclaimer={project.disclaimer} />

      <ProjectEnquiry project={project} />
    </article>
  );
}
