import { LinkIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  icon: LinkIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'orderText',
      title: 'Text für Kontakt für Bestellung',
      type: 'string',
    }),
    defineField({
      name: 'stamps',
      title: 'Bilder Qualitätssigel',
      type: 'array',
      of: [{ type: 'enhancedImage' }],
    }),
    defineField({
      name: 'links',
      title: 'Links auf andere Seiten',
      type: 'array',
      of: [
        {
          name: 'enhancedLink',
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name der angezeigt wird',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Seite auf die verlinkt wird',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email Adresse',
      type: 'string',
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Information',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Link zu Instagram',
      type: 'string',
    }),
  ],
})
