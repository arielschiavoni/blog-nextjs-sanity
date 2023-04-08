import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO Eigenschaften für eine Seite',
  type: 'object',
  fields: [
    defineField({
      name: 'description',
      description: 'Used for the <meta> description tag for SEO.',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.max(155).required(),
    }),
  ],
})
