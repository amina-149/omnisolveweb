export const partnerType = {
  name: 'partner',
  title: 'Partner / Recognition',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Partner Name',
      type: 'string',
    },
    {
      name: 'logoUrl',
      title: 'Logo Image URL/Path',
      type: 'string',
      description: 'Can be an external URL or static path like /images/nicat.png',
    },
    {
      name: 'logo',
      title: 'Upload Logo (Optional)',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
