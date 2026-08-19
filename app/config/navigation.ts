export interface NavigationItem {
  label: string
  to: string
}

export const mainNavigation: NavigationItem[] = [
  { label: 'Beranda', to: '/' },
  { label: 'Jadwal', to: '/jadwal' },
  { label: 'Warta', to: '/warta' },
  { label: 'Kegiatan', to: '/kegiatan' },
  { label: 'Komunitas', to: '/komunitas'},
  { label: 'Sakramen', to: '/sakramen' },
  { label: 'Tentang', to: '/tentang' },
  { label: 'Kontak', to: '/kontak' },
]
