import type { MassRepository } from '#shared/domain/mass/MassRepository'
import type { WeeklyMassSchedule } from '#shared/domain/mass/types'

const weeklySchedule: WeeklyMassSchedule[] = [
  {
    id: 'weekday-evening',
    days: [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
    ],
    time: '18:00',
    label: 'Misa Harian',
    location: 'Gereja Santo Yosafat',
  },

  {
    id: 'saturday-daily',
    days: ['saturday'],
    time: '06:00',
    label: 'Misa Harian',
    location: 'Gereja Santo Yosafat',
  },

  {
    id: 'saturday-sunday-mass',
    days: ['saturday'],
    time: '17:00',
    label: 'Misa Minggu',
    location: 'Gereja Santo Yosafat',
  },

  {
    id: 'sunday-morning',
    days: ['sunday'],
    time: '10:00',
    label: 'Misa Minggu',
    location: 'Gereja Santo Yosafat',
  },

  {
    id: 'sunday-evening',
    days: ['sunday'],
    time: '17:00',
    label: 'Misa Minggu',
    location: 'Gereja Santo Yosafat',
  },
]

export const staticMassRepository: MassRepository = {
  async getWeeklySchedule() {
    return weeklySchedule
  },
}
