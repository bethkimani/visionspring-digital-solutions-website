import { format, parseISO } from 'date-fns';

export function formatPostDate(iso: string): string {
  try {
    return format(parseISO(iso), 'd MMMM yyyy');
  } catch {
    return iso;
  }
}