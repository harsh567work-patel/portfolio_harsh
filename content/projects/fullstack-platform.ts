import type { Project } from '../types';

export const fullstackPlatform: Project = {
  slug: 'fullstack-platform',
  title: 'TODO: Full-Stack Platform Project Title',
  tagline: 'TODO: hook that frames the product experience rather than the stack alone.',
  roles: ['design', 'code'],
  cardImage: {
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="1200" height="800" fill="%23f7f5f0"/><rect x="150" y="140" width="900" height="520" rx="24" fill="%23111111"/><rect x="220" y="210" width="280" height="360" rx="18" fill="%23f7f5f0"/><rect x="530" y="210" width="450" height="110" rx="16" fill="%23d9a35"/><rect x="530" y="345" width="450" height="110" rx="16" fill="%23f7f5f0" opacity="0.85"/><rect x="530" y="480" width="450" height="90" rx="16" fill="%23f7f5f0" opacity="0.7"/></svg>',
    alt: 'TODO',
    discipline: 'design',
  },
  hoverImage: {
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="1200" height="800" fill="%23111111"/><rect x="140" y="170" width="920" height="460" rx="24" fill="%23f7f5f0"/><rect x="220" y="240" width="760" height="80" rx="16" fill="%23111111"/><rect x="220" y="360" width="360" height="200" rx="18" fill="%23111111"/><rect x="620" y="360" width="360" height="200" rx="18" fill="%237a5cff"/></svg>',
    alt: 'TODO',
    discipline: 'code',
  },
  hoverCaption: 'TODO: a concise note that reveals the product logic underneath the interface.',
  dataStory: 'TODO: describe any data layer, analytics, or product insight that shaped the build.',
  designStory: 'TODO: describe the interaction, visual language, or UX decisions that made the experience feel coherent.',
  codeStory: 'TODO: explain the architecture, API work, or deployment choices that made it real.',
  stack: ['TODO'],
  media: [],
  links: [{ label: 'Case study', href: '/projects/fullstack-platform' }],
  order: 2,
};
