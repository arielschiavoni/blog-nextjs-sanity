import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const homePageQuery = groq`
*[_type == "homepage"][0] {
  title,
  welcomeText,
  welcomeHeadline,
  seo,
  quote,
  image{asset->{url, mimeType, metadata{dimensions}}},        
  productTeaser[]->,
  footer->
}
`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

// TODO: ist it possible to autogenerate types from groq queries? how about graphql?
export interface HomePage {
  _id: string
  title: string
  welcomeText: string
  welcomeHeadline: string
  seo: string
  quote: string
  image: any
  productTeaser: any
  footer: any
}

export interface Settings {
  title: string
  subtitle: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
