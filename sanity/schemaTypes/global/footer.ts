import { defineField, defineType } from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'companyInfo',
      title: 'Company Information',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Company Name',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
      ],
    }),
    defineField({
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    }),
  ],
}); 