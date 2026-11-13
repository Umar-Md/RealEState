import ConnectivitySection from './ConnectivitySection';
import MasterPlanSection from './MasterPlanSection';
import BuyingProcessSection from './BuyingProcessSection';
import VerificationSection from './VerificationSection';
import CentralParkOverviewSection from './central-park/OverviewSection';
import CentralParkWhyKohirSection from './central-park/WhyKohirSection';
import CentralParkGrowthCorridorSection from './central-park/GrowthCorridorSection';
import CentralParkInfrastructureSection from './central-park/InfrastructureSection';
import CentralParkLifestyleSection from './central-park/LifestyleSection';
import CentralParkInvestmentSection from './central-park/InvestmentSection';
import NimzOverviewSection from './nimz-zaheerabad/OverviewSection';
import NimzStrategicLocationSection from './nimz-zaheerabad/StrategicLocationSection';
import NimzIndustrialCorridorSection from './nimz-zaheerabad/IndustrialCorridorSection';
import NimzIndustrialInfrastructureSection from './nimz-zaheerabad/IndustrialInfrastructureSection';
import NimzManufacturingSection from './nimz-zaheerabad/ManufacturingSection';
import NimzRegionalConnectivitySection from './nimz-zaheerabad/RegionalConnectivitySection';
import NimzIndustrialEcosystemSection from './nimz-zaheerabad/IndustrialEcosystemSection';
import NimzBusinessOpportunitiesSection from './nimz-zaheerabad/BusinessOpportunitiesSection';

const projectSections = {
  "central-park": {
    "overview": CentralParkOverviewSection,
    "why-kohir": CentralParkWhyKohirSection,
    "connectivity": ConnectivitySection,
    "growth-corridor": CentralParkGrowthCorridorSection,
    "master-plan": MasterPlanSection,
    "infrastructure": CentralParkInfrastructureSection,
    "lifestyle": CentralParkLifestyleSection,
    "investment": CentralParkInvestmentSection,
    "buying-process": BuyingProcessSection,
    "promoter": VerificationSection,
  },
  "nimz-zaheerabad": {
    "overview": NimzOverviewSection,
    "strategic-location": NimzStrategicLocationSection,
    "industrial-corridor": NimzIndustrialCorridorSection,
    "industrial-infrastructure": NimzIndustrialInfrastructureSection,
    "manufacturing": NimzManufacturingSection,
    "regional-connectivity": NimzRegionalConnectivitySection,
    "industrial-ecosystem": NimzIndustrialEcosystemSection,
    "business-opportunities": NimzBusinessOpportunitiesSection,
  },
};

export default function ProjectSections({ project }) {
  return project.sections.map((section, index) => {
    const Component = projectSections[project.id]?.[section.id];
    if (!Component) return null;
    return <Component key={section.id} project={project} index={index} />;
  });
}
