import { type SchemaTypeDefinition } from 'sanity'
import about from './about'
import research from './research'
import software from './software'
import experience from './experience'
import media from './media'
import contact from './contact'
import resume from './resume'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [research, software, experience, media, contact, about, resume],
}