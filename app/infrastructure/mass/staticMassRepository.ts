import type { MassRepository } from '#shared/domain/mass/MassRepository'
import type { WeeklyMassSchedule } from '#shared/domain/mass/types'

const weeklySchedule: WeeklyMassSchedule[] = [
  { id: 'weekday-morning', day: 'monday', time: '06:00', label: 'Misa Harian', location: 'Gereja Utama' },
  { id: 'weekday-evening', day: 'monday', time: '18:00', label: 'Misa Harian', location: 'Gereja Utama' },
  { id: 'saturday-evening', day: 'saturday', time: '18:00', label: 'Misa Minggu Antisipasi', location: 'Gereja Utama' },
  { id: 'sunday-early', day: 'sunday', time: '06:00', label: 'Misa Minggu', location: 'Gereja Utama' },
  { id: 'sunday-morning', day: 'sunday', time: '08:00', label: 'Misa Minggu', location: 'Gereja Utama' },
  { id: 'sunday-evening', day: 'sunday', time: '18:00', label: 'Misa Minggu', location: 'Gereja Utama' },
]

export const staticMassRepository: MassRepository = {
  async getWeeklySchedule() {
    return weeklySchedule
  },
}
