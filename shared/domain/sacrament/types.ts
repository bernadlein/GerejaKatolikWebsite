export type SacramentSlug =
  | 'baptis'
  | 'komuni-pertama'
  | 'krisma'
  | 'perkawinan'
  | 'pengurapan-orang-sakit'

export type SacramentIcon =
  | 'baptism'
  | 'communion'
  | 'confirmation'
  | 'marriage'
  | 'anointing'

export interface SacramentProcessStep {
  id: string
  title: string
  description?: string
}

export interface SacramentService {
  id: string

  slug: SacramentSlug

  title: string

  subtitle: string

  summary: string

  description: string

  icon: SacramentIcon

  requirements: string[]

  process: SacramentProcessStep[]

  contactNote?: string

  detailsPublished: boolean
}