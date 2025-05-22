import { defineField, defineType } from 'sanity'

export const headerType = defineType({
  name: 'header',
  type: 'document',
  title: 'Header',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: { hotspot: true },
    },
    {
      name: 'menuItems',
      type: 'array',
      title: 'Menu Items',
      of: [
        {
          type: 'object',
          title: 'Menu Item',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'url', type: 'url', title: 'URL', hidden: ({ parent }) => parent.subItems?.length > 0 },
            {
              name: 'subItems',
              type: 'array',
              title: 'Dropdown Items',
              of: [
                {
                  type: 'object',
                  title: 'Dropdown Item',
                  fields: [
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'url', type: 'url', title: 'URL' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'authLinks',
      type: 'array',
      title: 'Auth Links (Right Side)',
      of: [
        {
          type: 'object',
          title: 'Link',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'isButton', type: 'boolean', title: 'Show as Button (e.g. Sign Up)' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      media: 'logo',
      menuItems: 'menuItems',
      authLinks: 'authLinks',
    },
    prepare({ media, menuItems = [], authLinks = [] }) {
      return {
        title: 'Header',
        subtitle: `${menuItems.length} menus, ${authLinks.length} links`,
        media,
      }
    }
  }
});
