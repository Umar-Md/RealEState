import TextSection from '../TextSection';
import NimzLocationMap from '../NimzLocationMap';
import CorridorGrowth from '../CorridorGrowth';

export default function GrowthCorridorSection({ index }) {
  return (
    <TextSection index={index} section={{ id: 'growth-corridor', title: 'Central Park in the NIMZ growth region' }}>
      <p className="text-base leading-8 text-[#46534C]">A residential address at Chilkepalli, in the Kohir X Roads area, with the wider NH-65 industrial region as its backdrop. The highway, rail and airport connections highlighted in SSP's investment guide provide a regional setting for buyers exploring Central Park.</p>
      <NimzLocationMap />
      <CorridorGrowth />
    </TextSection>
  );
}
