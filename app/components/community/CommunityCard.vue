<script setup lang="ts">
import type {
  PresentedCommunity,
} from '~/presenters/community/presentCommunity'

defineProps<{
  community: PresentedCommunity
}>()
</script>

<template>
  <NuxtLink
    :to="`/komunitas/${community.slug}`"
    class="group relative flex min-h-[380px] flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-stone-900/5"
  >
    <!-- IMAGE -->
    <div
      class="relative h-[190px] overflow-hidden bg-church-900"
    >
      <img
        v-if="community.coverImage"
        :src="community.coverImage"
        :alt="community.name"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      >

      <!-- Empty visual -->
      <div
        v-else
        class="relative flex h-full items-center justify-center"
      >
        <div
          class="absolute -right-16 -top-16 size-48 rounded-full border border-white/10"
        />

        <div
          class="absolute right-10 top-12 size-28 rounded-full border border-white/10"
        />

        <svg
          viewBox="0 0 24 24"
          class="relative size-11 text-gold-500"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle
            cx="9"
            cy="8"
            r="3"
          />

          <circle
            cx="17"
            cy="9"
            r="2"
          />

          <path
            d="M3 20c0-4 2.5-6 6-6s6 2 6 6"
          />

          <path
            d="M15 15c3 0 5 1.5 5 4"
          />
        </svg>
      </div>

      <!-- Category -->
      <div
        class="absolute left-4 top-4 rounded-full border border-white/10 bg-church-900/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur"
      >
        {{ community.categoryLabel }}
      </div>
    </div>

    <!-- CONTENT -->
    <div
      class="flex flex-1 flex-col p-6"
    >
      <p
        v-if="community.shortName"
        class="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-500"
      >
        {{ community.shortName }}
      </p>

      <h3
        class="mt-2 font-display text-2xl font-bold leading-snug text-church-900"
      >
        {{ community.name }}
      </h3>

      <p
        class="mt-4 line-clamp-3 text-sm leading-7 text-stone-500"
      >
        {{ community.summary }}
      </p>

      <!-- Schedule -->
      <div
        v-if="community.meeting?.schedule"
        class="mt-6 rounded-2xl bg-church-50 px-4 py-3"
      >
        <p
          class="text-[10px] font-bold uppercase tracking-[0.14em] text-gold-500"
        >
          Pertemuan
        </p>

        <p
          class="mt-1 text-sm font-semibold text-church-900"
        >
          {{ community.meeting.schedule }}
        </p>
      </div>

      <!-- CTA -->
      <div
        class="mt-auto flex items-center justify-between border-t border-stone-100 pt-5"
      >
        <span
          class="text-sm font-semibold text-church-800"
        >
          Lihat Komunitas
        </span>

        <span
          class="flex size-9 items-center justify-center rounded-full border border-stone-200 text-church-900 transition group-hover:border-church-900 group-hover:bg-church-900 group-hover:text-white"
        >
          →
        </span>
      </div>
    </div>
  </NuxtLink>
</template>