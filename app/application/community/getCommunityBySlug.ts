import type {
  CommunityRepository,
} from '#shared/domain/community/CommunityRepository'

export async function getCommunityBySlug(
  repository: CommunityRepository,
  slug: string,
) {
  return repository.getBySlug(
    slug,
  )
}
