import type {
  EventCategory,
  EventStatus,
  ParishEvent,
} from '#shared/domain/event/types'

import {
  getEventStatus,
} from '~/application/event/getEventStatus'

const categoryLabels:
Record<EventCategory, string> = {
  liturgi: 'Liturgi',

  pastoral:
    'Pastoral',

  komunitas:
    'Komunitas',

  sosial:
    'Sosial',

  formasi:
    'Formasi',

  lainnya:
    'Kegiatan',
}

const statusLabels:
Record<EventStatus, string> = {
  upcoming:
    'Akan Datang',

  ongoing:
    'Berlangsung',

  finished:
    'Selesai',
}

export function presentEvent(
  event: ParishEvent,
  now: Date,
  timeZone: string,
) {
  const startsAt =
    new Date(
      event.startsAt,
    )

  const endsAt =
    event.endsAt
      ? new Date(
          event.endsAt,
        )
      : null

  const status =
    getEventStatus(
      event,
      now,
    )

  const dateLabel =
    new Intl.DateTimeFormat(
      'id-ID',
      {
        timeZone,

        weekday:
          'long',

        day:
          'numeric',

        month:
          'long',

        year:
          'numeric',
      },
    ).format(
      startsAt,
    )

  const shortDateLabel =
    new Intl.DateTimeFormat(
      'id-ID',
      {
        timeZone,

        day:
          'numeric',

        month:
          'short',

        year:
          'numeric',
      },
    ).format(
      startsAt,
    )

  const startTimeLabel =
    new Intl.DateTimeFormat(
      'id-ID',
      {
        timeZone,

        hour:
          '2-digit',

        minute:
          '2-digit',

        hourCycle:
          'h23',
      },
    ).format(
      startsAt,
    )

  const endTimeLabel =
    endsAt
      ? new Intl.DateTimeFormat(
          'id-ID',
          {
            timeZone,

            hour:
              '2-digit',

            minute:
              '2-digit',

            hourCycle:
              'h23',
          },
        ).format(
          endsAt,
        )
      : null

  const timeLabel =
    endTimeLabel
      ? `${startTimeLabel} – ${endTimeLabel} WIB`
      : `${startTimeLabel} WIB`

  return {
    ...event,

    status,

    statusLabel:
      statusLabels[
        status
      ],

    categoryLabel:
      categoryLabels[
        event.category
      ],

    dateLabel,

    shortDateLabel,

    timeLabel,

    hasCoverImage:
      Boolean(
        event.coverImage,
      ),

    canRegister:
      Boolean(
        event.registration
          ?.enabled
        && event.registration
          ?.url
        && status !== 'finished',
      ),
  }
}

export type PresentedEvent =
  ReturnType<
    typeof presentEvent
  >