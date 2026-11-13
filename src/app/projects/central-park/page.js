import ProjectDetailPage from '@/components/projects/ProjectDetailPage';
import { centralParkProject } from '@/data/projects/centralPark';

export const metadata = {
  title: 'Central Park | Kohir X Roads, NH-65',
  description:
    'Explore Central Park, a DTCP-approved residential plotted township at Kohir X Roads on NH-65, Telangana.',
  alternates: { canonical: '/projects/central-park' },
};

export default function CentralParkPage() {
  return <ProjectDetailPage project={centralParkProject} />;
}
