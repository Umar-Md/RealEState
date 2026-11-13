import TextSection from '../TextSection';

export default function IndustrialCorridorSection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "industrial-corridor",
        "title": "Hyderabad–Nagpur Industrial Corridor"
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"The Hyderabad–Nagpur Industrial Corridor is the industrial-corridor context identified in the project brief. No project status, delivery date or corridor statistic is stated here without a verified source."}
      </p>
    </TextSection>
  );
}
