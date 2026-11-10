// Single source for experience text. Facts come from Eli's CV (v0.8, ~/Dev/grad-apps/cv).
// Keep company detail at CV level: nothing beyond what the CV already makes public.

export interface Role {
  slug?: string; // internships get their own page; research stays on the list only
  company: string;
  role: string;
  place: string;
  dates: string;
  blurb: string;
  summary: string;
  work: { title: string; text: string }[];
  tools?: string;
}

export const roles: Role[] = [
  {
    slug: "micron",
    company: "Micron Technology",
    role: "Facilities Chemical Engineering Intern",
    place: "Boise, ID",
    dates: "May to Aug 2026",
    // blurb and summary: Eli's LinkedIn description, verbatim (11/10)
    blurb:
      "Developed and implemented a comprehensive tank and vessel integrity standard across multiple facility teams to ensure operational reliability and regulatory compliance. Coordinated cross-functional baseline inspections to establish a centralized asset tracking system. Additionally, streamlined facility operations by prototyping an AI-driven query agent for chemical systems and consolidating historical alarm data to optimize technician onboarding.",
    summary:
      "Developed and implemented a comprehensive tank and vessel integrity standard across multiple facility teams to ensure operational reliability and regulatory compliance. Coordinated cross-functional baseline inspections to establish a centralized asset tracking system. Additionally, streamlined facility operations by prototyping an AI-driven query agent for chemical systems and consolidating historical alarm data to optimize technician onboarding.",
    work: [
      {
        title: "An AI agent for chemical-system records",
        text: "Finding a valve, tool or project record used to take about 30 minutes. I worked with Micron's Enable AI team to define the structure and build plan for a Copilot Studio agent that joins the site's master and chemical-systems reference databases. It returns cited records across 200+ systems in seconds, and the site chemical engineering team is now piloting it.",
      },
      {
        title: "Corrosion on a solvent waste tank",
        text: "A safety-critical solvent waste tank had a 10-year gap in its baseline data. I closed it. From there I worked out the tank's corrosion rate and remaining life, and the pilot method I set up for it is now used to set inspection intervals for the remaining assets.",
      },
      {
        title: "Twenty years of alarms",
        text: "I went through 20 years of alarm records and turned them into reference sheets for technicians. That meant sorting out 33 recurring alarm conditions and tracing their root causes.",
      },
      {
        title: "Tank and vessel integrity standard",
        text: "I wrote the site's tank and vessel integrity standard, combining the API and ASTM codes into one inspection spec for 4 facilities teams.",
      },
    ],
    tools: "Copilot Studio, database design, corrosion and remaining-life analysis, API and ASTM codes, root cause analysis.",
  },
  {
    slug: "panasonic",
    company: "Panasonic Energy of North America",
    role: "Cell and Process Engineering Intern",
    place: "Sparks, NV",
    dates: "May to Aug 2025",
    // blurb and summary: Eli's LinkedIn description, verbatim (11/10)
    blurb:
      "Optimized high-volume manufacturing processes by significantly reducing false defect detections and improving machine reliability. Engineered data pipelines using SQL, Python, and JMP to analyze production trends and validate inspection methodologies. Collaborated with international technical teams to implement testing improvements, update standard operating procedures, and enhance overall line efficiency.",
    summary:
      "Optimized high-volume manufacturing processes by significantly reducing false defect detections and improving machine reliability. Engineered data pipelines using SQL, Python, and JMP to analyze production trends and validate inspection methodologies. Collaborated with international technical teams to implement testing improvements, update standard operating procedures, and enhance overall line efficiency.",
    work: [
      {
        title: "High-voltage leak test",
        text: "Particles caused current spikes during the DC high-voltage leak test, so cells that weren't leaking got rejected anyway. I modeled the spikes as an RC circuit. That model supported moving the test to AC on 3 lines, and reject re-runs and teardowns confirmed the AC test removed the false leak rejects while still catching real shorts.",
      },
      {
        title: "Anode tab-folding inspection",
        text: "The vision check on anode tab folding was rejecting too many good cells. I refined its edge-intensity thresholds and added a pixel-count check, which cut false rejects by 50%. That recovers an estimated 64,000 cells a year.",
      },
      {
        title: "Linking machine alarms to defects",
        text: "I built SQL pipelines from the MES, then used Python and JMP to match machine alarms against defect patterns across the production databases.",
      },
    ],
    tools: "SQL, Python, JMP, MES data, vision inspection, circuit modeling.",
  },
  {
    company: "Nesbit Lab, UNR Department of Chemistry",
    role: "Undergraduate Researcher",
    place: "Reno, NV",
    dates: "Mar 2024 to Oct 2025",
    blurb:
      "Worked with graduate students on a vanadium-based catalyst for converting CO to methanol, covering synthesis, catalysis and mechanistic studies. Also ran GC-MS and NMR for Suzuki coupling work and did air-sensitive synthesis on the Schlenk line, in the glovebox and under high vacuum.",
    summary: "",
    work: [],
  },
];

export const internships = roles.filter((r) => r.slug);
