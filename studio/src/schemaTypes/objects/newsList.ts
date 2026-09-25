import { defineType, defineField } from 'sanity';


export default {
    name: 'newsList', // Unique name for your component
    title: 'News List', // Title in Sanity Studio
    type: 'object', // It's an object because it might have configuration options
    fields: [
      {
        name: 'title', // Optional: Allow editors to customize the title
        title: 'Title',
        type: 'string',
      },
      {
        name: 'numberOfItems', // Optional: Control how many news items to show
        title: 'Number of Items',
        type: 'number',
        description: 'How many news items to display (leave empty for all)',
      },
      // Add other configuration fields here if needed (e.g., category filter)
    ],
  };