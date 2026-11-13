import TextSection from '../TextSection';

export default function OverviewSection({ index }) {
  return (
    <TextSection index={index} section={{
        "id": "overview",
        "title": "Project overview",
        "bullets": [
          "Category: Residential Plotted Township",
          "DTCP-approved layout, T.L.P. No. 332/2022/H"
        ]
      }}>
      <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
        {"Central Park is a residential plotted township at Kohir X Roads on NH-65, Telangana. The project details below are based on the information supplied for this website update."}
      </p>
    </TextSection>
  );
}
