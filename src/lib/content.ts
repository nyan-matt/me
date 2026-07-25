import type { CollectionEntry } from 'astro:content'
import { marked } from 'marked'

export const site = {
  title:
    'Matthew Rea - Experienced product design & technology professional living & working in St. Louis',
  description:
    'I have a strong background in user-centered design methodologies, visual, & interaction design combined with extensive technical & product management experience.',
  url: 'https://matthewrea.com',
}

export type BlogEntry = CollectionEntry<'blog'>
export type WorkEntry = CollectionEntry<'work'>
export type ContentEntry = BlogEntry | WorkEntry

export const blogPageSize = 9

type EditorialEntry = {
  data: {
    archived?: boolean
    date?: Date
    featuredHome?: boolean
    featuredIndex?: boolean
    featuredOrder?: number
    featuredpost?: boolean
    title: string
  }
}

function dateTime(value?: Date) {
  return value?.getTime() || 0
}

function titleSort(a: EditorialEntry, b: EditorialEntry) {
  return a.data.title.localeCompare(b.data.title)
}

export function byDateDesc<T extends EditorialEntry>(items: T[]) {
  return [...items].sort(
    (a, b) => dateTime(b.data.date) - dateTime(a.data.date) || titleSort(a, b)
  )
}

export function isArchived<T extends { data: { archived?: boolean } }>(item: T) {
  return item.data.archived === true
}

export function isFeatured<T extends EditorialEntry>(item: T) {
  return item.data.featuredpost === true
}

export function isFeaturedHome<T extends EditorialEntry>(item: T) {
  if (isArchived(item)) return false
  return item.data.featuredHome ?? (item.data.featuredpost === true)
}

export function isFeaturedIndex<T extends EditorialEntry>(item: T) {
  if (isArchived(item)) return false
  return item.data.featuredIndex ?? (item.data.featuredpost === true)
}

export function byEditorialOrder<T extends EditorialEntry>(items: T[]) {
  return [...items].sort((a, b) => {
    const orderA = a.data.featuredOrder ?? Number.POSITIVE_INFINITY
    const orderB = b.data.featuredOrder ?? Number.POSITIVE_INFINITY

    return (
      orderA - orderB ||
      dateTime(b.data.date) - dateTime(a.data.date) ||
      titleSort(a, b)
    )
  })
}

export function kebabTag(value: string) {
  return value
    .replace(/['’]/g, '')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])([0-9])/g, '$1-$2')
    .replace(/([0-9])([a-zA-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
}

export function entryPath(entry: ContentEntry) {
  return `/${entry.collection}/${entry.id}/`
}

export function cardImage(entry: ContentEntry) {
  if (entry.collection === 'work') {
    return entry.data.cardimage || entry.data.featuredimage || '/img/og-image.jpg'
  }

  return entry.data.featuredimage || '/img/og-image.jpg'
}

export function renderMarkdown(value?: string) {
  return marked.parse(value || '', { async: false }) as string
}

export function allTags(entries: ContentEntry[]) {
  return Array.from(new Set(entries.flatMap((entry) => entry.data.tags || []))).sort(
    (a, b) => a.localeCompare(b)
  )
}
