<script setup lang="ts">
import type {
  PresentedWeeklyMass,
} from '~/presenters/mass/presentWeeklyMassSchedule'

defineProps<{
  schedule: PresentedWeeklyMass
}>()
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-stone-900/5 sm:p-7"
  >
    <!-- Decorative glow -->
    <div
      class="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-church-50 transition duration-500 group-hover:scale-125 group-hover:bg-gold-500/10"
    />

    <!-- Top -->
    <div
      class="relative flex items-start justify-between gap-5"
    >
      <div>
        <div
          class="inline-flex items-center gap-2 rounded-full bg-church-50 px-3 py-1.5"
        >
          <span
            class="size-1.5 rounded-full bg-gold-500"
          />

          <p
            class="text-[11px] font-bold uppercase tracking-[0.15em] text-church-800"
          >
            {{ schedule.dayLabel }}
          </p>
        </div>

        <h3
          class="mt-5 font-display text-2xl font-bold text-church-900"
        >
          {{ schedule.label }}
        </h3>
      </div>

      <!-- Cross icon -->
      <div
        class="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-stone-200 text-church-800 transition group-hover:border-church-900 group-hover:bg-church-900 group-hover:text-white"
      >
        <svg
          viewBox="0 0 24 24"
          class="size-5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
        >
          <path d="M12 3v18" />
          <path d="M8 7h8" />
        </svg>
      </div>
    </div>

    <!-- Time -->
    <div
      class="relative mt-9 flex flex-wrap gap-3"
    >
      <div
        v-for="time in schedule.times"
        :key="time"
        class="rounded-2xl bg-church-900 px-5 py-4 text-white"
      >
        <p
          class="font-display text-3xl font-bold leading-none"
        >
          {{ time }}
        </p>

        <p
          class="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50"
        >
          WIB
        </p>
      </div>
    </div>

    <!-- Location -->
    <div
      class="relative mt-7 flex items-center gap-3 border-t border-stone-100 pt-5"
    >
      <div
        class="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-500"
      >
        <svg
          viewBox="0 0 24 24"
          class="size-4"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
        >
          <path
            d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
          />

          <circle
            cx="12"
            cy="10"
            r="2.5"
          />
        </svg>
      </div>

      <p
        class="truncate text-sm font-medium text-stone-500"
      >
        {{ schedule.location }}
      </p>
    </div>
  </article>
</template>
