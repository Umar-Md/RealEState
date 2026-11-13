import TextSection from '../TextSection';

export default function OverviewSection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "overview",
        "title": "NIMZ overview"
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"NIMZ stands for National Investment and Manufacturing Zone. This page provides a regional overview of industrial development and business context around Zaheerabad, Telangana."}
      </p>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"No project-specific allotment, ownership, plot inventory or confirmed infrastructure is represented on this page."}
      </p>
    </TextSection>
  );
}
