import type {
  EventRepository,
} from '#shared/domain/event/EventRepository'

export async function getEventBySlug(
  repository: EventRepository,
  slug: string,
) {
  return repository.getBySlug(
    slug,
  )
}
