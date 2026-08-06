import { defineRelations } from 'drizzle-orm';
import { integer, snakeCase, text } from 'drizzle-orm/sqlite-core';

const sourceTypes = ['rss', 'email', 'social', 'release', 'github'] as const;
const topics = ['apple', 'dev', 'games', 'tech'] as const;

export const sources = snakeCase.table('sources', {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  type: text({ enum: sourceTypes }).default('rss'),
});

export const newsItems = snakeCase.table('news_items', {
  id: integer().primaryKey({ autoIncrement: true }),
  time: integer({ mode: 'timestamp' }).notNull(),
  title: text().notNull(),
  excerpt: text(),
  topic: text({ enum: topics }).notNull(),
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
