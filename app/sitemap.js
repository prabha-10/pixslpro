import { PROJECTS } from './projects/data';

export default function sitemap() {
  return [
    {
      url: 'https://pixsl.pro',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...Object.keys(PROJECTS).map((slug) => ({
      url: `https://pixsl.pro/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
