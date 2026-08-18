import type {
  SacramentService,
} from '#shared/domain/sacrament/types'

export interface PresentedSacrament {
  id: string
  slug: string

  title: string
  subtitle: string
  summary: string
  description: string

  icon: SacramentService['icon']

  requirements: string[]

  process: SacramentService['process']

  contactNote?: string

  hasRequirements: boolean
  hasProcess: boolean
  detailsPublished: boolean
}

export function presentSacrament(
  sacrament: SacramentService,
): PresentedSacrament {
  return {
    id: sacrament.id,

    slug: sacrament.slug,

    title: sacrament.title,

    subtitle:
      sacrament.subtitle,

    summary:
      sacrament.summary,

    description:
      sacrament.description,

    icon:
      sacrament.icon,

    requirements:
      sacrament.requirements,

    process:
      sacrament.process,

    contactNote:
      sacrament.contactNote,

    hasRequirements:
      sacrament.requirements.length > 0,

    hasProcess:
      sacrament.process.length > 0,

    detailsPublished:
      sacrament.detailsPublished,
  }
}