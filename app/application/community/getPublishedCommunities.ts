import type {
  CommunityRepository,
} from '#shared/domain/community/CommunityRepository'

export async function getPublishedCommunities(
  repository: CommunityRepository,
) {
  const communities =
    await repository.getAll()

  return communities
    .filter(
      community =>
        community.published,
    )
    .sort(
      (a, b) =>
        a.name.localeCompare(
          b.name,
          'id-ID',
        ),
    )
}