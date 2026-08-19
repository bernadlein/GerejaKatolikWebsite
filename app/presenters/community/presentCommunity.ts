import type {
  CommunityCategory,
  ParishCommunity,
} from '#shared/domain/community/types'

const categoryLabels:
Record<CommunityCategory, string> = {
  youth:
    'Kaum Muda',

  children:
    'Anak & Remaja',

  family:
    'Keluarga',

  women:
    'Perempuan',

  liturgy:
    'Liturgi',

  devotional:
    'Devosi & Spiritualitas',

  music:
    'Musik & Koor',

  social:
    'Sosial',

  formation:
    'Pembinaan Iman',

  other:
    'Komunitas',
}

export function presentCommunity(
  community: ParishCommunity,
) {
  return {
    ...community,

    displayName:
      community.shortName
        ? community.shortName
        : community.name,

    categoryLabel:
      categoryLabels[
        community.category
      ],

    hasActivities:
      community.activities.length > 0,

    hasMeeting:
      Boolean(
        community.meeting?.schedule
        || community.meeting?.location,
      ),

    hasCoordinator:
      Boolean(
        community.coordinator?.name
        || community.coordinator?.phone
        || community.coordinator?.email,
      ),

    canJoin:
      Boolean(
        community.joinInfo,
      ),

    hasCoverImage:
      Boolean(
        community.coverImage,
      ),
  }
}

export type PresentedCommunity =
  ReturnType<
    typeof presentCommunity
  >