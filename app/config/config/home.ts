export interface HomeHeroConfig {
  eyebrow: string
  title: string
  description: string

  primaryAction: {
    label: string
    to: string
  }

  secondaryAction: {
    label: string
    to: string
  }
}

export interface HomePageConfig {
  hero: HomeHeroConfig
}

export const homePageConfig: HomePageConfig = {
  hero: {
    eyebrow: 'Selamat Datang di',

    title: 'Paroki St. Yosafat',

    description:
      'Bertumbuh bersama sebagai komunitas umat Katolik dalam iman, persaudaraan, dan pelayanan.',

    primaryAction: {
      label: 'Lihat Jadwal Misa',
      to: '/jadwal',
    },

    secondaryAction: {
      label: 'Tentang Paroki',
      to: '/tentang',
    },
  },
}