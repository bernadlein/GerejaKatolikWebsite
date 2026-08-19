<script setup lang="ts">
import type {
  ParishHistoryItem,
} from '#shared/domain/parish/types'

defineProps<{
  items: ParishHistoryItem[]
}>()
</script>

<template>
  <div class="relative">
    <div
      class="absolute bottom-3 left-[19px] top-3 w-px bg-stone-200"
    />

    <div
      class="space-y-9"
    >
      <article
        v-for="item in items"
        :key="item.id"
        class="relative grid grid-cols-[40px_1fr] gap-5"
      >
        <div
          class="relative z-10 mt-1 flex size-10 items-center justify-center rounded-full border border-gold-500/30 bg-white"
        >
          <span
            class="size-2 rounded-full bg-gold-500"
          />
        </div>

        <div
          class="rounded-[1.75rem] border border-stone-200 bg-white p-6"
        >
          <p
            v-if="item.date || item.year"
            class="text-xs font-bold uppercase tracking-[0.16em] text-gold-500"
          >
            {{ item.date || item.year }}
          </p>

          <h3
            class="mt-2 font-display text-xl font-bold text-church-900"
          >
            {{ item.title }}
          </h3>

          <p
            class="mt-3 text-sm leading-7 text-stone-600"
          >
            {{ item.description }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>
