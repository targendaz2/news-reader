import { defineRelations } from 'drizzle-orm';
import { integer, snakeCase, text } from 'drizzle-orm/sqlite-core';

const sourceTypes = ['rss', 'email', 'social', 'release', 'github'] as const;

export const sources = snakeCase.table('source', {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  type: text({ enum: sourceTypes }).default('rss'),
});

export const newsItems = snakeCase.table('news_item', {
  id: integer().primaryKey({ autoIncrement: true }),
  time: integer({ mode: 'timestamp' }).notNull(),
  title: text().notNull(),
  excerpt: text(),
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
