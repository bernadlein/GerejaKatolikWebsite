import {
  getSacramentServices,
} from '~/application/sacrament/getSacramentServices'

import {
  staticSacramentRepository,
} from '~/infrastructure/sacrament/staticSacramentRepository'

import {
  presentSacrament,
} from '~/presenters/sacrament/presentSacrament'

export function useSacraments() {
  const {
    data,
    status,
    error,
    refresh,
  } = useAsyncData(
    'sacrament-services',

    () =>
      getSacramentServices(
        staticSacramentRepository,
      ),
  )

  const sacraments =
    computed(
      () =>
        (data.value ?? [])
          .map(
            presentSacrament,
          ),
    )

  return {
    sacraments,
    status,
    error,
    refresh,
  }
}
