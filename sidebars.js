/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'introduction',
    'installation',
    {
      type: 'category',
      label: 'Language Basics',
      collapsible: true,
      collapsed: true,
      items: [{type: 'autogenerated', dirName: 'language-basics'}]
    },
    'asset',
    'statemachine',
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'doc',
        id: 'reference/index',
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Declarations',
          collapsible: true,
          collapsed: true,
          items: [{type: 'autogenerated', dirName: 'reference/declarations'}]
        },
        'reference/types',
        {
          type: 'category',
          label: 'Instructions',
          collapsible: true,
          collapsed: true,
          items: [{type: 'autogenerated', dirName: 'reference/instructions'}]
        },
        {
          type: 'category',
          label: 'Expressions',
          collapsible: true,
          collapsed: true,
          items: [{type: 'autogenerated', dirName: 'reference/expressions'}]
        },
      ]
    },
  ],
  templates: [
    {type: 'autogenerated', dirName: 'templates'}
  ],
  empty: []
};

module.exports = sidebars;