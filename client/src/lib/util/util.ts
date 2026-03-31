import { format, type DateArg } from "date-fns";
import { nb } from 'date-fns/locale';

export function formatDate(date: DateArg<Date>) {
  if (!date) return 'No date passed';
  return format(date, 'dd. MMM yyyy hh:mm', { locale: nb })
}