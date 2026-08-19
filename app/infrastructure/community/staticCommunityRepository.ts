import type {
  CommunityRepository,
} from '#shared/domain/community/CommunityRepository'

import type {
  ParishCommunity,
} from '#shared/domain/community/types'

/**
 * Data komunitas resmi belum dimasukkan.
 *
 * Jangan isi dengan kelompok fiktif.
 *
 * Setelah daftar resmi kelompok pelayanan
 * Paroki St. Yosafat tersedia,
 * data sementara dapat dimasukkan di sini.
 *
 * Nantinya repository ini dapat diganti:
 *
 * staticCommunityRepository
 *        ↓
 * SupabaseCommunityRepository
 */
const communities: ParishCommunity[] = []

export const staticCommunityRepository:
CommunityRepository = {
  async getAll() {
    return communities
  },

  async getBySlug(
    slug: string,
  ) {
    return (
      communities.find(
        community =>
          community.slug === slug
          && community.published,
      )
      ?? null
    )
  },
}