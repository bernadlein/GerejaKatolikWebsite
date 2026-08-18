import type {
  AnnouncementRepository,
} from '#shared/domain/announcement/AnnouncementRepository'

import type {
  Announcement,
} from '#shared/domain/announcement/types'

const announcements: Announcement[] = [
  {
    id: 'welcome-parish',
    title: 'Selamat Datang di Paroki St. Yosafat',
    summary:
      'Informasi dan pelayanan Paroki St. Yosafat kini dapat diakses melalui website paroki.',

    publishedAt:
      '2026-08-18T08:00:00+07:00',

    priority: 'important',

    action: {
      label: 'Tentang Paroki',
      to: '/tentang',
    },
  },

  {
    id: 'mass-schedule',
    title: 'Jadwal Misa Mingguan',
    summary:
      'Silakan melihat jadwal Misa Harian dan Misa Minggu Paroki St. Yosafat.',

    publishedAt:
      '2026-08-17T08:00:00+07:00',

    priority: 'normal',

    action: {
      label: 'Lihat Jadwal',
      to: '/jadwal',
    },
  },
]

export const staticAnnouncementRepository:
AnnouncementRepository = {
  async getAll() {
    return announcements
  },
}