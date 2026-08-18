import {
  getLatestBulletins,
} from '~/application/bulletin/getLatestBulletins'

import {
  filterBulletins,
} from '~/application/bulletin/filterBulletins'

import {
  staticBulletinRepository,
} from '~/infrastructure/bulletin/staticBulletinRepository'

import {
  presentBulletin,
} from '~/presenters/bulletin/presentBulletin'

export function useBulletins(
  limit?: number,
) {
  const selectedYear =
    ref<number | undefined>()

  const selectedMonth =
    ref<number | undefined>()

  const {
    data,
    status,
    error,
    refresh,
  } = useAsyncData(
    'bulletins',
    () =>
      getLatestBulletins(
        staticBulletinRepository,
        1000,
      ),
  )

  const rawBulletins =
    computed(
      () =>
        data.value ?? [],
    )

  const filteredBulletins =
    computed(
      () =>
        filterBulletins(
          rawBulletins.value,
          {
            year:
              selectedYear.value,

            month:
              selectedMonth.value,
          },
        ),
    )

  const presentedBulletins =
    computed(() => {
      const presented =
        filteredBulletins.value.map(
          presentBulletin,
        )

      if (!limit) {
        return presented
      }

      return presented.slice(
        0,
        limit,
      )
    })

  const latestBulletin =
    computed(
      () =>
        rawBulletins.value[0]
          ? presentBulletin(
              rawBulletins.value[0],
            )
          : null,
    )

  const availableYears =
    computed(() => {
      const years =
        rawBulletins.value.map(
          item =>
            new Date(
              item.publishedAt,
            ).getFullYear(),
        )

      return [
        ...new Set(years),
      ].sort(
        (a, b) => b - a,
      )
    })

  function setYear(
    year?: number,
  ) {
    selectedYear.value = year
  }

  function setMonth(
    month?: number,
  ) {
    selectedMonth.value = month
  }

  function resetFilters() {
    selectedYear.value =
      undefined

    selectedMonth.value =
      undefined
  }

  return {
    bulletins:
      presentedBulletins,

    latestBulletin,

    availableYears,

    selectedYear,

    selectedMonth,

    setYear,

    setMonth,

    resetFilters,

    status,

    error,

    refresh,
  }
}
