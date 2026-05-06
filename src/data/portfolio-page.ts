import { projects, type PortfolioProject } from './projects';

/** Shape used by `/work`, detail pages, and home “commissions” mapping. */
export type PortfolioShowcaseItem = {
  id: string;
  title: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  category: string;
  tech: string[];
  github: string;
  live: string;
};

function toShowcaseItem(project: PortfolioProject): PortfolioShowcaseItem {
  return {
    id: project.slug,
    title: project.title,
    year: project.year,
    description: project.description,
    image: project.image,
    imageAlt: project.imageAlt,
    tags: project.tags ?? project.tech.map((tech) => tech.toUpperCase()),
    category: project.category,
    tech: project.tech,
    github: project.github,
    live: project.live,
  };
}

/** Work grid + static params — sourced from `projects.ts`. */
export const portfolioShowcase: PortfolioShowcaseItem[] = projects.map(toShowcaseItem);

export const PORTFOLIO_TOTAL = portfolioShowcase.length;
export const PORTFOLIO_PAGE_SIZE = 6;
