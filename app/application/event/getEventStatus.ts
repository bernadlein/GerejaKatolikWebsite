import type {
  EventStatus,
  ParishEvent,
} from '#shared/domain/event/types'

export function getEventStatus(
  event: ParishEvent,
  now: Date,
): EventStatus {
  const startsAt =
    new Date(
      event.startsAt,
    ).getTime()

  const endsAt =
    event.endsAt
      ? new Date(
          event.endsAt,
        ).getTime()
      : startsAt

  const currentTime =
    now.getTime()

  if (
    currentTime
    < startsAt
  ) {
    return 'upcoming'
  }

  if (
    currentTime >= startsAt
    && currentTime <= endsAt
  ) {
    return 'ongoing'
  }

  return 'finished'
}