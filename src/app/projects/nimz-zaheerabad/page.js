import ProjectDetailPage from '@/components/projects/ProjectDetailPage';
import { nimzZaheerabadProject } from '@/data/projects/nimzZaheerabad';

export const metadata = {
  title: 'NIMZ Zaheerabad | Industrial Development',
  description:
    'Explore regional industrial development, manufacturing context and business opportunities around NIMZ Zaheerabad.',
  alternates: { canonical: '/projects/nimz-zaheerabad' },
};

export default function NimzZaheerabadPage() {
  return <ProjectDetailPage project={nimzZaheerabadProject} />;
}
