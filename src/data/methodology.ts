export type MethodologyPhase = {
  step: string;
  title: string;
  description: string;
};

export const methodologySectionIntro = {
  title: 'Methodology: The Digital Blueprint',
  description:
    "We don't design pages. We engineer digital environments through a rigorous four-phase structural protocol.",
} as const;

export const methodologyPhases: MethodologyPhase[] = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'Excavating the core purpose and identifying the structural requirements of the project.',
  },
  {
    step: '02',
    title: 'Logic Mapping',
    description:
      'Creating the invisible skeletal framework that dictates user flow and data movement.',
  },
  {
    step: '03',
    title: 'Structural Build',
    description:
      'The assembly of the interface using high-fidelity components and architectural precision.',
  },
  {
    step: '04',
    title: 'Stress Testing',
    description:
      'Rigorous performance auditing to ensure the build holds under extreme load and diverse environments.',
  },
];
