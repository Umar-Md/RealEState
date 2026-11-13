import TextSection from '../TextSection';

export default function RegionalConnectivitySection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "regional-connectivity",
        "title": "Regional connectivity"
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"Route details, travel times, distances and transport capacity are not included until verified against reliable, current sources."}
      </p>
    </TextSection>
  );
}
