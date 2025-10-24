export interface NewsItem {
  id: number;
  slug: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  contentEn: string;
  contentAr: string;
  date: string;
  imageUrl?: string;
}

export const newsData: NewsItem[] = [];

export function getNewsById(id: number): NewsItem | undefined {
  return newsData.find(item => item.id === id);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsData.find(item => item.slug === slug);
}
