import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const notices = sqliteTable('notices', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  content: text('content').notNull(),
  type: text('type').$type<'urgent' | 'event' | 'general'>().default('general'),
  expiresAt: integer('expires_at').notNull(), // Timestamp
  createdAt: integer('created_at').default(Date.now()),
});