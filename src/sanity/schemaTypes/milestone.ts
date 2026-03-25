export const milestoneType = {
  name: 'milestone',
  title: 'Milestone / Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Milestone Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date / Period',
      type: 'string',
      description: 'e.g. "April 13, 2026", "2025"',
    },
    {
      name: 'detail',
      title: 'Details',
      type: 'text',
    },
    {
      name: 'icon',
      title: 'Icon (Emoji)',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number means it shows up first',
    },
  ],
}
