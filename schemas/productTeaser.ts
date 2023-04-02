import { StarIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'productTeaser',
  title: 'Produkt Teaser',
  icon: StarIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'productTitle',
      title: 'Produkt Überschrift',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productImage',
      title: 'Produkt Bild',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productURL',
      title: 'Link auf die Produkt-Seite',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
})
