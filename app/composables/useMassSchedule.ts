import { getUpcomingMasses } from '~/application/mass/getUpcomingMasses'
import { staticMassRepository } from '~/infrastructure/mass/staticMassRepository'

export function useMassSchedule() {
  const clock = useState('mass-schedule-clock', () => new Date())

  return useAsyncData('upcoming-masses', () =>
    getUpcomingMasses(staticMassRepository, clock.value, 3),
  )
}
