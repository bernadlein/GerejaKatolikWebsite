import type {
  BulletinRepository,
} from '#shared/domain/bulletin/BulletinRepository'

import type {
  Bulletin,
} from '#shared/domain/bulletin/types'

// Data sementara.
//
// Jangan isi dengan warta fiktif.
// Ketika PDF/data resmi tersedia,
// tambahkan di sini atau ganti repository
// menggunakan database/API.
const bulletins: Bulletin[] = []

export const staticBulletinRepository:
BulletinRepository = {
  async getAll() {
    return bulletins
  },
}
