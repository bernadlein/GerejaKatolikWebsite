import type {
  EventRepository,
} from '#shared/domain/event/EventRepository'

export async function getPublishedEvents(
  repository: EventRepository,
) {
  const events =
    await repository.getAll()

  return events
    .filter(
      event =>
        event.published,
    )
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
}
