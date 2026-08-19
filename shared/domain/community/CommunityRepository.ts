import type {
  ParishCommunity,
} from './types'

export interface CommunityRepository {
  getAll(): Promise<ParishCommunity[]>

  getBySlug(
    slug: string,
  ): Promise<ParishCommunity | null>
}
