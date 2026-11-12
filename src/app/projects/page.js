import ProjectsSection from '../../components/ProjectsSection';

export const metadata = {
  title: 'Projects | Central Park Venture',
  description:
    'Discover Central Park residential open plots in Zaheerabad with Swayam Sampada Properties. Explore the project overview, development partners, and regional growth context.',
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