import type {
  Bulletin,
} from '#shared/domain/bulletin/types'

export interface PresentedBulletin {
  id: string

  title: string

  liturgicalLabel?: string

  description?: string

  publishedAt: string

  dateLabel: string

  monthLabel: string

  year: number

  month: number

  pdfUrl?: string

  hasPdf: boolean
}

export function presentBulletin(
  bulletin: Bulletin,
): PresentedBulletin {
  const publishedAt =
    new Date(
      bulletin.publishedAt,
    )

  return {
    id: bulletin.id,

    title: bulletin.title,

    liturgicalLabel:
      bulletin.liturgicalLabel,

    description:
      bulletin.description,

    publishedAt:
      bulletin.publishedAt,

    dateLabel:
      new Intl.DateTimeFormat(
        'id-ID',
        {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        },
      ).format(
        publishedAt,
      ),

    monthLabel:
      new Intl.DateTimeFormat(
        'id-ID',
        {
          month: 'long',
        },
      ).format(
        publishedAt,
      ),

    year:
      publishedAt.getFullYear(),

    month:
      publishedAt.getMonth() + 1,

    pdfUrl:
      bulletin.pdfUrl,

    hasPdf:
      Boolean(
        bulletin.pdfUrl,
      ),
  }
}