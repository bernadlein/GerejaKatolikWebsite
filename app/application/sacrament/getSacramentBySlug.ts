import type {
  SacramentRepository,
} from '#shared/domain/sacrament/SacramentRepository'

import type {
  SacramentSlug,
} from '#shared/domain/sacrament/types'

export async function getSacramentBySlug(
  repository: SacramentRepository,
  slug: SacramentSlug,
) {
  return repository.getBySlug(
    slug,
  )
}
