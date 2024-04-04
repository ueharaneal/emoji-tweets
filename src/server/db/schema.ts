import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});

import { pgTable, serial, text, varchar} from 'drizzle-orm/pg-core'
export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 })
})