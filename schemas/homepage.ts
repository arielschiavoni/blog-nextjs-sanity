import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description:
        'Used for the <meta> description tag for SEO.',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'welcomeHeadline',
      title: 'Welcome Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'welcomeText',
      title: 'Welcome Text',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productTeaser',
      title: 'Produkte',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'productTeaser' }],
        },
     ],
    })
  ],
})
