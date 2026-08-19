import {
  getCommunityBySlug,
} from '~/application/community/getCommunityBySlug'

import {
  staticCommunityRepository,
} from '~/infrastructure/community/staticCommunityRepository'

import {
  presentCommunity,
} from '~/presenters/community/presentCommunity'

export function useCommunityDetail(
  slug: string,
) {
  const {
    data,
    status,
    error,
  } = useAsyncData(
    `community-${slug}`,

    () =>
      getCommunityBySlug(
        staticCommunityRepository,
        slug,
      ),
  )

  const community =
    computed(
      () =>
        data.value
          ? presentCommunity(
              data.value,
            )
          : null,
    )

  return {
    community,

    status,

    error,
  }
}
