import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'productAttribute',
  title: 'Produkteigenschaften',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Name der Produkteigenschaft',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bilder für Produkteigenschaft',
      type: 'array',
      of: [
        {
          type: 'enhancedImage',
        },
      ],
    }),
    defineField({
      name: 'color',
      title: 'Farben',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'enhancedColor' }],
        },
      ],
    }),
  ],
})
