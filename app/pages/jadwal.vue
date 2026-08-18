<script setup lang="ts">
import { parishConfig } from '~/config/parish'

useSeoMeta({
  title: 'Jadwal Misa',
  description:
    `Jadwal Misa ${parishConfig.churchName}.`,
})

const {
  data: schedules,
  status,
  error,
} = await useWeeklyMassSchedule()

const weekdaySchedule = computed(() =>
  schedules.value?.find(
    item => item.id === 'weekday-evening',
  ),
)

const saturdayDaily = computed(() =>
  schedules.value?.find(
    item => item.id === 'saturday-daily',
  ),
)

const saturdaySundayMass = computed(() =>
  schedules.value?.find(
    item => item.id === 'saturday-sunday-mass',
  ),
)

const sundayMasses = computed(() =>
  schedules.value
    ?.filter(
      item =>
        item.days.includes('sunday'),
    )
    .sort(
      (a, b) =>
        a.time.localeCompare(b.time),
    )
    ?? [],
)
</script>

<template>
  <main>
    <!-- HERO -->
    <section
      class="border-b border-church-200 bg-church-50"
    >
      <div
        class="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20"
      >
        <div class="flex items-center gap-3">
          <span
            class="h-px w-8 bg-gold-500"
          />

          <p
            class="text-xs font-bold uppercase tracking-[0.22em] text-gold-500"
          >
            Liturgi
          </p>
        </div>

        <h1
          class="mt-4 font-display text-4xl font-bold text-church-900 sm:text-5xl"
        >
          Jadwal Misa
        </h1>

        <p
          class="mt-5 max-w-2xl text-base leading-7 text-stone-600"
        >
          Jadwal perayaan Ekaristi mingguan
          di {{ parishConfig.churchName }}.
        </p>
      </div>
    </section>

    <!-- SCHEDULE -->
    <section
      class="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20"
    >
      <!-- Loading -->
      <div
        v-if="status === 'pending'"
        class="space-y-3"
      >
        <div
          v-for="item in 4"
          :key="item"
          class="h-24 animate-pulse rounded-3xl bg-stone-100"
        />
      </div>

      <!-- Error -->
      <div
        v-else-if="error"
        class="rounded-3xl border border-red-200 bg-red-50 p-6"
      >
        <p class="font-semibold text-red-900">
          Jadwal misa belum dapat dimuat.
        </p>
      </div>

      <template v-else>
        <div
          class="overflow-hidden rounded-[2rem] border border-stone-200 bg-white"
        >
          <!-- Header -->
          <div
            class="hidden grid-cols-[1fr_220px] bg-church-900 px-7 py-5 text-white sm:grid"
          >
            <p
              class="text-xs font-bold uppercase tracking-[0.18em]"
            >
              Misa
            </p>

            <p
              class="text-xs font-bold uppercase tracking-[0.18em]"
            >
              Waktu
            </p>
          </div>

          <!-- Senin - Jumat -->
          <div
            v-if="weekdaySchedule"
            class="grid gap-3 border-b border-stone-200 px-6 py-6 sm:grid-cols-[1fr_220px] sm:items-center sm:px-7"
          >
            <div>
              <p
                class="font-display text-xl font-bold text-church-900"
              >
                Senin – Jumat
              </p>

              <p
                class="mt-1 text-sm text-stone-500"
              >
                Misa Harian
              </p>
            </div>

            <p
              class="font-display text-2xl font-bold text-church-900"
            >
              {{ weekdaySchedule.time }} WIB
            </p>
          </div>

          <!-- Sabtu Harian -->
          <div
            v-if="saturdayDaily"
            class="grid gap-3 border-b border-stone-200 bg-stone-50/70 px-6 py-6 sm:grid-cols-[1fr_220px] sm:items-center sm:px-7"
          >
            <div>
              <p
                class="font-display text-xl font-bold text-church-900"
              >
                Sabtu
              </p>

              <p
                class="mt-1 text-sm text-stone-500"
              >
                Misa Harian
              </p>
            </div>

            <p
              class="font-display text-2xl font-bold text-church-900"
            >
              {{ saturdayDaily.time }} WIB
            </p>
          </div>

          <!-- Sabtu Minggu -->
          <div
            v-if="saturdaySundayMass"
            class="grid gap-3 border-b border-stone-200 px-6 py-6 sm:grid-cols-[1fr_220px] sm:items-center sm:px-7"
          >
            <div>
              <p
                class="font-display text-xl font-bold text-church-900"
              >
                Sabtu
              </p>

              <p
                class="mt-1 text-sm text-stone-500"
              >
                Misa Minggu
              </p>
            </div>

            <p
              class="font-display text-2xl font-bold text-church-900"
            >
              {{ saturdaySundayMass.time }} WIB
            </p>
          </div>

          <!-- Minggu -->
          <div
            class="grid gap-3 bg-stone-50/70 px-6 py-6 sm:grid-cols-[1fr_220px] sm:items-center sm:px-7"
          >
            <div>
              <p
                class="font-display text-xl font-bold text-church-900"
              >
                Minggu
              </p>

              <p
                class="mt-1 text-sm text-stone-500"
              >
                Misa Minggu
              </p>
            </div>

            <div
              class="flex flex-wrap items-center gap-2"
            >
              <template
                v-for="(mass, index) in sundayMasses"
                :key="mass.id"
              >
                <span
                  class="font-display text-2xl font-bold text-church-900"
                >
                  {{ mass.time }}
                </span>

                <span
                  v-if="index < sundayMasses.length - 1"
                  class="text-stone-300"
                >
                  |
                </span>
              </template>

              <span
                class="ml-1 text-sm text-stone-500"
              >
                WIB
              </span>
            </div>
          </div>
        </div>

        <!-- Location -->
        <div
          class="mt-8 rounded-3xl bg-church-50 p-6 sm:p-8"
        >
          <p
            class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
          >
            Lokasi Perayaan
          </p>

          <h2
            class="mt-3 font-display text-xl font-bold text-church-900"
          >
            {{ parishConfig.churchName }}
          </h2>

          <p
            class="mt-2 max-w-2xl text-sm leading-6 text-stone-600"
          >
            {{ parishConfig.address }}
          </p>
        </div>
      </template>
    </section>
  </main>
</template>
