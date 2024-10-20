import { defineField, defineType } from 'sanity';
import { PaperclipIcon } from 'lucide-react';

export default defineType({
  name: 'resume',
  title: 'Reume',
  type: 'document',
  icon: PaperclipIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Anja Zgodic CV',
      readOnly: true,  // Singleton means you won't create multiple
    }),
    defineField({
      name: 'file',
      title: 'CV File',
      type: 'file',
      description: 'Upload your CV here',
      options: {
        accept: '.pdf', // Only allow PDF uploads
      },
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last Updated',
      type: 'datetime',
      initialValue: new Date().toISOString(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'file',
    },
  },
});
