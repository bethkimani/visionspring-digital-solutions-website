import type { Project } from '@/types/content';

const PROJECT_IMAGES: { keywords: string[]; image: string }[] = [
  { keywords: ['synowatt', 'solar'], image: '/synowatt.jpeg' },
  { keywords: ['urban', 'mall', 'steps'], image: '/urbanmall.jpeg' },
  { keywords: ['dallian', 'hair', 'beauty'], image: '/Dallian.jpeg' },
  { keywords: ['initiative', 'needy', 'charity'], image: '/initiativefortheneedy.jpeg' },
];

export function getProjectImage(project: Project): string | undefined {
  const slug = project.slug.toLowerCase();
  const matchingImage = PROJECT_IMAGES.find(({ keywords }) =>
    keywords.some((keyword) => slug.includes(keyword)),
  );

  return matchingImage?.image ?? project.image;
}

export function withProjectImage(project: Project): Project {
  return { ...project, image: getProjectImage(project) };
}
