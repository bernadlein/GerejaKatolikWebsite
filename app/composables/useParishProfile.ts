import {
  getParishProfile,
} from '~/application/parish/getParishProfile'

import {
  staticParishRepository,
} from '~/infrastructure/parish/staticParishRepository'

import {
  presentParishProfile,
} from '~/presenters/parish/presentParishProfile'

export function useParishProfile() {
  const {
    data,
    status,
    error,
    refresh,
  } = useAsyncData(
    'parish-profile',
    () =>
      getParishProfile(
        staticParishRepository,
      ),
  )

  const profile =
    computed(() =>
      data.value
        ? presentParishProfile(
            data.value,
          )
        : null,
    )

  return {
    profile,
    status,
    error,
    refresh,
  }
}
