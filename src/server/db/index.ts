
import { pgTable, serial, text, varchar} from 'drizzle-orm/pg-core'
export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 })
})
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { users } from './schema'
import { env } from '../../env'

const connectionString = env.DATABASE_URL

const client = postgres(connectionString)
const db = drizzle(client);

const allUsers = await db.select().from(users);
console.log(allUsers)
if(allUsers.length ==0){
  console.log('ummmm')
}