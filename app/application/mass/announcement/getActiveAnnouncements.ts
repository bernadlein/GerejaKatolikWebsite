import type {
  AnnouncementRepository,
} from '#shared/domain/announcement/AnnouncementRepository'

export async function getActiveAnnouncements(
  repository: AnnouncementRepository,
  now: Date,
  limit = 3,
) {
  const announcements =
    await repository.getAll()

  return announcements
    .filter((announcement) => {
      if (!announcement.expiresAt) {
        return true
      }

      return (
        new Date(
          announcement.expiresAt,
        ).getTime()
        > now.getTime()
      )
    })
    .sort((a, b) => {
      if (
        a.priority !== b.priority
      ) {
        return a.priority === 'important'
          ? -1
          : 1
      }

      return (
        new Date(
          b.publishedAt,
        ).getTime()
        -
        new Date(
          a.publishedAt,
        ).getTime()
      )
    })
    .slice(0, limit)
}