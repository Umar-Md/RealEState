import TextSection from '../TextSection';

export default function InvestmentSection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "investment",
        "title": "Investment information"
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"Pricing, plot availability and payment terms are not published here. Confirm current details directly with the project team and complete independent due diligence before making a decision. No investment returns are promised."}
      </p>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"Promoter identity and TG-RERA applicability and registration details are pending verification. They will not be stated until confirmed."}
      </p>
    </TextSection>
  );
}
