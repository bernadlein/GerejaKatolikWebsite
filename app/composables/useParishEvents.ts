import {
  parishConfig,
} from '~/config/parish'

import {
  getPublishedEvents,
} from '~/application/event/getPublishedEvents'

import {
  staticEventRepository,
} from '~/infrastructure/event/staticEventRepository'

import {
  presentEvent,
} from '~/presenters/event/presentEvent'

export function useParishEvents() {
  const {
    data,
    status,
    error,
    refresh,
  } = useAsyncData(
    'parish-events',

    () =>
      getPublishedEvents(
        staticEventRepository,
      ),
  )

  const now =
    ref(
      new Date(),
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

  const upcomingEvents =
    computed(() =>
      events.value.filter(
        event =>
          event.status
            === 'upcoming',
      ),
    )

  const ongoingEvents =
    computed(() =>
      events.value.filter(
        event =>
          event.status
            === 'ongoing',
      ),
    )

  const pastEvents =
    computed(() =>
      [...events.value]
        .filter(
          event =>
            event.status
              === 'finished',
        )
        .sort(
          (a, b) =>
            new Date(
              b.startsAt,
            ).getTime()
            -
            new Date(
              a.startsAt,
            ).getTime(),
        ),
    )

  let timer:
    ReturnType<typeof setInterval>
    | undefined

  onMounted(() => {
    now.value =
      new Date()

    timer =
      setInterval(
        () => {
          now.value =
            new Date()
        },
        60_000,
      )
  })

  onBeforeUnmount(
    () => {
      if (timer) {
        clearInterval(
          timer,
        )
      }
    },
  )

  return {
    events,

    upcomingEvents,

    ongoingEvents,

    pastEvents,

    status,

    error,

    refresh,
  }
}
