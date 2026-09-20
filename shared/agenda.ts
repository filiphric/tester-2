export const agenda = {
  lies: {
    title: 'Three lies',
    items: [
      'the golden age of testers is coming',
      'without testers, things will inevitably get worse',
      'things will stay pretty much the same',
    ],
  },
  abandon: {
    title: 'Things to abandon',
    items: [
      'Avoiding technical expertise',
      'Framing "Critical thinking" as the only important tool',
      'Treating test automation as the only important tool',
      'Acting as gatekeepers',
    ],
  },
  strengths: {
    title: 'Our strengths',
    items: [
      'Quality-first approach to software delivery',
      'Code quality and code Governance',
      'Strength 3',
    ],
  },
} as const

export type AgendaSection = keyof typeof agenda
