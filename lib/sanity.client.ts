import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  type HomePage,
  homePageQuery,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export async function getSettings(): Promise<Settings> {
  if (client) {
    return client.fetch(settingsQuery)
  }
}

export async function getHomePage(): Promise<HomePage> {
  if (client) {
    return await client.fetch(homePageQuery)
  }
}
