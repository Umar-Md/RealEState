"use client";

import { useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Crown,
  FileText,
  Handshake,
  Headset,
  Mail,
  Megaphone,
  Monitor,
  Phone,
  ShieldCheck,
  Target,
  Trophy,
  Users,
  Wallet,
  X,
} from "lucide-react";

const EMAIL = "info@bsomconsults.com";

const WHATSAPP = "919989663776";

// Add your Google Form URL here whenever it is ready.

const GOOGLE_FORM_URL = "";

const positions = [
  {
    id: "01",

    role: "HR Manager cum Administration",

    designation: "HR Manager",

    salary: "₹20,000 – ₹25,000",

    experience: "As per management requirements",

    reporting: "CEO / Managing Director",

    purpose:
      "Manage human resources, recruitment, employee administration, and organizational discipline.",

    responsibilities: [
      "Recruitment, screening, interviewing, and onboarding.",

      "Employee attendance, leave and payroll coordination.",

      "HR policies, employee records and documentation.",

      "Office administration and internal coordination.",

      "Employee performance monitoring and training.",

      "Statutory HR compliance coordination.",
    ],

    kpis: [
      "Recruitment turnaround",

      "Employee attendance",

      "Employee retention",

      "Documentation accuracy",

      "Administrative efficiency",
    ],

    icon: Users,

    category: "Management",
  },

  {
    id: "02",

    role: "Digital & Social Media Lead",

    designation: "Digital Head & Digital Marketing / Social Media Marketing",

    salary: "₹35,000",

    experience: "As per management requirements",

    reporting: "CEO / MD, with functional coordination with CMO",

    purpose:
      "Build SSP's digital presence, brand identity, online visibility, and digital enquiry lead generation.",

    responsibilities: [
      "Develop digital marketing strategies.",

      "Manage LinkedIn, Facebook, Instagram and YouTube.",

      "Create property promotional content, posters and campaigns.",

      "Manage website updates and SEO activities.",

      "Execute paid advertising and lead-generation campaigns.",

      "Monitor digital analytics and campaign performance.",
    ],

    kpis: [
      "Qualified digital leads",

      "Website traffic",

      "Engagement",

      "Campaign ROI",

      "Conversion contribution",
    ],

    icon: Megaphone,

    category: "Marketing",
  },

  {
    id: "03",

    role: "IT Manager",

    designation: "IT Head",

    salary: "₹30,000 – ₹50,000",

    experience: "1–3 Years",

    reporting: "CTO / MD",

    purpose:
      "Manage IT infrastructure, software applications, technology systems and digital transformation.",

    responsibilities: [
      "Manage company IT infrastructure and systems.",

      "Coordinate website and CRM development.",

      "Implement AI-enabled business solutions.",

      "Maintain data security, backups, and access controls.",

      "Support employee technology requirements.",

      "Manage software vendors and IT budgets.",
    ],

    kpis: [
      "System uptime",

      "Data security",

      "Support resolution time",

      "Technology adoption",

      "IT cost efficiency",
    ],

    icon: Monitor,

    category: "Technology",
  },

  {
    id: "04",

    role: "Sales Lead",

    designation: "Sales Head",

    salary: "₹30,000 – ₹35,000",

    experience: "1–5 Years",

    reporting: "CMO",

    purpose:
      "Drive property sales, revenue generation, customer acquisition and sales-team performance.",

    responsibilities: [
      "Develop monthly and quarterly sales plans.",

      "Generate and manage buyer and investor leads.",

      "Coordinate property presentations and site visits.",

      "Manage sales executives and channel partners.",

      "Negotiate commercial terms within approved authority.",

      "Monitor bookings, follow-ups, and closures.",

      "Maintain sales pipeline and CRM records.",
    ],

    kpis: [
      "Monthly sales revenue",

      "Qualified leads",

      "Site visits",

      "Booking conversion",

      "Collections",

      "Customer satisfaction",
    ],

    icon: BriefcaseBusiness,

    category: "Business",
  },

  {
    id: "05",

    role: "Marketing Lead",

    designation: "Marketing Head",

    salary: "₹30,000 – ₹35,000",

    experience: "1–5 Years",

    reporting: "CMO",

    purpose:
      "Develop market positioning, promotional strategies, and project marketing campaigns.",

    responsibilities: [
      "Conduct market research and competitor analysis.",

      "Prepare project marketing strategies.",

      "Develop advertising and promotional campaigns.",

      "Coordinate offline and online marketing.",

      "Build brand awareness and market visibility.",

      "Coordinate marketing agencies and vendors.",

      "Generate and evaluate marketing leads.",
    ],

    kpis: [
      "Marketing-qualified leads",

      "Campaign performance",

      "Cost per lead",

      "Brand visibility",

      "Marketing ROI",
    ],

    icon: Target,

    category: "Marketing",
  },

  {
    id: "06",

    role: "Client Support & Relations Lead",

    designation: "CRM Manager",

    salary: "₹25,000 – ₹30,000",

    experience: "1–5 Years",

    reporting: "CMO",

    purpose:
      "Develop and maintain relationships with customers, agents, brokers, investors, and business partners.",

    responsibilities: [
      "Manage customer enquiries and complaints.",

      "Maintain client and partner databases.",

      "Coordinate customer meetings and follow-ups.",

      "Manage agent and broker relationship networks.",

      "Collect customer feedback.",

      "Coordinate post-sales support.",

      "Maintain CRM records and relationship reports.",
    ],

    kpis: [
      "Response time",

      "Enquiry resolution",

      "Customer satisfaction",

      "Follow-up completion",

      "Partner retention",
    ],

    icon: Headset,

    category: "Operations",
  },

  {
    id: "07",

    role: "Research & Projects Lead",

    designation: "Project Manager",

    salary: "₹25,000 – ₹30,000",

    experience: "As per management requirements",

    reporting: "CEO / MD, with project coordination across departments",

    purpose:
      "Identify emerging real estate opportunities through market research, project analysis and data-driven insights.",

    responsibilities: [
      "Research real estate market demand and supply.",

      "Identify emerging locations and growth corridors.",

      "Analyse infrastructure and industrial development.",

      "Prepare project feasibility and competitor reports.",

      "Maintain property and project data banks.",

      "Coordinate project documentation and updates.",

      "Support management with investment research.",
    ],

    kpis: [
      "Research accuracy",

      "Reports delivered",

      "Project pipeline development",

      "Data quality",

      "Project coordination",
    ],
    icon: Building2,

    category: "Strategy",
  },

  {
    id: "08",

    role: "Finance & Accounts",

    designation: "Accounts Head",

    salary: "₹20,000 – ₹25,000",

    experience: "As per management requirements",

    reporting: "CEO / MD",

    purpose:
      "Maintain financial discipline, accounting systems, taxation and financial reporting.",

    responsibilities: [
      "Maintain daily accounting transactions.",

      "Prepare monthly financial statements.",

      "Manage GST, TDS and tax documentation.",

      "Monitor cash flow, expenses and budgets.",

      "Maintain vendor and customer accounts.",

      "Coordinate statutory audits and compliance.",

      "Prepare payroll and financial reports.",
    ],

    kpis: [
      "Accounting accuracy",

      "Timely reporting",

      "Statutory compliance",

      "Budget control",

      "Reconciliation",
    ],

    icon: Wallet,

    category: "Finance",
  },

  {
    id: "09",

    role: "Management & Leadership",

    designation: "Independent Director",

    salary: "₹50,000",

    experience: "As per management requirements",

    reporting: "Board of Directors",

    purpose:
      "Provide overall corporate leadership, strategic direction, and organizational governance.",

    responsibilities: [
      "Establish corporate vision and business objectives.",

      "Approve annual business plans and budgets.",

      "Monitor organizational performance.",

      "Supervise department heads.",

      "Develop strategic partnerships and alliances.",

      "Oversee corporate governance and compliance.",

      "Review financial performance and business risks.",

      "Lead organizational expansion and development.",
    ],

    kpis: [
      "Revenue growth",

      "Profitability",

      "Operational performance",

      "Strategic partnerships",

      "Governance",

      "Business sustainability",
    ],

    icon: Crown,

    category: "Leadership",
  },

  {
    id: "10",

    role: "CMO / Business Strategic Head",

    designation: "Chief Marketing Officer",

    salary: "₹50,000",

    experience: "As per management requirements",

    reporting: "Board of Directors",

    purpose:
      "Lead business development, marketing strategy, project commercialization and strategic growth.",

    responsibilities: [
      "Develop corporate marketing and business strategies.",

      "Identify new real estate business opportunities.",

      "Lead sales, marketing, and CRM functions.",

      "Develop developer, investor, and channel partnerships.",

      "Oversee project marketing and commercialization.",

      "Monitor property portfolio and project performance.",

      "Develop new revenue streams and business alliances.",

      "Coordinate with research and project teams.",
    ],

    kpis: [
      "Business development",

      "Project revenue",

      "Sales growth",

      "Partnership development",

      "Market expansion",

      "Portfolio performance",
    ],

    icon: Trophy,

    category: "Leadership",
  },
];

// Separate icon component for the research role.

function SearchIcon(props) {
  return <Building2 {...props} />;
}

const employeePolicies = [
  "Follow organizational policies and professional ethics.",

  "Maintain daily work updates and monthly performance reports.",

  "Use company CRM and approved communication channels.",

  "Maintain confidentiality of company and customer information.",

  "Coordinate effectively with other departments.",

  "Meet assigned targets and deadlines.",

  "Maintain transparency and accountability.",
];

const values = [
  {
    icon: Users,

    title: "A Strong Team",

    description: "For a Stronger Tomorrow",
  },

  {
    icon: Handshake,

    title: "Collaboration",

    description: "For Growth",
  },

  {
    icon: Target,

    title: "Excellence",

    description: "In Execution",
  },

  {
    icon: Trophy,

    title: "Creating Value",

    description: "For Stakeholders",
  },
];

export default function CareersContent() {
  const [selectedJob, setSelectedJob] = useState(null);

  const applicationMessage = selectedJob
    ? `Hello, I am interested in applying for the ${selectedJob.role} position at Swayam Sampada Properties. Please find my resume and application details.`
    : "Hello, I am interested in career opportunities at Swayam Sampada Properties.";

  const emailSubject = selectedJob
    ? `Application for ${selectedJob.role} - Swayam Sampada Properties`
    : "Career Application - Swayam Sampada Properties";

  const whatsappUrl = `https\://wa.me/${WHATSAPP}?text=${encodeURIComponent(applicationMessage)}`;

  return (
    <main className="overflow-hidden bg-[#F8F6EF]">
      {/* HERO */}

      <section className="relative isolate overflow-hidden bg-[#102E27] pb-24 pt-36 lg:pb-32 lg:pt-44">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#C6A15B]/20" />

        <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-[#C6A15B]/20" />

        <div className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#C6A15B]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/40 bg-white/5 px-5 py-2">
                <span className="h-2 w-2 rounded-full bg-[#C6A15B]" />

                <span className="text-xs font-semibold uppercase tracking-[3px] text-[#E2C78E]">
                  Careers at SSP
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Our People.
                <br />
                <span className="text-[#D6B46D]">Our Strength.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                Building a professional team for a greater tomorrow. Discover
                career opportunities, explore responsibilities and become part
                of our journey towards sustainable growth.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#opportunities"
                  className="group inline-flex items-center gap-3 bg-[#C6A15B] px-7 py-4 text-sm font-bold text-[#163D32] transition-all duration-300 hover:bg-white"
                >
                  Explore Positions
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#employee-policy"
                  className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-all hover:border-[#C6A15B] hover:text-[#D6B46D]"
                >
                  Employee Policy
                </a>
              </div>
            </div>

            <div className="relative rounded-[30px] border border-[#C6A15B]/30 bg-white/[0.06] p-7 backdrop-blur-xl sm:p-10">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[3px] text-[#D6B46D]">
                    Together We Grow
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-white">
                    Building Our Future
                  </h2>
                </div>

                <div className="rounded-2xl bg-[#C6A15B]/15 p-4 text-[#D6B46D]">
                  <Building2 size={30} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/[0.06] p-6">
                  <p className="text-4xl font-bold text-[#D6B46D]">10</p>

                  <p className="mt-2 text-sm text-white/70">Job Positions</p>
                </div>

                <div className="rounded-2xl bg-white/[0.06] p-6">
                  <p className="text-4xl font-bold text-[#D6B46D]">01</p>

                  <p className="mt-2 text-sm text-white/70">Shared Vision</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4 rounded-2xl border border-white/10 p-5">
                <div className="rounded-xl bg-[#C6A15B]/15 p-3 text-[#D6B46D]">
                  <BriefcaseBusiness size={25} />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Your Skills. Our Vision.
                  </p>

                  <p className="mt-1 text-sm text-white/60">
                    Let's build something meaningful together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />
      </section>

      {/* INTRODUCTION */}

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#B18A43]">
                Swayam Sampada Properties Pvt. Ltd.
              </p>

              <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#163D32] sm:text-5xl">
                Find Your Role.
                <br />
                Shape Our Future.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-gray-600 lg:justify-self-end">
              We bring together professionals across human resources,
              technology, sales, marketing, finance, research and leadership.
              Explore each position to understand its responsibilities,
              reporting structure and performance expectations.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 border-y border-[#163D32]/10 py-8 md:grid-cols-4">
            {[
              ["10", "Job Positions"],

              ["06", "Core Functions"],

              ["01", "Shared Vision"],

              ["100%", "Accountability"],
            ].map(([number, label]) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-[#163D32] sm:text-4xl">
                  {number}
                </p>

                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB POSITIONS */}

      <section
        id="opportunities"
        className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#B18A43]">
              Department-wise Opportunities
            </p>

            <h2 className="text-3xl font-bold text-[#163D32] sm:text-5xl">
              Job Descriptions & Responsibilities
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-500">
              Explore the detailed job descriptions, proposed compensation,
              reporting relationships and performance indicators for each role.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-2 xl:grid-cols-3">
            {positions.map((position) => {
              const Icon = position.icon;

              return (
                <article
                  key={position.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#163D32]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A15B]/70 hover:shadow-lg hover:shadow-[#163D32]/10"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-[#163D32] to-[#C6A15B]" />

                  <div className="flex flex-col p-3.5">
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#163D32] text-[#D6B46D]">
                        <Icon size={16} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-[#A7803E]">
                          {position.category}
                        </p>
                        <h3 className="mt-0.5 line-clamp-2 text-sm font-bold leading-5 text-[#163D32]">
                          {position.role}
                        </h3>
                      </div>

                      <span className="text-sm font-bold text-[#163D32]/30">
                        {position.id}
                      </span>
                    </div>

                    <p className="mt-1.5 line-clamp-2 pl-10 text-[11px] leading-4 text-gray-500">
                      {position.designation}
                    </p>

                    <div className="mt-3 grid grid-cols-2 divide-x divide-[#163D32]/10 rounded-lg bg-[#F8F6EF] px-2.5 py-2">
                      <div className="min-w-0 pr-2">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                          Monthly Salary
                        </p>
                        <p className="mt-0.5 truncate text-xs font-bold text-[#163D32]">
                          {position.salary}
                        </p>
                      </div>
                      <div className="min-w-0 pl-2">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                          Experience
                        </p>
                        <p className="mt-0.5 line-clamp-2 text-xs font-medium leading-4 text-gray-700">
                          {position.experience}
                        </p>
                      </div>
                    </div>

                    <div className="mt-2 flex min-w-0 items-center gap-1.5 text-[11px] text-gray-500">
                      <Building2
                        size={13}
                        className="shrink-0 text-[#B18A43]"
                      />
                      <span className="font-semibold text-gray-600">
                        Reports to:
                      </span>
                      <span className="truncate">{position.reporting}</span>
                    </div>

                    <div className="mt-2 border-t border-[#163D32]/10 pt-2">
                      <details className="group/details">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-xs font-bold text-[#163D32] marker:hidden">
                          View Job Description & KPIs
                          <ChevronDown
                            size={16}
                            className="shrink-0 text-[#B18A43] transition-transform duration-300 group-open/details:rotate-180"
                          />
                        </summary>

                        <div className="space-y-4 pt-3">
                          <div>
                            <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[1.5px] text-[#B18A43]">
                              Job Purpose
                            </p>
                            <p className="text-xs leading-6 text-gray-600">
                              {position.purpose}
                            </p>
                          </div>

                          <div className="border-t border-gray-100 pt-3">
                            <p className="mb-2 text-[9px] font-bold uppercase tracking-[1.5px] text-[#B18A43]">
                              Key Responsibilities
                            </p>
                            <ul className="space-y-2">
                              {position.responsibilities.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-xs leading-5 text-gray-600"
                                >
                                  <CheckCircle2
                                    size={14}
                                    className="mt-0.5 shrink-0 text-[#C6A15B]"
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="rounded-lg bg-[#163D32] p-3">
                            <p className="mb-2 text-[9px] font-bold uppercase tracking-[1.5px] text-[#D6B46D]">
                              Performance Indicators (KPIs)
                            </p>
                            <ul className="space-y-2">
                              {position.kpis.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-xs leading-5 text-white/85"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6B46D]" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </details>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedJob(position)}
                      className="group/apply mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#163D32] px-3 py-2 text-xs font-bold text-white transition-colors duration-300 hover:bg-[#C6A15B] hover:text-[#163D32]"
                    >
                      Apply Now
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/apply:translate-x-1 group-hover/apply:-translate-y-1"
                      />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMON EMPLOYEE POLICY */}

      <section
        id="employee-policy"
        className="bg-[#F8F6EF] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#163D32] text-[#D6B46D]">
              <ShieldCheck size={32} />
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#B18A43]">
              Our Workplace Standards
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#163D32] sm:text-5xl">
              Common Employee Performance Policy
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              We believe that professional ethics, transparency, accountability
              and collaboration are essential for organizational success.
            </p>

            <div className="mt-8 rounded-2xl bg-[#163D32] p-6">
              <div className="flex items-center gap-3 text-[#D6B46D]">
                <ClipboardCheck size={23} />

                <span className="font-bold">Performance Review</span>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/80">
                Monthly departmental review and quarterly management evaluation.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#163D32]/10 bg-white p-7 shadow-sm sm:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl bg-[#C6A15B]/15 p-3 text-[#A7803E]">
                <FileText size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#163D32]">
                  Employee Expectations
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Standards applicable to all employees
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {employeePolicies.map((policy, index) => (
                <div key={policy} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8F6EF] text-xs font-bold text-[#A7803E]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-1 text-sm leading-6 text-gray-600">
                    {policy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY VALUES */}

      <section className="bg-[#102E27] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#D6B46D]">
              What Drives Us
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-5xl">
              Stronger Together
            </h2>

            <p className="mt-5 leading-7 text-white/60">
              Our values define how we work, collaborate and create meaningful
              value for everyone associated with us.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#C6A15B]/60 hover:bg-white/[0.08]"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C6A15B]/15 text-[#D6B46D]">
                    <Icon size={30} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/55">
                    {value.description}
                  </p>

                  <div className="mx-auto mt-6 h-1 w-10 rounded-full bg-[#C6A15B]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-[#F8F6EF] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[30px] bg-[#C6A15B] px-7 py-14 sm:px-12 lg:px-20 lg:py-16">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#163D32]/15" />

          <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#163D32]/70">
                Be Part of Our Journey
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#163D32] sm:text-5xl">
                Let's Build a
                <br />
                Greater Tomorrow.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-[#163D32]/75">
                Interested in joining our team? Explore the available positions
                and connect with our recruitment team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION MODAL */}

      {selectedJob !== undefined && selectedJob !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-[#071B16]/75 p-4 backdrop-blur-sm"
          onClick={() => setSelectedJob(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-title"
            className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl bg-[#F8F6EF] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative overflow-hidden bg-[#163D32] px-7 py-8 sm:px-9">
              <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full border border-white/10" />

              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                aria-label="Close application options"
                className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                <X size={20} />
              </button>

              <p className="relative text-xs font-bold uppercase tracking-[3px] text-[#D6B46D]">
                Application Process
              </p>

              <h2
                id="application-title"
                className="relative mt-4 text-2xl font-bold text-white sm:text-3xl"
              >
                Apply for a Position
              </h2>

              <p className="relative mt-3 text-sm leading-6 text-white/65">
                {selectedJob
                  ? `You are applying for ${selectedJob.role}. Choose your preferred application method.`
                  : "Choose your preferred method to connect with our recruitment team."}
              </p>
            </div>

            <div className="space-y-4 p-6 sm:p-8">
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(applicationMessage)}`}
                className="group flex items-center gap-4 rounded-2xl border border-[#163D32]/10 bg-white p-5 transition-all hover:border-[#C6A15B] hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#163D32] text-[#D6B46D]">
                  <Mail size={23} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-[#163D32]">Apply via Email</h3>

                  <p className="mt-1 break-all text-sm text-gray-500">
                    {EMAIL}
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-[#A7803E] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href={whatsappUrl}
                target="\_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-[#163D32]/10 bg-white p-5 transition-all hover:border-[#C6A15B] hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#163D32] text-[#D6B46D]">
                  <Phone size={23} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-[#163D32]">
                    Apply via WhatsApp
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">+91 99896 63776</p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-[#A7803E] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {GOOGLE_FORM_URL ? (
                <a
                  href={GOOGLE_FORM_URL}
                  target="\_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-[#163D32]/10 bg-white p-5 transition-all hover:border-[#C6A15B] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#163D32] text-[#D6B46D]">
                    <FileText size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-[#163D32]">
                      Apply via Google Form
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Complete the application form
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-[#A7803E] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-2xl border border-dashed border-[#C6A15B]/70 bg-white/60 p-5 opacity-75">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#163D32]/10 text-[#163D32]">
                    <FileText size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-[#163D32]">
                      Apply via Google Form
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Application form coming soon
                    </p>
                  </div>

                  <Clock3 size={19} className="shrink-0 text-[#A7803E]" />
                </div>
              )}

              <p className="pt-2 text-center text-xs leading-6 text-gray-500">
                Please include your updated resume and mention the position you
                are applying for.
              </p>

              <p className="text-center text-[10px] font-semibold uppercase tracking-wider text-[#A7803E]">
                Swayam Sampada Properties Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
