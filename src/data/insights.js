const architecture = (id) => `/images/architecture/${id}-1920.webp`;

export const insightCategories = [
  { id: 'location', name: 'Location & Connectivity', description: 'Look beyond the pin. Understand access, surroundings and everyday journeys.', image: '/images/Home Page.jpeg', alt: 'Regional landscape from the SSP image collection' },
  { id: 'industrial', name: 'Industrial Growth & NIMZ', description: 'Read the regional story with a clear distinction between plans and delivery.', image: '/images/nimz-1.jpeg', alt: 'Illustration of industrial development around NIMZ Zaheerabad' },
  { id: 'investment', name: 'Real Estate Investment', description: 'Better questions about documents, approvals and the decision to buy.', image: architecture('photo-1460925895917-afdab827c52f'), alt: 'Illustrative workspace for property research and financial planning' },
  { id: 'lifestyle', name: 'Township & Lifestyle', description: 'Understand the roads, open spaces and services behind a liveable layout.', image: '/images/CentralPark.png', alt: 'Central Park site at Kohir X Roads' },
];

export const insightSources = {
  nicdc: { title: 'NICDC: Zaheerabad, Telangana — project overview and connectivity', url: 'https://nicdc.in/projects/12-new-projects/zaheerabad-telangana' },
  buildnow: { title: 'Government of Telangana: BuildNow approval system', url: 'https://buildnow.telangana.gov.in/' },
  rera: { title: 'Telangana RERA: project search and citizen information', url: 'https://rera.telangana.gov.in/' },
  layout: { title: 'Government of Telangana: layout regularisation FAQs', url: 'https://lrs.telangana.gov.in/Documents/FAQs-LRS%202020.pdf' },
};

const articles = [
  {
    slug: 'buying-land-near-nh-65', category: 'location',
    title: 'Buying land near NH-65? Start with access, not the highway address.',
    description: 'A practical guide to highway proximity, legal access, everyday convenience and evaluating plots around Kohir X Roads.',
    image: '/images/Home Page.jpeg', alt: 'Landscape image from the SSP collection illustrating regional location research',
    intro: 'A highway address can make a location easier to recognise. It cannot tell you whether a particular plot is easy to reach, pleasant to live in or suitable for your plans. Before comparing prices around NH-65, separate regional connectivity from the last stretch of your journey.',
    takeaway: 'Evaluate the route from the highway to the actual plot, the documented access and the experience of living there.',
    projectContext: 'Exploring residential development around Kohir X Roads?', masterPlan: false,
    sources: ['buildnow', 'rera'],
    sections: [
      { id: 'access', title: 'A nearby highway and usable access are different things', paragraphs: ['Drive to the plot entrance rather than stopping at the nearest junction. Notice junction design, service roads, turning movements and the approach road. A route that looks short on a map can involve a detour or an inconvenient crossing.', 'Ask for the documents supporting access to the property. A visible track should prompt questions about ownership and rights of use; a site visit alone cannot establish those rights. Have an independent property lawyer examine the documents.'], checklist: ['Trace the complete approach route in both directions.', 'Compare the entrance and road boundaries with the layout drawing.', 'Ask who owns and maintains the approach road.'] },
      { id: 'living', title: 'Judge the location as a future resident', paragraphs: ['Visit at different times and pay attention to traffic noise, dust, lighting and heavy-vehicle movements. Consider whether daily services are convenient for the people who would actually use the property.', 'List your own destinations: work, school, healthcare and groceries. Check real journeys rather than relying on an advertised travel time. A good location for a logistics business may feel very different from a good location for a home.'] },
      { id: 'constraints', title: 'Ask about land use and road-related constraints', paragraphs: ['Ask the relevant authority and your advisers about the applicable land use, road boundaries, access permissions, reservations and any restrictions affecting construction. Do not assume that a residential-looking drawing resolves every planning question.', 'Keep existing infrastructure separate from a proposed interchange or road widening. Request the official reference and current status for any future infrastructure used in a sales presentation.'] },
      { id: 'comparison', title: 'Build a comparison that reflects your purpose', paragraphs: ['Compare candidate plots using the same headings: documented access, land-use position, layout information, surrounding uses, services and the total cost of ownership. Record unknowns rather than filling gaps with optimistic assumptions.', 'Around Kohir X Roads, the useful next step is to inspect an actual residential layout and its site conditions. Central Park is one project to explore; its location should be assessed alongside its documents and master plan.'] },
    ],
  },
  {
    slug: 'nimz-zaheerabad', category: 'industrial',
    title: 'What is NIMZ Zaheerabad? A guide to the regional industrial story.',
    description: 'Understand the Zaheerabad industrial node, the role of NH-65 and why regional investment plans need careful interpretation.',
    image: '/images/nimz-1.jpeg', alt: 'Illustrative industrial development image for NIMZ Zaheerabad',
    intro: 'Industrial development around Zaheerabad is relevant to people studying the region. The starting point is to distinguish an officially described industrial project from predictions about nearby private property. They are different decisions, supported by different evidence.',
    takeaway: 'An industrial development plan is regional context. It is not evidence of a particular residential plot’s demand, approval or future price.',
    sources: ['nicdc'],
    sections: [
      { id: 'overview', title: 'Start with the official project description', paragraphs: ['NICDC describes the Zaheerabad Industrial Node as part of the Hyderabad–Nagpur Industrial Corridor, with a phased development plan and proximity to NH-65. Its published overview identifies industrial sectors and planned land uses. Refer to that source for the project’s scope rather than combining figures from unrelated announcements.'], source: 'nicdc' },
      { id: 'status', title: 'Read infrastructure status literally', paragraphs: ['The NICDC connectivity table describes a greenfield road connection to NH-65 as under construction. Its overview also references the proposed Regional Ring Road. These descriptions should not be read as confirmation that either connection is operational.', 'Before using an infrastructure claim in a purchase decision, locate the latest official update, identify which phase or road segment it covers and check whether completion has been confirmed. An announcement, a contract and an open road are separate milestones.'], source: 'nicdc' },
      { id: 'demand', title: 'How industrial activity may influence surrounding property', paragraphs: ['As market commentary, operating businesses can create reasons for people and services to locate nearby. The effect depends on actual occupancy, employment patterns, commuting preferences and the available housing supply.', 'Potential employment or investment figures describe an ambition or estimate. They should not be converted into a promised rental yield, a guaranteed buyer pool or an appreciation percentage for a private plot.'] },
      { id: 'separation', title: 'Keep industrial and residential decisions separate', paragraphs: ['For a residential purchase, examine the exact property: title, access, permitted use, layout, services and suitability for your household. Ask how evidence of current local demand compares with the amount of competing supply.', 'Central Park is a separate private residential project. Nothing in this guide represents it as part of NIMZ, an industrial allotment or a government-affiliated development. For the existing regional background material, see the NIMZ project overview linked below.'] },
    ],
    extraLink: { href: '/projects/nimz-zaheerabad', label: 'Explore the existing NIMZ regional overview' },
  },
  {
    slug: 'plot-buying-document-checklist', category: 'investment',
    title: 'Before paying an advance for a plot: a document checklist.',
    description: 'Organise the ownership, layout, site and payment questions to discuss with independent advisers before committing to a plot.',
    image: architecture('photo-1460925895917-afdab827c52f'), alt: 'Illustrative research workspace for organising a plot purchase checklist',
    intro: 'A site visit helps you understand the land. A document review helps you understand what you are being offered. Create a file for the exact plot and have qualified independent advisers review it before paying an advance. The checklist below is a preparation tool, not a title opinion.',
    takeaway: 'Match every claim to the exact plot, the seller and a document you can independently check.',
    sources: ['buildnow', 'rera'],
    sections: [
      { id: 'identity', title: 'Identify the seller and the property', paragraphs: ['Ask for the seller’s identity, authority to transact and the documents establishing the ownership chain. Record the survey references, village, plot number, boundaries and area. If an agent or representative is involved, ask your lawyer to review their authority.', 'Have your adviser identify the relevant searches for encumbrances, disputes, restrictions and other interests. A single certificate or a registered document should not be treated as a substitute for a complete title review.'], checklist: ['Seller identity and authority', 'Ownership and link documents', 'Exact survey and plot identification', 'Independent title and encumbrance review'] },
      { id: 'approvals', title: 'Keep planning checks in a separate folder', paragraphs: ['Ask for the sanctioned layout, approval proceedings and applicable conditions. Check that the offered plot appears in the relevant approved drawing and ask about the status of any provisional or final permission.', 'Use the current Telangana approval platform and the relevant planning authority for the applicable process. Separately check TG-RERA records and obtain advice on applicability; a layout approval claim and a RERA record answer different questions.'], source: 'buildnow' },
      { id: 'ground', title: 'Reconcile documents with the ground', paragraphs: ['Take the layout drawing to the site and locate the boundaries and access. Where necessary, commission a qualified surveyor to resolve differences in area or position.', 'Ask for a written description of roads, water, drainage, power and common areas. Separate facilities you can inspect from facilities that are only proposed. Record who is responsible for delivery and maintenance.'] },
      { id: 'payment', title: 'Resolve the terms before an advance', paragraphs: ['Request a written cost schedule covering the agreed consideration and other charges. Discuss refund conditions, completion steps, timelines and the consequences of unresolved verification with your lawyer.', 'If a crucial document is missing, treat it as an open question. Pressure to pay immediately does not resolve an uncertainty in ownership, approvals or the agreed terms. Keep receipts and correspondence in the same file.'] },
    ],
  },
  {
    slug: 'understanding-layout-approval', category: 'investment',
    title: 'DTCP-approved layout: what should a buyer actually check?',
    description: 'Understand why an approval label needs a matching drawing, proceedings, plot identification and independent verification.',
    image: architecture('photo-1487958449943-2429e8be8625'), alt: 'Illustrative architectural photograph accompanying a guide to layout planning',
    intro: '“DTCP approved” is often presented as a complete answer. For a buyer, it should be the beginning of a more precise conversation: which authority, which proceeding, which drawing and which plot? The approval position must be assessed for the property actually being offered.',
    takeaway: 'Ask for the approval document and matching sanctioned plan, then verify their scope and status with the authority.',
    sources: ['buildnow', 'layout', 'rera'],
    sections: [
      { id: 'documents', title: 'Ask for the full approval record', paragraphs: ['Request the approval proceedings, reference number, date, conditions and the drawing they relate to. Check the village, survey references and layout boundary against the sale information.', 'The current BuildNow portal is the Government of Telangana’s approval platform. Use the relevant authority and its records to understand how the particular layout’s documents can be verified, including older approvals.'], source: 'buildnow' },
      { id: 'stages', title: 'Understand the stage of approval', paragraphs: ['A tentative permission and final approval should not be treated as interchangeable labels. Telangana’s published layout regularisation FAQs specifically flag layouts where plots were sold without obtaining final layout approval. Ask your adviser which stage applies and what remains outstanding.', 'A brochure, an application receipt or a reference number alone does not show that every approval condition has been satisfied. Request the document establishing the claimed status.'], source: 'layout' },
      { id: 'plot', title: 'Locate the exact plot in the drawing', paragraphs: ['Match the offered plot to the sanctioned plan. Ask a qualified professional to explain its dimensions, road frontage and adjoining uses. Check whether the land is shown as a saleable residential plot or a different designated use.', 'Do not rely on a decorative marketing plan to resolve a mismatch with the authority’s drawing. If the plot or boundary has changed, ask for the document authorising the change.'] },
      { id: 'limits', title: 'Approval does not answer every purchase question', paragraphs: ['Planning permission, ownership, site delivery and purchase terms need separate review. Check TG-RERA information and applicability independently, rather than assuming one approval replaces another.', 'When exploring Central Park, use the supplied master plan to frame your questions. Request the relevant approval proceedings and current status from the project team and verify them independently before making a commitment.'] },
    ], projectContext: 'Understand the layout before choosing a plot.', masterPlan: true,
  },
  {
    slug: 'well-planned-residential-layout', category: 'lifestyle',
    title: 'What should a well-planned residential layout include?',
    description: 'A practical walk-through of internal roads, parks, water, drainage and maintenance when evaluating a plotted township.',
    image: '/images/CentralPark.jpeg', alt: 'Supplied Central Park site photograph accompanying a residential layout guide',
    intro: 'A layout is more than a collection of plot numbers. Roads, open spaces and services shape how a neighbourhood can function. Read the plan first, then use a site visit to understand how the proposed arrangement relates to what is on the ground.',
    takeaway: 'Assess the layout as a connected place: how people arrive, move, use open space and maintain essential services.',
    sources: ['buildnow'], projectContext: 'See how a real layout brings these questions together.', masterPlan: true,
    sections: [
      { id: 'roads', title: 'Internal roads should make everyday movement understandable', paragraphs: ['Trace the journey from the main entrance to the plot. Consider junctions, turning space, pedestrian movement and how emergency or service vehicles would reach the site. Compare road dimensions and boundaries with the sanctioned plan.', 'A road drawn on a plan and a completed road are separate observations. Record the current surface, drainage edges and any work still required. Ask who will maintain the road after handover.'] },
      { id: 'parks', title: 'Open spaces need a purpose and a status', paragraphs: ['Look at where parks and open spaces sit in relation to homes and roads. Consider whether they would be easy to reach and useful to different age groups.', 'Ask how the spaces are designated in the approved plan, who will maintain them and which facilities are delivered today. Renderings can illustrate an idea; they cannot demonstrate completion.'] },
      { id: 'services', title: 'Look closely at water, drainage and power', paragraphs: ['Ask for the proposed or existing water source, distribution arrangements and maintenance responsibility. Discuss drainage routes and disposal arrangements with a qualified professional rather than judging them only by appearance.', 'During the visit, ask the team to show the installed services and explain what remains to be delivered. Written specifications and responsibility for future costs are more useful than a broad “all amenities” statement.'] },
      { id: 'inspection', title: 'Take the master plan on your site visit', paragraphs: ['Mark the entrance, plot position, adjoining uses and designated common spaces before you visit. Use the drawing to ask consistent questions and record differences for clarification.', 'The supplied Central Park blueprint is available on its project page with an interactive viewer. Use it as a starting point for discussion, then request the sanctioned drawing and current infrastructure information for independent review.'] },
    ],
  },
  {
    slug: 'is-an-open-plot-right-for-you', category: 'investment',
    title: 'Is an open plot the right property decision for you?',
    description: 'Think through purpose, holding costs, liquidity and uncertainty before comparing plotted developments.',
    image: architecture('photo-1600607687939-ce8a6c25118c'), alt: 'Illustrative residential architecture for considering future property use',
    intro: 'An open plot can serve very different purposes: a future home, a long-term land holding or a planned relocation. A useful decision starts with that purpose and your capacity to hold the property, rather than a promised future price.',
    takeaway: 'Choose a property only after testing whether its use, costs and uncertainty fit your circumstances.',
    sources: ['rera', 'buildnow'],
    sections: [
      { id: 'purpose', title: 'Write down the intended use', paragraphs: ['If you plan to build, consider the likely timing, permitted use, services and daily journeys. If your plans are uncertain, ask whether holding land would limit more immediate household needs.', 'Compare an open plot with alternatives that solve the same problem. A future building site, a ready home and a rental investment have different costs and responsibilities.'] },
      { id: 'costs', title: 'Budget beyond the purchase price', paragraphs: ['Request a written breakdown of transaction costs and recurring obligations. Ask about maintenance, site security, boundary work and any future infrastructure contributions.', 'Consider how you would fund a later building project. Avoid basing the budget on an assumed appreciation rate or an expectation that resale will always be quick.'] },
      { id: 'liquidity', title: 'Think about the exit before the entry', paragraphs: ['Ask what evidence supports current demand for comparable properties. An advertised asking price is different from a completed transaction, and a regional development narrative is different from evidence of buyers for this plot.', 'Consider what happens if your circumstances change earlier than expected. Property can take time to sell, and the cost and timing of an exit cannot be guaranteed.'] },
      { id: 'decision', title: 'Use a written decision record', paragraphs: ['List what is known, what needs verification and what would cause you to walk away. Include title review, approvals, access, site conditions and payment terms in that record.', 'Use independent legal and financial advice for your situation. If the purchase only makes sense with a precise future price increase, revisit the assumptions before committing.'] },
    ],
  },
];

export const insights = articles.map((article) => {
  const words = [article.intro, article.takeaway, ...article.sections.flatMap((s) => [s.title, ...s.paragraphs, ...(s.checklist || [])])].join(' ').split(/\s+/).length;
  return { ...article, published: '2026-11-14', updated: '2026-11-14', author: 'SSP Editorial Team', readingTime: Math.max(2, Math.ceil(words / 200)) };
});
export const getInsightCategory = (id) => insightCategories.find((category) => category.id === id);
export const formatInsightDate = (date) => new Date(`${date}T00:00:00+05:30`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' });
