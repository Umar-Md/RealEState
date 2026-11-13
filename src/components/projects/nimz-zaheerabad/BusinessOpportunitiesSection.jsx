import TextSection from '../TextSection';

export default function BusinessOpportunitiesSection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "business-opportunities",
        "title": "Investment and business opportunities"
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"This page does not offer or represent industrial plots, government allotments, prices, ownership interests or guaranteed returns. Confirm relevant policies and opportunities with the appropriate authorities and qualified advisers."}
      </p>
    </TextSection>
  );
}
