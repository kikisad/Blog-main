import { parseISO, format, } from 'date-fns'
import { fr } from 'date-fns/locale'



export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  const frenchLocale = fr
  return <time dateTime={dateString}>{format(date, 'dd MMMM, yyyy', { locale: frenchLocale })}</time>
}
