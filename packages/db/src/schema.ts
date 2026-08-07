import { defineRelations } from 'drizzle-orm';
import { integer, snakeCase, text } from 'drizzle-orm/sqlite-core';

const sourceTypes = ['rss', 'email', 'social', 'release', 'github'] as const;

export const sources = snakeCase.table('sources', {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  type: text({ enum: sourceTypes }).notNull().default('rss'),
  url: text().notNull(),
  lastFetchedAt: integer({ mode: 'timestamp_ms' }),
  active: integer({ mode: 'boolean' }).notNull().default(true),
});

export const topics = snakeCase.table('topics', {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
});

export const newsItems = snakeCase.table('news_items', {
  id: integer().primaryKey({ autoIncrement: true }),
  time: integer({ mode: 'timestamp' }).notNull(),
  title: text().notNull(),
  excerpt: text(),
  url: text().notNull(),
  publishedAt: integer({ mode: 'timestamp_ms' }),
  sourceId: integer().notNull(),
  topicId: integer().notNull(),
});

export const relations = defineRelations({ newsItems, sources, topics }, (r) => ({
  newsItems: {
    source: r.one.sources({
      from: r.newsItems.sourceId,
      to: r.sources.id,
    }),
    topic: r.one.topics({
      from: r.newsItems.topicId,
      to: r.topics.id,
    }),
  },
  sources: {
    newsItems: r.many.newsItems(),
  },
  topics: {
    newsItems: r.many.newsItems(),
  },
}));
