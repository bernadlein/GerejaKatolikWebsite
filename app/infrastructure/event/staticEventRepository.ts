import type {
  EventRepository,
} from '#shared/domain/event/EventRepository'

import type {
  ParishEvent,
} from '#shared/domain/event/types'

/**
 * Jangan isi dengan agenda fiktif
 * untuk website resmi paroki.
 *
 * Setelah agenda resmi tersedia,
 * masukkan di sini.
 *
 * Nanti repository ini bisa diganti
 * dengan SupabaseEventRepository.
 */
const events: ParishEvent[] = []

export const staticEventRepository:
EventRepository = {
  async getAll() {
    return events
  },

  async getBySlug(
    slug: string,
  ) {
    return (
      events.find(
        event =>
          event.slug === slug
          && event.published,
      )
      ?? null
    )
  },
}