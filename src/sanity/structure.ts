import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Contact Info')
        .child(
          S.editor()
            .title('Contact Info')
            .schemaType('contact')
            .documentId('contact')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['contact'].includes(listItem.getId() as string)
      )
    ])