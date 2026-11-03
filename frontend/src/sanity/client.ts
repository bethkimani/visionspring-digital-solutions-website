import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion } from './env';

/**
 * Sanity Client for querying published articles.
 * useCdn: false ensures fresh articles show immediately upon publishing.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
