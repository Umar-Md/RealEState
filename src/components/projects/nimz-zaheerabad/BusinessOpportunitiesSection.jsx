import TextSection from '../TextSection';
import CorridorGrowth from '../CorridorGrowth';

export default function BusinessOpportunitiesSection({ index }) {
  return <TextSection index={index} section={{ id: 'business-opportunities', title: 'Residential and commercial growth' }}><CorridorGrowth /></TextSection>;
}
