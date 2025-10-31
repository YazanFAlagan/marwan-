import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

export default client;

// Types for Contentful entries
export interface NewsEntry {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: any; // Rich text content
  image?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  category?: string;
}

export interface WorkPlanEntry {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  status: 'planned' | 'in-progress' | 'completed';
  category: string;
}

export interface GalleryImageEntry {
  title: string;
  description?: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  category?: string;
}

// Fetch functions
export async function getNewsEntries(locale: string = 'en-US') {
  const entries = await client.getEntries({
    content_type: 'news',
    locale,
    order: ['-fields.date'],
  });

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title,
    slug: item.fields.slug,
    date: item.fields.date,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
    image: item.fields.image,
    category: item.fields.category,
  }));
}

export async function getNewsEntryBySlug(slug: string, locale: string = 'en-US') {
  const entries = await client.getEntries({
    content_type: 'news',
    'fields.slug': slug,
    locale,
    limit: 1,
  });

  if (entries.items.length === 0) {
    return null;
  }

  const item = entries.items[0];
  return {
    id: item.sys.id,
    title: item.fields.title,
    slug: item.fields.slug,
    date: item.fields.date,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
    image: item.fields.image,
    category: item.fields.category,
  };
}

export async function getWorkPlanEntries(locale: string = 'en-US') {
  const entries = await client.getEntries({
    content_type: 'workPlan',
    locale,
    order: ['-fields.startDate'],
  });

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title,
    description: item.fields.description,
    startDate: item.fields.startDate,
    endDate: item.fields.endDate,
    status: item.fields.status,
    category: item.fields.category,
  }));
}

export async function getGalleryImages(locale: string = 'en-US') {
  const entries = await client.getEntries({
    content_type: 'galleryImage',
    locale,
    order: ['-sys.createdAt'],
  });

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title,
    description: item.fields.description,
    image: item.fields.image,
    category: item.fields.category,
  }));
}
