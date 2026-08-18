import type {
  SacramentRepository,
} from '#shared/domain/sacrament/SacramentRepository'

import type {
  SacramentService,
  SacramentSlug,
} from '#shared/domain/sacrament/types'

const sacramentServices: SacramentService[] = [
  {
    id: 'baptism',

    slug: 'baptis',

    title: 'Baptis',

    subtitle: 'Sakramen Baptis',

    summary:
      'Informasi pelayanan Sakramen Baptis di Paroki St. Yosafat.',

    description:
      'Sakramen Baptis merupakan awal kehidupan seseorang dalam persekutuan iman Kristiani dan kehidupan Gereja.',

    icon: 'baptism',

    requirements: [],

    process: [],

    contactNote:
      'Untuk informasi pendaftaran dan jadwal Baptis, silakan menghubungi sekretariat paroki.',

    detailsPublished: false,
  },

  {
    id: 'first-communion',

    slug: 'komuni-pertama',

    title: 'Komuni Pertama',

    subtitle: 'Ekaristi Pertama',

    summary:
      'Informasi persiapan dan pelayanan Komuni Pertama di Paroki St. Yosafat.',

    description:
      'Komuni Pertama menjadi bagian penting dalam perjalanan iman anak untuk semakin mengenal dan mengambil bagian dalam perayaan Ekaristi.',

    icon: 'communion',

    requirements: [],

    process: [],

    contactNote:
      'Informasi program persiapan Komuni Pertama akan diumumkan melalui paroki.',

    detailsPublished: false,
  },

  {
    id: 'confirmation',

    slug: 'krisma',

    title: 'Krisma',

    subtitle: 'Sakramen Penguatan',

    summary:
      'Informasi pendaftaran dan persiapan Sakramen Krisma.',

    description:
      'Sakramen Krisma merupakan Sakramen Penguatan yang meneguhkan umat untuk semakin dewasa dalam iman dan kesaksian Kristiani.',

    icon: 'confirmation',

    requirements: [],

    process: [],

    contactNote:
      'Silakan menghubungi sekretariat untuk informasi periode pendaftaran dan pembinaan Krisma.',

    detailsPublished: false,
  },

  {
    id: 'marriage',

    slug: 'perkawinan',

    title: 'Perkawinan',

    subtitle: 'Sakramen Perkawinan',

    summary:
      'Informasi pelayanan dan persiapan Sakramen Perkawinan.',

    description:
      'Paroki mendampingi pasangan yang mempersiapkan diri menuju kehidupan perkawinan Katolik melalui proses pastoral dan persiapan yang diperlukan.',

    icon: 'marriage',

    requirements: [],

    process: [],

    contactNote:
      'Pasangan yang merencanakan perkawinan dianjurkan menghubungi sekretariat paroki untuk mendapatkan informasi resmi mengenai proses persiapan.',

    detailsPublished: false,
  },

  {
    id: 'anointing',

    slug: 'pengurapan-orang-sakit',

    title: 'Pengurapan Orang Sakit',

    subtitle: 'Pelayanan bagi Umat yang Sakit',

    summary:
      'Informasi permohonan pelayanan Pengurapan Orang Sakit.',

    description:
      'Pelayanan Pengurapan Orang Sakit diberikan bagi umat yang membutuhkan pendampingan dan pelayanan sakramental dalam kondisi sakit atau keadaan tertentu.',

    icon: 'anointing',

    requirements: [],

    process: [],

    contactNote:
      'Untuk kebutuhan pelayanan Pengurapan Orang Sakit, silakan segera menghubungi paroki melalui kontak yang tersedia.',

    detailsPublished: false,
  },
]

export const staticSacramentRepository:
SacramentRepository = {
  async getAll() {
    return sacramentServices
  },

  async getBySlug(
    slug: SacramentSlug,
  ) {
    return (
      sacramentServices.find(
        item => item.slug === slug,
      )
      ?? null
    )
  },
}