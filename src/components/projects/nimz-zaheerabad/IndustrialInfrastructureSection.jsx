import TextSection from '../TextSection';

export default function IndustrialInfrastructureSection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "industrial-infrastructure",
        "title": "Industrial infrastructure"
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"Specific utilities, transport links, facilities and delivery status have not been verified for publication. Any proposed development must be clearly labelled proposed and supported by a current official source."}
      </p>
    </TextSection>
  );
}
