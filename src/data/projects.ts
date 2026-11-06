// Single source for project facts. Pages and cards read from here; edit text here, not in the pages.
// Every number below comes from Eli's CV (v0.3) or his verified project notes.

export type Status = 'in progress' | 'complete';

export interface Project {
  slug: string;
  title: string;
  course: string;
  dates: string;
  status: Status;
  summary: string;
  tags: string[];
  diagram: 'secom' | 'fermentation' | 'eos';
  diagramCaption: string;
  problem: string;
  approach: string[];
  results: string[];
  repo?: string;
  repoNote?: string;
}

export const projects: Project[] = [
  {
    slug: 'hybrid-fermentation',
    title: 'Hybrid physics + ML model for batch wine fermentation',
    course: 'CHE 440 Reactor Design',
    dates: 'Fall 2026',
    status: 'in progress',
    summary:
      'Mechanistic kinetics, gradient-boosted trees and a hybrid neural ODE compared on held-out fermentation runs, then used to pick a fermentation temperature.',
    tags: ['Python', 'SciPy', 'PyTorch', 'kinetics', 'neural ODE'],
    diagram: 'fermentation',
    diagramCaption:
      'The neural network only corrects the growth rate. Mass balances and yields stay physical, so predicted ethanol can never exceed what the sugar allows.',
    problem:
      'Wine yeast batches at 12 and 18 °C show a long lag phase that standard Monod kinetics miss. A pure ML model can fit the curves but has no reason to respect the mass balance. The question is whether a hybrid model predicts unseen runs better than either one alone.',
    approach: [
      'Rebuilt the analysis dataset from the raw open data: 216 batch runs of S. cerevisiae across 9 strains, 3 temperatures and 2 sugar levels. It matches the team’s independent version to within 1e-7 g/L for all 1,950 samples.',
      'Mechanistic model: Monod growth with ethanol inhibition, Luedeking–Piret ethanol production, first-order death and Arrhenius temperature terms, fitted by nonlinear least squares.',
      'Baseline ML model: gradient-boosted trees on the same held-out split.',
      'Hybrid neural ODE that keeps the mass balances and learns a correction for the lag phase (after Psichogios and Ungar, 1992).',
      'Optimization: use the best model to choose a fermentation temperature (12–25 °C) for ethanol productivity, with every batch required to ferment to dryness and a jacket energy balance setting the cooling duty.',
    ],
    results: ['Model comparison and temperature optimization are in progress. Final report due November 30, 2026.'],
    repo: 'https://github.com/epsantos333-sys/che440-hybrid-fermentation',
    repoNote: 'Code goes public after the final report, with the team’s OK.',
  },
  {
    slug: 'secom-spc',
    title: 'Process monitoring and fail prediction on semiconductor fab data',
    course: 'Independent project (UCI SECOM)',
    dates: 'Oct 2026 – present',
    status: 'in progress',
    summary:
      'Univariate and PCA-based multivariate SPC on 1,567 production runs and 590 sensors, plus an honest test of whether sensor data can predict line-test fails.',
    tags: ['Python', 'pandas', 'scikit-learn', 'SPC', 'PCA'],
    diagram: 'secom',
    diagramCaption:
      'Everything to the right of the time split is fit on training runs only, so the test runs never leak into cleaning, scaling, control limits or the model.',
    problem:
      'SECOM is real data from a semiconductor line: 590 unnamed sensors per run and a pass/fail label from the in-house line test. The process changes over the four months of data. Monitoring and prediction both have to be checked in time order, or the results look better than they are.',
    approach: [
      'Data audit and a time-ordered train/test split.',
      'Cleaning fit on training runs only, then I-MR control charts as a univariate baseline.',
      'PCA-based multivariate monitoring with Hotelling T² and SPE charts, control limits set from held-out data, and contribution plots to find the sensors behind an alarm.',
      'Fail prediction with a time-ordered split, compared against a shuffled split to measure leakage.',
      'A short paper-style report and a reproducible repository.',
    ],
    results: ['Analysis in progress. Results and figures will be added here as each stage is finished.'],
    repo: 'https://github.com/epsantos333-sys/secom-spc',
  },
  {
    slug: 'pr-eos-vle',
    title: 'Numerical thermodynamics with the Peng–Robinson EOS',
    course: 'CHE 361 Thermodynamics (Dr. Victor Vasquez)',
    dates: 'Spring 2026',
    status: 'complete',
    summary:
      'Water saturation curve from the triple point to the critical point by solving fugacity equality with the Peng–Robinson equation of state.',
    tags: ['Python', 'SciPy', 'root-finding', 'EOS'],
    diagram: 'eos',
    diagramCaption:
      'At each pressure, Brent’s method adjusts T until the liquid and vapor roots of the cubic give the same fugacity.',
    problem:
      'An equation of state gives P(T, V), but phase equilibrium needs equal fugacity in both phases. Finding the saturation temperature means solving a cubic inside a root-finding loop.',
    approach: [
      'Solved the Peng–Robinson cubic for liquid and vapor compressibility factors at each state.',
      'Found the saturation temperature by driving ln(φ_L / φ_V) to zero with Brent’s method, from the triple point to the critical point.',
      'Found the SiO₂ melting point by matching solid and liquid Gibbs energies.',
      'Estimated fugacity from P–V data by numerical integration, and solved an adiabatic two-chamber piston problem by root-finding on the energy balance.',
    ],
    results: ['Saturation temperatures fall within 1.1 K of steam tables at 0.1 MPa and within 3.6 K at 15 MPa.'],
    repo: 'https://github.com/epsantos333-sys/pr-eos-vle',
    repoNote: 'Repository will be posted as a general VLE tool, not course solutions.',
  },
];
