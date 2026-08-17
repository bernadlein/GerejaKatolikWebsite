import type { WeeklyMassSchedule } from './types'

export interface MassRepository {
  getWeeklySchedule(): Promise<WeeklyMassSchedule[]>
}
