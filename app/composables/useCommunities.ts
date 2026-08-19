import {
  getPublishedCommunities,
} from '~/application/community/getPublishedCommunities'

import {
  staticCommunityRepository,
} from '~/infrastructure/community/staticCommunityRepository'

import {
  presentCommunity,
} from '~/presenters/community/presentCommunity'

export function useCommunities() {
  const {
    data,
    status,
    error,
    refresh,
  } = useAsyncData(
    'parish-communities',

    () =>
      getPublishedCommunities(
        staticCommunityRepository,
      ),
  )

  const communities =
    computed(
      () =>
        (data.value ?? [])
          .map(
            presentCommunity,
          ),
    )

  return {
    communities,

    status,

    error,

    refresh,
  }
}
