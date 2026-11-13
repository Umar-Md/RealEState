import TextSection from '../TextSection';

export default function ManufacturingSection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "manufacturing",
        "title": "Manufacturing opportunities"
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"Manufacturing and related business potential can be explored in the context of the wider regional ecosystem. Sector availability, eligibility, land access and operating requirements must be independently confirmed."}
      </p>
    </TextSection>
  );
}
