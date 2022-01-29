import { FaPaperclip } from 'react-icons/fa';

import ExternalLinkRenderer from '../../components/ExternalLinkRenderer';

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Small', value: 'small' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            blockEditor: {
              render: ExternalLinkRenderer,
            },
            fields: [
              {
                name: 'url',
                type: 'url',
              },
              // // {
              // //   title: 'Open in new window',
              // //   name: 'blank',
              // //   type: 'boolean',
              // // },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            blockEditor: {
              icon: FaPaperclip,
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                // // title: 'Reference',
                to: [
                  { type: 'destination' },
                  { type: 'experience' },
                  { type: 'homePage' },
                  { type: 'experiencesPage' },
                  { type: 'destinationsPage' },
                  { type: 'aboutPage' },
                ],
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
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
  ],
};
