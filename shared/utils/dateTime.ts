export interface ZonedDateParts {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
}

export interface LocalDateTimeInput {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second?: number
}

function getPart(
  parts: Intl.DateTimeFormatPart[],
  type: Intl.DateTimeFormatPartTypes,
): number {
  const value = parts.find(
    part => part.type === type,
  )?.value

  return Number(value ?? 0)
}

export function getZonedDateParts(
  date: Date,
  timeZone: string,
): ZonedDateParts {
  const formatter = new Intl.DateTimeFormat(
    'en-CA',
    {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    },
  )

  const parts = formatter.formatToParts(date)

  return {
    year: getPart(parts, 'year'),
    month: getPart(parts, 'month'),
    day: getPart(parts, 'day'),
    hour: getPart(parts, 'hour'),
    minute: getPart(parts, 'minute'),
    second: getPart(parts, 'second'),
  }
}

function getTimeZoneOffsetMs(
  date: Date,
  timeZone: string,
): number {
  const parts = getZonedDateParts(
    date,
    timeZone,
  )

  const representedAsUtc = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour,
    parts.minute,
    parts.second,
  )

  return representedAsUtc - date.getTime()
}

export function zonedDateTimeToDate(
  input: LocalDateTimeInput,
  timeZone: string,
): Date {
  const localAsUtc = Date.UTC(
    input.year,
    input.month - 1,
    input.day,
    input.hour,
    input.minute,
    input.second ?? 0,
  )

  let candidate = new Date(localAsUtc)

  const firstOffset = getTimeZoneOffsetMs(
    candidate,
    timeZone,
  )

  candidate = new Date(
    localAsUtc - firstOffset,
  )

  const correctedOffset = getTimeZoneOffsetMs(
    candidate,
    timeZone,
  )

  return new Date(
    localAsUtc - correctedOffset,
  )
}