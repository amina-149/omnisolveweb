export const serviceType = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon (Emoji or SVG string)',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'starterPrice',
      title: 'Starter Price (PKR)',
      type: 'string',
    },
    {
      name: 'growthPrice',
      title: 'Growth Price (PKR)',
      type: 'string',
    },
    {
      name: 'enterprisePrice',
      title: 'Enterprise Price (PKR)',
      type: 'string',
    },
  ],
}
