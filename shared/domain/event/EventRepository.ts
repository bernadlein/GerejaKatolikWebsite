import type {
  ParishEvent,
} from './types'

export interface EventRepository {
  getAll(): Promise<ParishEvent[]>

  getBySlug(
    slug: string,
  ): Promise<ParishEvent | null>
}