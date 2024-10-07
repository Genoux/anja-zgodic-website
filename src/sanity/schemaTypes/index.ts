import { type SchemaTypeDefinition } from 'sanity'
import research from './research'
import software from './software'
import experience from './experience'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [research, software, experience],
}