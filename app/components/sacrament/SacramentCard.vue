<script setup lang="ts">
import type {
  PresentedSacrament,
} from '~/presenters/sacrament/presentSacrament'

defineProps<{
  sacrament: PresentedSacrament
}>()
</script>

<template>
  <NuxtLink
    :to="`/sakramen/${sacrament.slug}`"
    class="group relative flex min-h-[350px] flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-stone-900/5"
  >
    <!-- Background decoration -->
    <div
      class="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-church-50 transition duration-500 group-hover:scale-125 group-hover:bg-gold-500/10"
    />

    <div class="relative flex h-full flex-col">
      <!-- Icon -->
      <div
        class="flex size-14 items-center justify-center rounded-2xl bg-church-50 text-church-800 transition duration-300 group-hover:bg-church-900 group-hover:text-white"
      >
        <SacramentIcon
          :name="sacrament.icon"
          class="size-7"
        />
      </div>

      <div class="mt-8">
        <p
          class="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-500"
        >
          {{ sacrament.subtitle }}
        </p>

        <h3
          class="mt-3 font-display text-2xl font-bold text-church-900"
        >
          {{ sacrament.title }}
        </h3>

        <p
          class="mt-4 text-sm leading-7 text-stone-500"
        >
          {{ sacrament.summary }}
        </p>
      </div>

      <div
        class="mt-auto flex items-center justify-between border-t border-stone-100 pt-6"
      >
        <span
          class="text-sm font-semibold text-church-800"
        >
          Informasi Pelayanan
        </span>

        <span
          class="flex size-9 items-center justify-center rounded-full border border-stone-200 transition duration-300 group-hover:border-church-900 group-hover:bg-church-900 group-hover:text-white"
        >
          →
        </span>
      </div>
    </div>
  </NuxtLink>
</template>