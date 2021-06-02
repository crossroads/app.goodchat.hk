import padStart from 'lodash/padStart'

/**
 * Returns a time string from the date
 *
 */
export function timeString(date: Date) {
  const hours = padStart(String(date.getHours()), 2, '0');
  const minutes = padStart(String(date.getMinutes()), 2, '0');

  return `${hours}:${minutes}`
}
