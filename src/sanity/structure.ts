import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import type { StructureResolver } from 'sanity/structure';
import { DocumentIcon, DesktopIcon } from '@sanity/icons';

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.divider(),
      S.listItem()
        .title('About')
        .icon(DesktopIcon)
        .child(
          S.editor()
            .id('about')
            .schemaType('about')
            .documentId('about')
        ),
      S.listItem()
        .title('Contact')
        .icon(DesktopIcon)
        .child(
          S.editor()
            .id('contact')
            .schemaType('contact')
            .documentId('contact')
        ),
      S.divider(),
      orderableDocumentListDeskItem({
        type: 'research',
        title: 'Research',
        S,
        context,
        icon: DocumentIcon,
      }),
      orderableDocumentListDeskItem({
        type: 'software',
        title: 'Software',
        S,
        context,
        icon: DocumentIcon,
      }),
      orderableDocumentListDeskItem({
        type: 'experience',
        title: 'Experience',
        S,
        context,
        icon: DocumentIcon,
      }),
      orderableDocumentListDeskItem({
        type: 'media',
        title: 'In the Media',
        S,
        context,
        icon: DocumentIcon,
      }),
      S.divider(),
      S.listItem()
      .title('Resume')
      .child(
        S.editor()
          .schemaType('resume')
          .documentId('resume') // Ensures only one CV can exist
      ),
    ]);
