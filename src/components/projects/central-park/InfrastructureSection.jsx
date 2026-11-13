import TextSection from '../TextSection';

export default function InfrastructureSection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "infrastructure",
        "title": "Infrastructure and amenities",
        "bullets": [
          "33 ft and 40 ft internal roads",
          "Black-top roads and avenue plantation",
          "Underground drainage",
          "Water and electricity provisions",
          "Street lights and security",
          "Three reserved park sites"
        ]
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"The supplied project information lists the following planned layout provisions:"}
      </p>
    </TextSection>
  );
}
