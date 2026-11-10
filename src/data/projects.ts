// Single source for project text. Pages read from here; edit wording here, not in the pages.
// Facts come from Eli's CV (v0.8) and his project repos. Keep it first person and plain.

export interface Project {
  slug: string;
  title: string;
  context: string;
  status: string;
  blurb: string;
  intro: string[];
  did: string[];
  now: string;
  figure?: { src: string; alt: string; caption: string };
  repo?: string;
}

export const projects: Project[] = [
  {
    slug: "hybrid-fermentation",
    title: "Hybrid model for wine fermentation",
    context: "CHE 440 Reactor Design, Fall 2026",
    status: "In progress",
    blurb:
      "Monod-type kinetics do most of the work, and a small neural network learns the lag phase they miss. Group project on 216 batch fermentations.",
    intro: [
      "Wine yeast fermented at 12 and 18 °C sits in a long lag phase before it takes off. Standard Monod kinetics can't capture that. A pure ML model can fit the curves, but nothing stops it from predicting more ethanol than the sugar allows.",
      "So the question is simple: does a hybrid model predict runs it hasn't seen better than either approach alone?",
    ],
    did: [
      "Rebuilt the dataset from the raw open data, 216 batch runs of S. cerevisiae over 9 strains, 3 temperatures and 2 sugar levels. It matches the team's independent version to within 1e-7 g/L on all 1,950 samples.",
      "Fitting a mechanistic model by nonlinear least squares, with Monod growth, ethanol inhibition, Luedeking-Piret ethanol production, first-order death and Arrhenius temperature terms.",
      "Training gradient-boosted trees on the same held-out runs as a data-only baseline.",
      "Building a hybrid neural ODE that keeps the mass balances and learns a correction for the lag phase, following Psichogios and Ungar (1992).",
      "Last step: use the best model to pick a fermentation temperature between 12 and 25 °C for ethanol productivity. Every batch has to ferment dry, and a jacket energy balance sets the cooling duty.",
    ],
    now: "Still in progress. The final report is due November 30, 2026, and the code goes public after that with the team's OK.",
    repo: "https://github.com/epsantos333-sys/che440-hybrid-fermentation",
  },
  {
    slug: "secom-spc",
    title: "Process monitoring on semiconductor fab data",
    context: "Independent project, October 2026 to now",
    status: "In progress",
    blurb:
      "Control charts and PCA monitoring on four months of real fab data, and a check on whether sensor readings can predict which runs fail.",
    intro: [
      "SECOM is a public dataset from a semiconductor line. It has 1,567 production runs, 590 unnamed sensors, and a pass or fail result from the line test for each run.",
      "The process changes over those four months. If you shuffle the runs before splitting them, later runs leak into training and the results look better than they are. Everything here is split in time order.",
    ],
    figure: {
      src: "/figures/imr_s059.png",
      alt: "I-MR control chart for sensor s059 over 1,567 runs, with limits from the training runs",
      caption:
        "I-MR chart for sensor s059. The limits come from the training runs, left of the solid line, and each x is a run that failed the line test. The sensor's spread drops sharply partway through training.",
    },
    did: [
      "Audited the data and split it in time order: earlier runs for training, later runs for testing.",
      "Cleaned the sensors using training runs only, then set up I-MR control charts as a baseline.",
      "Next: PCA monitoring with Hotelling T² and SPE charts, with control limits set from held-out data.",
      "After that: predict fails with a time-ordered split, and compare against a shuffled split to measure the leakage.",
    ],
    now: "The first two steps are done. Results go up here as each of the others is finished.",
    repo: "https://github.com/epsantos333-sys/secom-spc",
  },
];
