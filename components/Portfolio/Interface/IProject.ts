export type ProjectTone = 'aguaje' | 'leaf' | 'cream';

export interface IProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: IProjectImage[];
  tone: ProjectTone;
}
