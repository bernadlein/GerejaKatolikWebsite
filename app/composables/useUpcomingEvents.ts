import {
  parishConfig,
} from '~/config/parish'

import {
  getUpcomingEvents,
} from '~/application/event/getUpcomingEvents'

import {
  staticEventRepository,
} from '~/infrastructure/event/staticEventRepository'

import {
  presentEvent,
} from '~/presenters/event/presentEvent'

export function useUpcomingEvents(
  limit = 3,
) {
  const now =
    ref(
      new Date(),
    )

  const {
    data,
    status,
    error,
    refresh,
  } = useAsyncData(
    `upcoming-events-${limit}`,

    () =>
      getUpcomingEvents(
        staticEventRepository,
        new Date(),
        limit,
      ),
  )

  const events =
    computed(() =>
      (data.value ?? [])
        .map(
          event =>
            presentEvent(
              event,
              now.value,
              parishConfig.timezone,
            ),
        ),
    )

  return {
    events,

    status,

    error,

    refresh,
  }
}
