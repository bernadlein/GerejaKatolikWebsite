import {
  getUpcomingMasses,
} from '~/application/mass/getUpcomingMasses'

import {
  staticMassRepository,
} from '~/infrastructure/mass/staticMassRepository'

import {
  presentMass,
} from '~/presenters/mass/presentMass'

import {
  parishConfig,
} from '~/config/parish'

export function useMassSchedule(
  limit = 4,
) {
  const {
    data,
    status,
    error,
    refresh,
  } = useAsyncData(
    `upcoming-masses-${limit}`,
    () =>
      getUpcomingMasses(
        staticMassRepository,
        new Date(),
        parishConfig.timezone,
        limit,
      ),
  )

  const upcomingMasses =
    computed(() =>
      (data.value ?? []).map(
        mass =>
          presentMass(
            mass,
            parishConfig.timezone,
          ),
      ),
    )

  const nextMass =
    computed(
      () =>
        upcomingMasses.value[0]
        ?? null,
    )

  let refreshTimer:
    ReturnType<typeof setInterval>
    | undefined

  onMounted(() => {
    // Refresh segera setelah browser aktif.
    refresh()

    // Periksa perubahan jadwal setiap menit.
    refreshTimer = setInterval(
      () => {
        refresh()
      },
      60_000,
    )
  })

  onBeforeUnmount(() => {
    if (refreshTimer) {
      clearInterval(refreshTimer)
    }
  })

  return {
    nextMass,
    upcomingMasses,

    isLoading: computed(
      () =>
        status.value === 'pending',
    ),

    error,

    refresh,
  }
}
