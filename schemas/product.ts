import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Produkt',
  icon: DocumentIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'productTitle',
      title: 'Name des Produkts',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productTeaserImage',
      title: 'Produkt-Teaser-Bild für Homepage',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productDescription',
      title: 'Produktbeschreibung',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Preis ab',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
