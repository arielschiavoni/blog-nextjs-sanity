
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'enhancedImage',
  title: 'Bild mit erweiterten Eigenschaften',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      title: 'Bildunterschrift',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
  ],
})
