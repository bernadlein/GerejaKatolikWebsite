<script setup lang="ts">
import { parishConfig } from '~/config/parish'

useSeoMeta({
  title: 'Jadwal Misa',

  description:
    `Jadwal perayaan Ekaristi di ${parishConfig.churchName}.`,
})

const {
  schedules,
  status,
  error,
} = useWeeklyMassSchedule()

const weekdaySchedule = computed(
  () =>
    schedules.value.find(
      item =>
        item.variant === 'weekday',
    ),
)

const saturdaySchedules = computed(
  () =>
    schedules.value.filter(
      item =>
        item.variant === 'saturday',
    ),
)

const sundaySchedule = computed(
  () =>
    schedules.value.find(
      item =>
        item.variant === 'sunday',
    ),
)
</script>

<template>
  <main class="bg-[#faf9f7]">
    <!-- HERO -->
    <section
      class="relative overflow-hidden bg-church-900"
    >
      <div
        class="absolute -right-32 -top-32 size-[420px] rounded-full border border-white/10"
      />

      <div
        class="absolute right-8 top-8 size-[250px] rounded-full border border-white/10"
      />

      <div
        class="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
      >
        <div
          class="flex items-center gap-3"
        >
          <span
            class="h-px w-9 bg-gold-500"
          />

          <p
            class="text-xs font-bold uppercase tracking-[0.25em] text-gold-500"
          >
            Perayaan Ekaristi
          </p>
        </div>

        <h1
          class="mt-5 max-w-3xl font-display text-5xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Jadwal Misa
        </h1>

        <p
          class="mt-5 max-w-2xl text-base leading-8 text-white/60"
        >
          Mari bersama merayakan Ekaristi
          dan bertumbuh dalam persekutuan iman
          di {{ parishConfig.name }}.
        </p>
      </div>
    </section>

    <!-- SCHEDULE -->
    <section
      class="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20"
    >
      <!-- Loading -->
      <div
        v-if="status === 'pending'"
        class="grid gap-5 md:grid-cols-2"
      >
        <div
          v-for="item in 4"
          :key="item"
          class="h-[280px] animate-pulse rounded-[2rem] bg-stone-200/60"
        />
      </div>

      <!-- Error -->
      <div
        v-else-if="error"
        class="rounded-[2rem] border border-red-200 bg-red-50 p-8"
      >
        <p class="font-semibold text-red-900">
          Jadwal misa belum dapat dimuat.
        </p>

        <p class="mt-2 text-sm text-red-700">
          Silakan coba beberapa saat lagi.
        </p>
      </div>

      <template v-else>
        <!-- Intro -->
        <div
          class="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
            >
              Jadwal Mingguan
            </p>

            <h2
              class="mt-3 font-display text-3xl font-bold text-church-900"
            >
              Perayaan Misa
            </h2>
          </div>

          <p
            class="max-w-lg text-sm leading-6 text-stone-500"
          >
            Jadwal dapat mengalami perubahan
            pada hari raya atau perayaan liturgi khusus.
          </p>
        </div>

        <!-- Weekday -->
        <div
          v-if="weekdaySchedule"
          class="mb-5"
        >
          <MassScheduleCard
            :schedule="weekdaySchedule"
          />
        </div>

        <!-- Saturday -->
        <div
          class="grid gap-5 md:grid-cols-2"
        >
          <MassScheduleCard
            v-for="schedule in saturdaySchedules"
            :key="schedule.id"
            :schedule="schedule"
          />
        </div>

        <!-- Sunday Featured -->
        <div
          v-if="sundaySchedule"
          class="mt-5"
        >
          <article
            class="relative overflow-hidden rounded-[2rem] bg-church-900 p-7 text-white sm:p-9 lg:p-10"
          >
            <div
              class="absolute -right-24 -top-24 size-64 rounded-full border border-white/10"
            />

            <div
              class="absolute right-16 top-10 size-40 rounded-full border border-white/10"
            />

            <div
              class="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
            >
              <div>
                <div
                  class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
                >
                  <span
                    class="size-1.5 rounded-full bg-gold-500"
                  />

                  <p
                    class="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-500"
                  >
                    {{ sundaySchedule.dayLabel }}
                  </p>
                </div>

                <h3
                  class="mt-5 font-display text-3xl font-bold sm:text-4xl"
                >
                  {{ sundaySchedule.label }}
                </h3>

                <p
                  class="mt-3 text-sm text-white/50"
                >
                  {{ sundaySchedule.location }}
                </p>
              </div>

              <div
                class="flex flex-wrap gap-3"
              >
                <div
                  v-for="time in sundaySchedule.times"
                  :key="time"
                  class="min-w-[135px] rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur"
                >
                  <p
                    class="font-display text-4xl font-bold"
                  >
                    {{ time }}
                  </p>

                  <p
                    class="mt-1 text-xs font-bold tracking-[0.15em] text-gold-500"
                  >
                    WIB
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Address -->
        <div
          class="mt-10 flex flex-col gap-5 rounded-[2rem] border border-stone-200 bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
            >
              Lokasi
            </p>

            <h3
              class="mt-2 font-display text-xl font-bold text-church-900"
            >
              {{ parishConfig.churchName }}
            </h3>

            <p
              class="mt-2 max-w-2xl text-sm leading-6 text-stone-500"
            >
              {{ parishConfig.address }}
            </p>
          </div>

          <NuxtLink
            to="/kontak"
            class="inline-flex shrink-0 items-center justify-center rounded-full bg-church-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Lihat Lokasi
          </NuxtLink>
        </div>
      </template>
    </section>
  </main>
</template>
