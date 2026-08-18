import type {
  WeeklyMassSchedule,
} from '#shared/domain/mass/types'

export interface PresentedWeeklyMass {
  id: string
  dayLabel: string
  label: string
  location: string
  times: string[]
  variant:
    | 'weekday'
    | 'saturday'
    | 'sunday'
}

export function presentWeeklyMassSchedule(
  schedules: WeeklyMassSchedule[],
): PresentedWeeklyMass[] {
  const weekday = schedules.find(
    item =>
      item.id === 'weekday-evening',
  )

  const saturdayDaily = schedules.find(
    item =>
      item.id === 'saturday-daily',
  )

  const saturdaySunday = schedules.find(
    item =>
      item.id === 'saturday-sunday-mass',
  )

  const sundayMasses = schedules
    .filter(
      item =>
        item.days.includes('sunday'),
    )
    .sort(
      (a, b) =>
        a.time.localeCompare(b.time),
    )

  const result: PresentedWeeklyMass[] = []

  if (weekday) {
    result.push({
      id: 'weekday',
      dayLabel: 'Senin — Jumat',
      label: weekday.label,
      location: weekday.location,
      times: [weekday.time],
      variant: 'weekday',
    })
  }

  if (saturdayDaily) {
    result.push({
      id: 'saturday-daily',
      dayLabel: 'Sabtu',
      label: saturdayDaily.label,
      location: saturdayDaily.location,
      times: [saturdayDaily.time],
      variant: 'saturday',
    })
  }

  if (saturdaySunday) {
    result.push({
      id: 'saturday-sunday',
      dayLabel: 'Sabtu',
      label: saturdaySunday.label,
      location: saturdaySunday.location,
      times: [saturdaySunday.time],
      variant: 'saturday',
    })
  }

  if (sundayMasses.length) {
    result.push({
      id: 'sunday',
      dayLabel: 'Minggu',
      label: 'Misa Minggu',
      location:
        sundayMasses[0]?.location
        ?? 'Gereja Santo Yosafat',

      times:
        sundayMasses.map(
          item => item.time,
        ),

      variant: 'sunday',
    })
  }

  return result
}
