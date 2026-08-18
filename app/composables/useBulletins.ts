import {
  getLatestBulletins,
} from '~/application/bulletin/getLatestBulletins'

import {
  staticBulletinRepository,
} from '~/infrastructure/bulletin/staticBulletinRepository'

export function useBulletins(
  limit = 3,
) {
  const {
    data,
    status,
    error,
  } = useAsyncData(
    `bulletins-${limit}`,
    () =>
      getLatestBulletins(
        staticBulletinRepository,
        limit,
      ),
  )

  return {
    bulletins:
      computed(
        () =>
          data.value ?? [],
      ),

    status,
    error,
  }
}
