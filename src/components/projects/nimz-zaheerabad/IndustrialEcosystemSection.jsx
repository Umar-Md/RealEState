import TextSection from '../TextSection';

export default function IndustrialEcosystemSection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "industrial-ecosystem",
        "title": "Nearby industrial ecosystem"
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"Add neighbouring industrial, logistics and business developments here only after verifying their identity, location and current status. No affiliation with Central Park is implied."}
      </p>
    </TextSection>
  );
}
