import type {
  CommunityRepository,
} from '#shared/domain/community/CommunityRepository'

export async function getFeaturedCommunities(
  repository: CommunityRepository,
  limit = 4,
) {
  const communities =
    await repository.getAll()

  return communities
    .filter(
      community =>
        community.published
        && community.featured,
    )
    .sort(
      (a, b) =>
        a.name.localeCompare(
          b.name,
          'id-ID',
        ),
    )
    .slice(
      0,
      limit,
    )
}
