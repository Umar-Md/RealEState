import TextSection from '../TextSection';

export default function GrowthCorridorSection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "growth-corridor",
        "title": "NIMZ and industrial growth corridor"
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"Central Park is a residential township positioned along the Hyderabad–Zaheerabad industrial growth corridor. NIMZ Zaheerabad is a separate industrial development; Central Park is not presented as part of, owned by, or officially affiliated with NIMZ."}
      </p>
    </TextSection>
  );
}
