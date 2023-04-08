import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'enhancedColor',
  title: 'Farben',
  type: 'document',
  fields: [
    defineField({
      name: 'code',
      title: 'Farbcode',
      type: 'color',
    }),
    defineField({
      name: 'caption',
      title: 'Name der Farbe',
      type: 'string',
    }),
  ],
})
