
import { defineType } from 'sanity';

export default {
    name: 'imageComponent', // Unique name for your component
    title: 'Image', // Title in the Sanity Studio
    type: 'object', // It's an object because it has multiple fields
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Recommended for responsive images
        },
        validation: (Rule: any) => Rule.required(), // Image is required
      },
      {
        name: 'alt',
        title: 'Alternative Text',
        type: 'string',
        description: 'Describe the image for accessibility.',
        validation: (Rule: any) => Rule.required(), // Alt text is required
      },
      
      // ... more fields if needed (e.g., attribution, etc.)
    ],
  };