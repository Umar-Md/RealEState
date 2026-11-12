import { regionalFacts } from './centralParkData';

export const projectsData = [
  {
    id: 'central-park-zaheerabad',
    title: 'Central Park Venture',
    subtitle: 'Residential open plots in Zaheerabad, Sangareddy District, Telangana.',
    client: 'Swayam Sampada Properties Private Limited',
    marketer: 'BSOM Consulting (BSOM Research and Consulting)',
    developer: 'SRR Infra Developers, Hyderabad - Telangana',
    location: 'Zaheerabad, Sangareddy District, Telangana',
    category: 'Residential Open Plots',
    timeline: '2026-27',
    audience: 'Residential and commercial aspirants',
    summary: 'Central Park is a residential open-plot venture by Swayam Sampada Properties Private Limited in Zaheerabad. The project is positioned for buyers who want to understand the location, surrounding development, and regional growth context before deciding.',
    context: 'The project concept describes Zaheerabad as transitioning from a farming-led area toward an industry-led growth zone. Industrial activity, jobs, and infrastructure may influence future housing and land demand.',
    outlook: 'The regional growth story centres on NIMZ and the Hyderabad-Nagpur Industrial Corridor. Future land values depend on execution and development timelines; appreciation is not guaranteed.',
    metrics: regionalFacts.map(([value, label]) => ({ value, label })),
    metricsNote: 'These NIMZ figures are regional plans and projections from the supplied concept note, not Central Park plot specifications or guaranteed outcomes.',
  },
];
