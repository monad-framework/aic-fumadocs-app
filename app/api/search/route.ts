import {
  articlesSource,
  buildingMonadSource,
  changelogsSource,
  journalSource,
  source,
} from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

const indexes = [
  ...source.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData,
    tag: 'docs',
  })),
  ...journalSource.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData,
    tag: 'journal',
  })),
  ...changelogsSource.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData,
    tag: 'changelogs',
  })),
  ...articlesSource.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData,
    tag: 'articles',
  })),
  ...buildingMonadSource.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData,
    tag: 'building-monad',
  })),
];

export const { GET } = createSearchAPI('advanced', {
  indexes,
});
