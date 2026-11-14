import ProjectDetailPage from '@/components/projects/ProjectDetailPage';
import { nimzZaheerabadProject } from '@/data/projects/nimzZaheerabad';

export const metadata = {
  title: 'NIMZ Zaheerabad | Industrial Development',
  description:
    'Explore NIMZ Zaheerabad’s planned infrastructure, NH-65 connectivity and manufacturing ecosystem, based on SSP’s investment guide.',
  alternates: { canonical: '/projects/nimz-zaheerabad' },
};

export default function NimzZaheerabadPage() {
  return <ProjectDetailPage project={nimzZaheerabadProject} />;
}
