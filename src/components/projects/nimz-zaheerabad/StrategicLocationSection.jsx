import TextSection from '../TextSection';

export default function StrategicLocationSection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "strategic-location",
        "title": "Strategic location"
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"The focus is the Zaheerabad region in Telangana. Add location-specific claims only after confirming them against current, reliable sources."}
      </p>
    </TextSection>
  );
}
