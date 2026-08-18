import type {
  BulletinRepository,
} from '#shared/domain/bulletin/BulletinRepository'

export async function getLatestBulletins(
  repository: BulletinRepository,
  limit = 3,
) {
  const bulletins =
    await repository.getAll()

  return [...bulletins]
    .sort(
      (a, b) =>
        new Date(
          b.publishedAt,
        ).getTime()
        -
        new Date(
          a.publishedAt,
        ).getTime(),
    )
    .slice(0, limit)
}