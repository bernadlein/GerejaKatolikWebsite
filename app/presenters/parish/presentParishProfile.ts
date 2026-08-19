import type {
  ParishProfile,
} from '#shared/domain/parish/types'

export function presentParishProfile(
  profile: ParishProfile,
) {
  const inaugurationDate =
    new Date(
      `${profile.inauguration.date}T00:00:00+07:00`,
    )

  const inaugurationDateLabel =
    new Intl.DateTimeFormat(
      'id-ID',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Jakarta',
      },
    ).format(
      inaugurationDate,
    )

  return {
    ...profile,

    inauguration: {
      ...profile.inauguration,

      dateLabel:
        inaugurationDateLabel,
    },

    hasHistory:
      profile.historyPublished
      && profile.history.length > 0,

    hasVisionMission:
      profile.visionMissionPublished
      && Boolean(
        profile.vision
        || profile.missions.length,
      ),

    hasPastors:
      profile.pastorsPublished
      && profile.pastors.length > 0,

    hasPatronSaint:
      profile.patronSaint.published,
  }
}

export type PresentedParishProfile =
  ReturnType<
    typeof presentParishProfile
  >