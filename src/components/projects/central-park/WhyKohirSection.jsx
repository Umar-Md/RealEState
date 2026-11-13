import TextSection from '../TextSection';

export default function WhyKohirSection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "why-kohir",
        "title": "Why Kohir X Roads?"
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"Kohir X Roads is the stated project location on NH-65, along the Hyderabad–Zaheerabad industrial growth corridor."}
      </p>
    </TextSection>
  );
}
