import { site } from '../data/site';

export function whatsappLink(message?: string): string {
  const text = message ?? site.whatsappDefaultMessage;
  return `${site.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

export function mailtoLink(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject });
  if (body) params.set('body', body);
  return `mailto:${site.email}?${params.toString().replace(/\+/g, '%20')}`;
}