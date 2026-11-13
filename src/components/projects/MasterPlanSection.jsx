import { Maximize2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import SectionShell from './SectionShell';
import MasterPlanViewer from './MasterPlanViewer';

export default function MasterPlanSection({ project }) {
  const section = {
  "id": "master-plan",
  "title": "Master plan and plot layout",
  "type": "master-plan",
  "paragraphs": [
    "Explore the supplied Central Park layout, including numbered plots, internal roads and reserved park spaces. Open the plan for a closer look at the details."
  ]
};
  return (
    <SectionShell id={section.id} dark>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">
          <SectionTitle
            label="PROJECT LAYOUT"
            title={section.title}
            description={section.paragraphs?.[0]}
            light
          />

          <div className="flex items-center gap-3 text-xs text-white/50 lg:justify-end">
            <Maximize2 size={16} className="text-ssp-gold" />
            Interactive layout viewer
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-sm border border-white/10 bg-white p-3 shadow-[0_30px_100px_-35px_rgba(0,0,0,0.8)] sm:p-6">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ssp-gold via-ssp-green to-ssp-gold" />
          <MasterPlanViewer plan={project.masterPlan} />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <span>{project.title} · Master layout</span>
          <span>Use the viewer to inspect the layout</span>
        </div>
      </div>
    </SectionShell>
  );
}
