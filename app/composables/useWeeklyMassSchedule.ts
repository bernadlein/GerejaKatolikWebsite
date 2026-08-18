import {
  getWeeklyMassSchedule,
} from '~/application/mass/getWeeklyMassSchedule'

import {
  staticMassRepository,
} from '~/infrastructure/mass/staticMassRepository'

import {
  presentWeeklyMassSchedule,
} from '~/presenters/mass/presentWeeklyMassSchedule'

export function useWeeklyMassSchedule() {
  const {
    data,
    status,
    error,
    refresh,
  } = useAsyncData(
    'weekly-mass-schedule',
    () =>
      getWeeklyMassSchedule(
        staticMassRepository,
      ),
  )

  const schedules = computed(
    () =>
      presentWeeklyMassSchedule(
        data.value ?? [],
      ),
  )

  return {
    schedules,
    status,
    error,
    refresh,
  }
}
