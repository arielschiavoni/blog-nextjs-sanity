import { MasterDetailIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import product from './product'

export default defineType({
  name: 'productPage',
  title: 'Produkt Seite',
  icon: MasterDetailIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name der Produktseite',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Eigenschaften der Seite',
      type: 'seo',
    }),
    defineField({
      name: 'product',
      title: 'Produkt',
      type: 'reference',
      to: [{ type: 'product' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productHighlightImage',
      title: 'Produkt-Highlights (Bilder)',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'productIntroductionHeadline',
      title: 'Überschrift für Einführung in das Produkt (z.b. wie wird es hergestellt)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productIntroductionText',
      title: 'Einführung in das Produkt (z.b. wie wird es hergestellt)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productInspirationImage',
      title: 'Produkt-Inspirationen (Bilder)',
      type: 'array',
      of: [{ type: 'enhancedImage'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
