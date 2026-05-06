import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ProjectWorkDetail } from '@/components/work/project/ProjectWorkDetail';
import { getPortfolioDetail } from '@/data/portfolio-detail';
import type { ProjectNeighbor } from '@/data/portfolio-detail';
import { portfolioShowcase } from '@/data/portfolio-page';

type Props = { params: Promise<{ projectname: string }> };

export async function generateStaticParams() {
  return portfolioShowcase.map((p) => ({ projectname: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { projectname } = await params;
  const detail = getPortfolioDetail(projectname);
  if (!detail) {
    return { title: 'Project | Buildrix' };
  }
  return {
    title: `${detail.title} | Buildrix — Work`,
    description: detail.overview,
  };
}

function neighborsForProjectId(id: string): { prev: ProjectNeighbor; next: ProjectNeighbor } {
  const idx = portfolioShowcase.findIndex((p) => p.id === id);
  const len = portfolioShowcase.length;
  const prevItem = portfolioShowcase[(idx - 1 + len) % len]!;
  const nextItem = portfolioShowcase[(idx + 1) % len]!;
  return {
    prev: { slug: prevItem.id, title: prevItem.title },
    next: { slug: nextItem.id, title: nextItem.title },
  };
}

export default async function WorkProjectPage({ params }: Props) {
  const { projectname } = await params;
  const detail = getPortfolioDetail(projectname);
  if (!detail) notFound();

  const neighbors = neighborsForProjectId(detail.id);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-buildrix-base text-buildrix-ivory">
      <Navbar className="fixed left-0 right-0 top-0 z-[100]" />
      <ProjectWorkDetail detail={detail} neighbors={neighbors} />
      <Footer className="mt-auto border-t border-buildrix-steel/15" />
    </main>
  );
}
