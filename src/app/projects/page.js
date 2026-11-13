import ProjectsSection from '../../components/ProjectsSection';

export const metadata = {
  title: 'My Projects | Swayam Sampada Properties',
  description:
    'Explore Central Park, a residential plotted township, and a separate NIMZ Zaheerabad industrial development overview.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F8F6EF]">
      <ProjectsSection />
    </div>
  );
}