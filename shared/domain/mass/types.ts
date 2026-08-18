export type MassDay =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

export interface WeeklyMassSchedule {
  id: string
  days: MassDay[]
  time: string
  label: string
  location: string
}

export interface UpcomingMass {
  id: string
  day: MassDay
  time: string
  label: string
  location: string
  startsAt: Date
}
