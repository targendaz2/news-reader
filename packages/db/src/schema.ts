import { defineRelations } from 'drizzle-orm';
import { integer, snakeCase, text } from 'drizzle-orm/sqlite-core';

const sourceTypes = ['rss', 'email', 'social', 'release', 'github'] as const;
const topics = ['apple', 'dev', 'games', 'tech'] as const;

export const sources = snakeCase.table('sources', {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  type: text({ enum: sourceTypes }).notNull().default('rss'),
  url: text().notNull(),
  lastFetchedAt: integer({ mode: 'timestamp_ms' }),
  active: integer({ mode: 'boolean' }).notNull().default(true),
});

export const newsItems = snakeCase.table('news_items', {
  id: integer().primaryKey({ autoIncrement: true }),
  time: integer({ mode: 'timestamp' }).notNull(),
  title: text().notNull(),
  excerpt: text(),
  url: text().notNull(),
  topic: text({ enum: topics }).notNull(),
  publishedAt: integer({ mode: 'timestamp_ms' }),
  sourceId: integer().notNull(),
});

export const relations = defineRelations({ newsItems, sources }, (r) => ({
  newsItems: {
    source: r.one.sources({
      from: r.newsItems.sourceId,
      to: r.sources.id,
    }),
  },
  sources: {
    newsItems: r.many.newsItems(),
  },
}));
