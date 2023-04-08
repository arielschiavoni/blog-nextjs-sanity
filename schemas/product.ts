import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Produkt',
  icon: DocumentIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name des Produkts',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'teaserImage',
      title: 'Produkt-Teaser-Bild für Homepage',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Produktbeschreibung',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Preis ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productAttributes',
      title: 'Produkt Eigenschaften',
      type: 'array',
      of: [
        {
          type: 'productAttribute',
        },
      ],
    }),
  ],
})
