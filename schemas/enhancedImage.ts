
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'enhancedImage',
  title: 'Bild mit erweiterten Eigenschaften',
  type: 'object',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt Tag für SEO',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Text zum Bild',
      type: 'string'
    }),
  ],
})
