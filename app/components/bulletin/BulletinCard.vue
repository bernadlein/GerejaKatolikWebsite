<script setup lang="ts">
import type {
  PresentedBulletin,
} from '~/presenters/bulletin/presentBulletin'

defineProps<{
  bulletin: PresentedBulletin
}>()
</script>

<template>
  <article
    class="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-stone-900/5"
  >
    <!-- Decoration -->
    <div
      class="pointer-events-none absolute -right-20 -top-20 size-52 rounded-full bg-church-50 transition duration-500 group-hover:scale-125 group-hover:bg-gold-500/10"
    />

    <div class="relative flex h-full flex-col">
      <!-- Header -->
      <div
        class="flex items-start justify-between gap-5"
      >
        <div
          class="inline-flex items-center gap-2 rounded-full bg-church-50 px-3 py-1.5"
        >
          <span
            class="size-1.5 rounded-full bg-gold-500"
          />

          <span
            class="text-[10px] font-bold uppercase tracking-[0.16em] text-church-800"
          >
            Warta Paroki
          </span>
        </div>

        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-stone-200 text-church-800 transition duration-300 group-hover:border-church-900 group-hover:bg-church-900 group-hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            class="size-5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="M6 3h12a2 2 0 0 1 2 2v16l-4-3-4 3-4-3-4 3V5a2 2 0 0 1 2-2Z"
            />

            <path
              d="M8 8h8"
            />

            <path
              d="M8 12h6"
            />
          </svg>
        </div>
      </div>

      <!-- Content -->
      <div class="mt-8">
        <p
          v-if="bulletin.liturgicalLabel"
          class="text-xs font-semibold uppercase tracking-[0.14em] text-gold-500"
        >
          {{ bulletin.liturgicalLabel }}
        </p>

        <h3
          class="mt-3 font-display text-2xl font-bold leading-snug text-church-900"
        >
          {{ bulletin.title }}
        </h3>

        <p
          class="mt-3 text-sm font-medium text-stone-400"
        >
          {{ bulletin.dateLabel }}
        </p>

        <p
          v-if="bulletin.description"
          class="mt-4 line-clamp-3 text-sm leading-6 text-stone-500"
        >
          {{ bulletin.description }}
        </p>
      </div>

      <!-- CTA -->
      <div
        class="mt-auto border-t border-stone-100 pt-6"
      >
        <a
          v-if="bulletin.pdfUrl"
          :href="bulletin.pdfUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="group/link inline-flex items-center text-sm font-semibold text-church-800"
        >
          Baca Warta

          <span
            class="ml-2 transition-transform group-hover/link:translate-x-1"
          >
            →
          </span>
        </a>

        <span
          v-else
          class="inline-flex items-center text-sm font-medium text-stone-400"
        >
          Dokumen belum tersedia
        </span>
      </div>
    </div>
  </article>
</template>