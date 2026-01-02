import { defineDocumentType, ComputedFields, makeSource } from 'contentlayer2/source-files'
import {
  remarkExtractFrontmatter,
  remarkCodeTitles,
  remarkImgToJsx,
} from 'pliny/mdx-plugins/index.js'
// Remark packages
import remarkGfm from 'remark-gfm'
// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePresetMinify from 'rehype-preset-minify'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
}

// 1. Definiera Projects-schemat
export const Projects = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: 'projects/**/*.mdx', // Letar efter filer i data/projects/
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    imgSrc: { type: 'string' },
    demoUrl: { type: 'string' },
    githubUrl: { type: 'string' },
  },
  computedFields,
}))

// ... behåll Authors-definitionen som den är ...
export const Authors = defineDocumentType(() => ({
  name: 'Authors',
  filePathPattern: 'authors/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    avatar: { type: 'string' },
    occupation: { type: 'string' },
    company: { type: 'string' },
    email: { type: 'string' },
    linkedin: { type: 'string' },
    github: { type: 'string' },
    twitter: { type: 'string' },
    bluesky: { type: 'string' },
    layout: { type: 'string' },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'data',
  // 2. VIKTIGT: Lägg till Projects i listan här!
  documentTypes: [Authors, Projects],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [remarkExtractFrontmatter, remarkGfm, remarkCodeTitles, remarkImgToJsx],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePresetMinify],
  },
})
