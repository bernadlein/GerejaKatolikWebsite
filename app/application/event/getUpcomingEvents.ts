import type {
  EventRepository,
} from '#shared/domain/event/EventRepository'

import {
  getEventStatus,
} from './getEventStatus'

export async function getUpcomingEvents(
  repository: EventRepository,
  now: Date,
  limit = 4,
) {
  const events =
    await repository.getAll()

  return events
    .filter(
      event =>
        event.published,
    )
    .filter((event) => {
      const status =
        getEventStatus(
          event,
          now,
        )

      return (
        status === 'upcoming'
        || status === 'ongoing'
      )
    })
    .sort(
      (a, b) =>
        new Date(
          a.startsAt,
        ).getTime()
        -
        new Date(
          b.startsAt,
        ).getTime(),
    )
    .slice(
      0,
      limit,
    )
}
