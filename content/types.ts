export type DisciplineTag = 'data' | 'design' | 'code';

export interface ProjectMedia {
  src: string;
  alt: string;
  discipline: DisciplineTag;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  roles: DisciplineTag[];
  cardImage: ProjectMedia;
  hoverImage: ProjectMedia;
  hoverCaption: string;
  dataStory: string;
  designStory: string;
  codeStory: string;
  stack: string[];
  media: ProjectMedia[];
  links?: { label: string; href: string }[];
  order: number;
}
