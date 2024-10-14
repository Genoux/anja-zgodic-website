import { type SchemaTypeDefinition } from 'sanity'
import research from './research'
import software from './software'
import experience from './experience'
import media from './media'
import contact from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [research, software, experience, media, contact],
}