import type {
  ParishRepository,
} from '#shared/domain/parish/ParishRepository'

import type {
  ParishProfile,
} from '#shared/domain/parish/types'

const parishProfile: ParishProfile = {
  introduction:
    'Paroki St. Yosafat merupakan komunitas umat Katolik yang berlokasi di Medokan Semampir, Surabaya, yang bertumbuh dalam iman, persaudaraan, dan pelayanan.',

  inauguration: {
    date: '2025-11-01',

    officiant:
      'Mgr. Agustinus Tri Budi Utomo',

    description:
      'Paroki St. Yosafat diresmikan pada 1 November 2025 oleh Bapa Uskup Mgr. Agustinus Tri Budi Utomo.',
  },

  /*
   * Sejarah resmi akan dimasukkan
   * setelah data dari paroki tersedia.
   */
  history: [],

  patronSaint: {
    title: 'Santo Yosafat',

    published: false,
  },

  vision: undefined,

  missions: [],

  pastors: [],

  historyPublished: false,

  visionMissionPublished: false,

  pastorsPublished: false,
}

export const staticParishRepository:
ParishRepository = {
  async getProfile() {
    return parishProfile
  },
}