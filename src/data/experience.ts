// Single source for experience entries. Facts come from Eli's CV (v0.8, ~/Dev/grad-apps/cv).
// Keep company detail at CV level: nothing beyond what the CV already makes public.

export interface Metric {
  value: string;
  label: string;
}

export interface Workstream {
  title: string;
  did: string;
  outcome?: string;
}

export interface Role {
  slug?: string; // internships get their own page; research stays on the list only
  kind: 'Internship' | 'Research';
  company: string;
  role: string;
  place: string;
  dates: string;
  area: string;
  summary: string;
  metrics: Metric[];
  work: Workstream[];
  skills: string[];
}

export const roles: Role[] = [
  {
    slug: 'micron',
    kind: 'Internship',
    company: 'Micron Technology',
    role: 'Facilities Chemical Engineering Intern',
    place: 'Boise, ID',
    dates: 'May – Aug 2026',
    area: 'Semiconductor fab chemical systems',
    summary:
      'Facilities chemical engineering at a semiconductor fab site. My work split between data and reliability: an AI lookup tool for chemical-system records, tank integrity, and alarm history.',
    metrics: [
      { value: '30 min → seconds', label: 'record lookup time' },
      { value: '200+', label: 'chemical systems covered' },
      { value: '20 years', label: 'of alarm records sorted' },
      { value: '4 teams', label: 'use the integrity standard' },
    ],
    work: [
      {
        title: 'AI lookup agent for chemical-system records',
        did: 'Worked with Micron’s Enable AI team to define the structure and build plan for a Copilot Studio agent that joins the site’s master and chemical-systems reference databases.',
        outcome: 'The agent returns cited valve, tool and project records across 200+ systems, cutting lookup time from about 30 minutes to seconds. It is now piloted by the site chemical engineering team.',
      },
      {
        title: 'Corrosion and remaining life of a solvent waste tank',
        did: 'Closed a 10-year baseline data gap on a safety-critical solvent waste tank and quantified its corrosion rate and remaining life.',
        outcome: 'The pilot method I created is now used to set inspection intervals for the remaining assets.',
      },
      {
        title: 'Alarm history and root causes',
        did: 'Consolidated 20 years of alarm records into technician reference sheets.',
        outcome: 'Classified 33 recurring alarm conditions and traced their root causes.',
      },
      {
        title: 'Tank and vessel integrity standard',
        did: 'Combined API and ASTM codes into one inspection specification for the site.',
        outcome: 'Became the tank and vessel integrity standard for 4 facilities teams.',
      },
    ],
    skills: ['Copilot Studio', 'database design', 'corrosion and remaining-life analysis', 'API / ASTM codes', 'root cause analysis'],
  },
  {
    slug: 'panasonic',
    kind: 'Internship',
    company: 'Panasonic Energy of North America',
    role: 'Cell and Process Engineering Intern',
    place: 'Sparks, NV',
    dates: 'May – Aug 2025',
    area: 'Lithium-ion battery cell manufacturing',
    summary:
      'Cell and process engineering on high-volume battery lines, focused on inspection steps that were rejecting good cells. The work mixed physical modeling with production data.',
    metrics: [
      { value: '50%', label: 'fewer false rejects on tab folding' },
      { value: '~64,000', label: 'cells recovered per year (est.)' },
      { value: '3 lines', label: 'leak inspection moved DC → AC' },
    ],
    work: [
      {
        title: 'High-voltage leak inspection: an RC circuit model',
        did: 'Modeled particle-induced current spikes as an RC circuit to support moving high-voltage leak inspection from DC to AC on 3 lines.',
        outcome: 'Reject re-runs and teardowns confirmed the change removed false leak rejects while still catching real shorts.',
      },
      {
        title: 'Anode tab-folding vision inspection',
        did: 'Refined the edge-intensity thresholds and added a pixel-count check to the vision system.',
        outcome: 'Cut the false-reject rate by 50%, recovering an estimated 64,000 cells per year.',
      },
      {
        title: 'Linking machine alarms to defects',
        did: 'Built SQL pipelines from the MES and used Python and JMP to correlate machine alarms with defect patterns across production databases.',
      },
    ],
    skills: ['SQL', 'Python', 'JMP', 'MES data', 'vision inspection', 'circuit modeling'],
  },
  {
    kind: 'Research',
    company: 'Dr. Mark Nesbit Lab, UNR Department of Chemistry',
    role: 'Undergraduate Researcher',
    place: 'Reno, NV',
    dates: 'Mar 2024 – Oct 2025',
    area: 'Organometallic catalysis',
    summary:
      'Developed a vanadium-based catalyst system for the CO-to-methanol reaction with graduate students, covering synthesis, catalysis and mechanistic studies. Used GC-MS and NMR for Suzuki coupling development, and Schlenk-line, glovebox and high-vacuum techniques for air-sensitive synthesis.',
    metrics: [],
    work: [],
    skills: ['GC-MS', 'NMR', 'Schlenk line', 'glovebox'],
  },
];

export const internships = roles.filter((r) => r.slug);
