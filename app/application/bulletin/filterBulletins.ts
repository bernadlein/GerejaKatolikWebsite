import type {
  Bulletin,
} from '#shared/domain/bulletin/types'

export interface BulletinFilter {
  year?: number
  month?: number
}

export function filterBulletins(
  bulletins: Bulletin[],
  filter: BulletinFilter,
): Bulletin[] {
  return bulletins
    .filter((bulletin) => {
      const date = new Date(
        bulletin.publishedAt,
      )

      if (
        filter.year
        && date.getFullYear()
          !== filter.year
      ) {
        return false
      }

      if (
        filter.month
        && date.getMonth() + 1
          !== filter.month
      ) {
        return false
      }

      return true
    })
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
}
