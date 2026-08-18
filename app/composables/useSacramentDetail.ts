import type {
  SacramentSlug,
} from '#shared/domain/sacrament/types'

import {
  getSacramentBySlug,
} from '~/application/sacrament/getSacramentBySlug'

import {
  staticSacramentRepository,
} from '~/infrastructure/sacrament/staticSacramentRepository'

import {
  presentSacrament,
} from '~/presenters/sacrament/presentSacrament'

export function useSacramentDetail(
  slug: SacramentSlug,
) {
  const {
    data,
    status,
    error,
    refresh,
  } = useAsyncData(
    `sacrament-${slug}`,

    () =>
      getSacramentBySlug(
        staticSacramentRepository,
        slug,
      ),
  )

  const sacrament =
    computed(() =>
      data.value
        ? presentSacrament(
            data.value,
          )
        : null,
    )

  return {
    sacrament,
    status,
    error,
    refresh,
  }
}
