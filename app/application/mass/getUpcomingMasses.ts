import type {
  MassDay,
  UpcomingMass,
  WeeklyMassSchedule,
} from '#shared/domain/mass/types'

import type {
  MassRepository,
} from '#shared/domain/mass/MassRepository'

import {
  getZonedDateParts,
  zonedDateTimeToDate,
} from '#shared/utils/dateTime'

const dayIndex: Record<MassDay, number> = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
}

function addDays(
  year: number,
  month: number,
  day: number,
  amount: number,
) {
  const date = new Date(
    Date.UTC(
      year,
      month - 1,
      day + amount,
    ),
  )

  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  }
}

function getLocalDayIndex(
  now: Date,
  timeZone: string,
): number {
  const parts = getZonedDateParts(
    now,
    timeZone,
  )

  const localCalendarDate = new Date(
    Date.UTC(
      parts.year,
      parts.month - 1,
      parts.day,
    ),
  )

  return localCalendarDate.getUTCDay()
}

function createOccurrence(
  schedule: WeeklyMassSchedule,
  day: MassDay,
  now: Date,
  timeZone: string,
): UpcomingMass {
  const nowParts = getZonedDateParts(
    now,
    timeZone,
  )

  const currentDay =
    getLocalDayIndex(
      now,
      timeZone,
    )

  const targetDay =
    dayIndex[day]

  let daysAhead =
    (targetDay - currentDay + 7) % 7

  const [hour, minute] =
    schedule.time
      .split(':')
      .map(Number)

  let localDate = addDays(
    nowParts.year,
    nowParts.month,
    nowParts.day,
    daysAhead,
  )

  let startsAt = zonedDateTimeToDate(
    {
      ...localDate,
      hour,
      minute,
    },
    timeZone,
  )

  // Jadwal hari ini sudah lewat.
  // Pindahkan ke minggu berikutnya.
  if (
    daysAhead === 0
    && startsAt <= now
  ) {
    daysAhead = 7

    localDate = addDays(
      nowParts.year,
      nowParts.month,
      nowParts.day,
      daysAhead,
    )

    startsAt = zonedDateTimeToDate(
      {
        ...localDate,
        hour,
        minute,
      },
      timeZone,
    )
  }

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
  timeZone: string,
  limit = 4,
): Promise<UpcomingMass[]> {
  const schedules =
    await repository.getWeeklySchedule()

  const occurrences =
    schedules.flatMap(
      schedule =>
        schedule.days.map(
          day =>
            createOccurrence(
              schedule,
              day,
              now,
              timeZone,
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
