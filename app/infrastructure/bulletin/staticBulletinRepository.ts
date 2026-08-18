import type {
  BulletinRepository,
} from '#shared/domain/bulletin/BulletinRepository'

import type {
  Bulletin,
} from '#shared/domain/bulletin/types'

const bulletins: Bulletin[] = [
  {
    id: 'warta-16-aug-2026',

    title:
      'Warta Paroki — 16 Agustus 2026',

    liturgicalLabel:
      'Minggu XX Masa Biasa',

    publishedAt:
      '2026-08-16T07:00:00+07:00',

    description:
      'Warta mingguan dan informasi kehidupan Paroki St. Yosafat.',
  },

  {
    id: 'warta-09-aug-2026',

    title:
      'Warta Paroki — 9 Agustus 2026',

    liturgicalLabel:
      'Minggu XIX Masa Biasa',

    publishedAt:
      '2026-08-09T07:00:00+07:00',

    description:
      'Warta mingguan dan informasi kehidupan Paroki St. Yosafat.',
  },
]

export const staticBulletinRepository:
BulletinRepository = {
  async getAll() {
    return bulletins
  },
}