import TextSection from '../TextSection';

export default function LifestyleSection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "lifestyle",
        "title": "Lifestyle facilities",
        "bullets": [
          "Clubhouse",
          "Leisure amenities"
        ]
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"A clubhouse and leisure amenities are included in the supplied project brief. Detailed facility specifications will be added after confirmation."}
      </p>
    </TextSection>
  );
}
