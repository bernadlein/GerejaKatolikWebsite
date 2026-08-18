import { getWeeklyMassSchedule } from '~/application/mass/getWeeklyMassSchedule'
import { staticMassRepository } from '~/infrastructure/mass/staticMassRepository'

export function useWeeklyMassSchedule() {
  return useAsyncData(
    'weekly-mass-schedule',
    () =>
      getWeeklyMassSchedule(
        staticMassRepository,
      ),
  )
}
