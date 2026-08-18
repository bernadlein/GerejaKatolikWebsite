import type { MassRepository } from '#shared/domain/mass/MassRepository'

import type {
  MassDay,
  UpcomingMass,
  WeeklyMassSchedule,
} from '#shared/domain/mass/types'

const dayIndex: Record<MassDay, number> = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
}

function getNextOccurrence(
  schedule: WeeklyMassSchedule,
  day: MassDay,
  now: Date,
): UpcomingMass {
  const [hours, minutes] = schedule.time
    .split(':')
    .map(Number)

  const startsAt = new Date(now)

  startsAt.setHours(
    hours,
    minutes,
    0,
    0,
  )

  const targetDay = dayIndex[day]

  let daysAhead =
    (targetDay - now.getDay() + 7) % 7

  if (
    daysAhead === 0
    && startsAt <= now
  ) {
    daysAhead = 7
  }

  startsAt.setDate(
    now.getDate() + daysAhead,
  )

  return {
    id: `${schedule.id}-${day}`,
    day,
    time: schedule.time,
    label: schedule.label,
    location: schedule.location,
    startsAt,
  }
}

export async function getUpcomingMasses(
  repository: MassRepository,
  now: Date,
  limit = 3,
): Promise<UpcomingMass[]> {
  const schedules =
    await repository.getWeeklySchedule()

  const occurrences =
    schedules.flatMap((schedule) =>
      schedule.days.map((day) =>
        getNextOccurrence(
          schedule,
          day,
          now,
        ),
      ),
    )

  return occurrences
    .sort(
      (a, b) =>
        a.startsAt.getTime()
        - b.startsAt.getTime(),
    )
    .slice(0, limit)
}
