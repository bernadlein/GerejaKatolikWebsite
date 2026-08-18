export interface ParishConfig {
  name: string
  churchName: string
  city: string
  tagline: string
  address: string

  inauguration: {
    date: string
    displayDate: string
    officiant: string
  }

  contact: {
    email: string
    phones: string[]
  }

  social: {
    instagram: {
      username: string
      url: string
    }
    youtube: {
      name: string
      url?: string
    }
  }

  branding: {
    logo: string
  }
}

export const parishConfig: ParishConfig = {
  name: 'Paroki St. Yosafat',

  churchName: 'Gereja Santo Yosafat Surabaya',

  city: 'Surabaya',

  tagline: 'Bertumbuh bersama dalam iman, persaudaraan, dan pelayanan.',

  address:
    'Jl. KRI Yos Sudarso, Medokan Semampir, Surabaya, 60119',

  inauguration: {
    date: '2025-11-01',
    displayDate: '1 November 2025',
    officiant: 'Mgr. Agustinus Tri Budi Utomo',
  },

  contact: {
    email: 'gerejastyosafat@gmail.com',

    phones: [
      '03159181855',
      '08113281211',
    ],
  },

  social: {
    instagram: {
      username: 'gerejayosafat.sby',
      url: 'https://www.instagram.com/gerejayosafat.sby/',
    },

    youtube: {
      name: 'Gereja Santo Yosafat Surabaya',
    },
  },

  branding: {
    logo: '/images/logo-paroki.png',
  },
}
