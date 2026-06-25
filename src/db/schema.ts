import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  category: text('category').notNull(),
  author: text('author').notNull(),
  headerImg: text('header_img'), // Added header image field
  createdAt: timestamp('created_at').defaultNow().notNull(),
});


export const contact = pgTable('contact', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  companyName: text('company_name').notNull(),
  message: text('message'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
