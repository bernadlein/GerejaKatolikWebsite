import {
  getActiveAnnouncements,
} from '~/application/announcement/getActiveAnnouncements'

import {
  staticAnnouncementRepository,
} from '~/infrastructure/announcement/staticAnnouncementRepository'

export function useAnnouncements(
  limit = 3,
) {
  const {
    data,
    status,
    error,
  } = useAsyncData(
    `announcements-${limit}`,
    () =>
      getActiveAnnouncements(
        staticAnnouncementRepository,
        new Date(),
        limit,
      ),
  )

  return {
    announcements:
      computed(
        () =>
          data.value ?? [],
      ),

    status,
    error,
  }
}
