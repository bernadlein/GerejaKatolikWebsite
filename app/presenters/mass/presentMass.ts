import type {
  UpcomingMass,
} from '#shared/domain/mass/types'

export interface PresentedMass {
  id: string
  label: string
  location: string
  dateLabel: string
  shortDateLabel: string
  timeLabel: string
}

export function presentMass(
  mass: UpcomingMass,
  timeZone: string,
): PresentedMass {
  const startsAt =
    mass.startsAt instanceof Date
      ? mass.startsAt
      : new Date(mass.startsAt)

  const dateLabel =
    new Intl.DateTimeFormat(
      'id-ID',
      {
        timeZone,
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      },
    ).format(startsAt)

  const shortDateLabel =
    new Intl.DateTimeFormat(
      'id-ID',
      {
        timeZone,
        weekday: 'long',
        day: 'numeric',
        month: 'short',
      },
    ).format(startsAt)

  const timeLabel =
    new Intl.DateTimeFormat(
      'id-ID',
      {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
      },
    ).format(startsAt)

  return {
    id: mass.id,
    label: mass.label,
    location: mass.location,
    dateLabel,
    shortDateLabel,
    timeLabel: `${timeLabel} WIB`,
  }
}