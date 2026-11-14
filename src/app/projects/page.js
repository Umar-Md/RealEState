import ProjectsSection from '../../components/ProjectsSection';

export const metadata = {
  title: 'Projects & Places',
  description:
    'Explore Central Park, a residential plotted township, and a separate NIMZ Zaheerabad industrial development overview.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F7F5EF] font-sans text-[#173D33] dark:bg-[#0D1F1A] dark:text-[#F7F5EF]">
      <ProjectsSection />
    </div>
  );
}
