/**
 * Sanity Environment Configuration
 * Only the project ID is fetched from environment variables (.env.local / Vercel).
 * The dataset and API version are hardcoded as requested.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'viucj177';
export const dataset = 'production';
export const apiVersion = '2024-01-01';
export const isSanityConfigured = Boolean(projectId);
