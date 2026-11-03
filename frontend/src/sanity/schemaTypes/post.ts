import { defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Blog Post / Latest Update',
  type: 'document',
  fieldsets: [
    {
      name: 'advanced',
      title: '⚙️ Advanced & Optional SEO Settings (Click to expand)',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    // ----------------------------------------------------
    // QUICK ESSENTIALS (Only what you need to publish)
    // ----------------------------------------------------
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      description: 'The main headline of your article.',
      validation: (Rule) => Rule.required().min(5).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Click "Generate" to automatically create the URL from your title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Choose the topic category for this update.',
      initialValue: 'Website Development',
      options: {
        list: [
          { title: 'Website Development', value: 'Website Development' },
          { title: 'Web Applications', value: 'Web Applications' },
          { title: 'Search Engine Optimization (SEO)', value: 'SEO' },
          { title: 'Digital Advertising', value: 'Digital Advertising' },
          { title: 'Social Media Management', value: 'Social Media' },
          { title: 'Branding & Design', value: 'Branding' },
          { title: 'Business & Growth', value: 'Business' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Upload the feature banner image for this article.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Image Description (Alt text)',
          type: 'string',
          description: 'A brief description of the image (helpful for Google image rankings).',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Article Content',
      type: 'array',
      description: 'Write your article here. You can add headings (H2, H3), bold text, bullet points, and inline images.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal Paragraph', value: 'normal' },
            { title: 'Heading 2 (Major Section)', value: 'h2' },
            { title: 'Heading 3 (Subsection)', value: 'h3' },
            { title: 'Quote Callout', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet List', value: 'bullet' },
            { title: 'Numbered Steps', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Summary / Excerpt (Optional)',
      type: 'text',
      rows: 2,
      description: 'Short 1-2 sentence preview. If left empty, it will be automatically created from your article content.',
    }),

    // ----------------------------------------------------
    // ADVANCED / OPTIONAL SETTINGS (Collapsed by default)
    // ----------------------------------------------------
    defineField({
      name: 'author',
      title: 'Author Details',
      type: 'object',
      fieldset: 'advanced',
      fields: [
        defineField({
          name: 'name',
          title: 'Author Name',
          type: 'string',
          initialValue: 'VisionSpring Editorial Team',
        }),
        defineField({
          name: 'role',
          title: 'Author Role',
          type: 'string',
          initialValue: 'Digital Strategy Lead',
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      fieldset: 'advanced',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'readMinutes',
      title: 'Read Time (Minutes)',
      type: 'number',
      fieldset: 'advanced',
      initialValue: 5,
    }),
    defineField({
      name: 'featured',
      title: 'Feature on Homepage?',
      type: 'boolean',
      fieldset: 'advanced',
      initialValue: false,
    }),
    defineField({
      name: 'seoTitle',
      title: 'Custom Google Title Tag (Optional)',
      type: 'string',
      fieldset: 'advanced',
      description: 'Custom search result title. If blank, Article Title is automatically used.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Custom Search Snippet (Optional)',
      type: 'text',
      rows: 2,
      fieldset: 'advanced',
      description: 'Custom search result preview description. If blank, Excerpt is used.',
    }),
    defineField({
      name: 'focusKeyword',
      title: 'Target Keyword (Optional)',
      type: 'string',
      fieldset: 'advanced',
      description: 'The keyword you want this post to target.',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL (Optional)',
      type: 'url',
      fieldset: 'advanced',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      category: 'category',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare({ title, author, category, media, date }) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : 'Just now';
      return {
        title: title || 'Untitled Post',
        subtitle: `${category || 'Article'} • by ${author || 'VisionSpring Team'} (${formattedDate})`,
        media,
      };
    },
  },
});
