import {
  getFeaturedCommunities,
} from '~/application/community/getFeaturedCommunities'

import {
  staticCommunityRepository,
} from '~/infrastructure/community/staticCommunityRepository'

import {
  presentCommunity,
} from '~/presenters/community/presentCommunity'

export function useFeaturedCommunities(
  limit = 4,
) {
  const {
    data,
    status,
    error,
  } = useAsyncData(
    `featured-communities-${limit}`,

    () =>
      getFeaturedCommunities(
        staticCommunityRepository,
        limit,
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
  }
}
