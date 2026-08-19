import {
  parishConfig,
} from '~/config/parish'

import {
  getEventBySlug,
} from '~/application/event/getEventBySlug'

import {
  staticEventRepository,
} from '~/infrastructure/event/staticEventRepository'

import {
  presentEvent,
} from '~/presenters/event/presentEvent'

export function useEventDetail(
  slug: string,
) {
  const {
    data,
    status,
    error,
  } = useAsyncData(
    `event-${slug}`,

    () =>
      getEventBySlug(
        staticEventRepository,
        slug,
      ),
  )

  const event =
    computed(
      () =>
        data.value
          ? presentEvent(
              data.value,
              new Date(),
              parishConfig.timezone,
            )
          : null,
    )

  return {
    event,
    status,
    error,
  }
}
