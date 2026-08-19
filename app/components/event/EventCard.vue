<script setup lang="ts">
import type {
  PresentedEvent,
} from '~/presenters/event/presentEvent'

defineProps<{
  event: PresentedEvent
}>()
</script>

<template>
  <NuxtLink
    :to="`/kegiatan/${event.slug}`"
    class="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-stone-900/5"
  >
    <!-- IMAGE -->
    <div
      class="relative h-[190px] overflow-hidden bg-church-900"
    >
      <img
        v-if="event.coverImage"
        :src="event.coverImage"
        :alt="event.title"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      >

      <div
        v-else
        class="relative flex h-full items-center justify-center overflow-hidden"
      >
        <div
          class="absolute -right-14 -top-14 size-44 rounded-full border border-white/10"
        />

        <div
          class="absolute right-10 top-12 size-28 rounded-full border border-white/10"
        />

        <svg
          viewBox="0 0 24 24"
          class="relative size-10 text-gold-500"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            rx="2"
          />

          <path d="M16 3v4" />
          <path d="M8 3v4" />
          <path d="M3 10h18" />
        </svg>
      </div>

      <!-- Status -->
      <div
        class="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-church-900 backdrop-blur"
      >
        {{ event.statusLabel }}
      </div>
    </div>

    <!-- CONTENT -->
    <div
      class="flex flex-1 flex-col p-6"
    >
      <p
        class="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-500"
      >
        {{ event.categoryLabel }}
      </p>

      <h3
        class="mt-3 font-display text-2xl font-bold leading-snug text-church-900"
      >
        {{ event.title }}
      </h3>

      <p
        class="mt-3 line-clamp-2 text-sm leading-6 text-stone-500"
      >
        {{ event.summary }}
      </p>

      <div
        class="mt-6 space-y-3"
      >
        <div
          class="flex items-center gap-3"
        >
          <span
            class="size-2 rounded-full bg-gold-500"
          />

          <p
            class="text-sm font-medium text-stone-700"
          >
            {{ event.shortDateLabel }}
          </p>
        </div>

        <div
          class="flex items-center gap-3"
        >
          <span
            class="size-2 rounded-full bg-stone-300"
          />

          <p
            class="text-sm text-stone-500"
          >
            {{ event.timeLabel }}
          </p>
        </div>
      </div>

      <div
        class="mt-auto flex items-center justify-between border-t border-stone-100 pt-5"
      >
        <p
          class="max-w-[75%] truncate text-xs font-medium text-stone-500"
        >
          {{ event.location }}
        </p>

        <span
          class="flex size-9 items-center justify-center rounded-full border border-stone-200 text-church-900 transition group-hover:border-church-900 group-hover:bg-church-900 group-hover:text-white"
        >
          →
        </span>
      </div>
    </div>
  </NuxtLink>
</template>