<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-500/30 hover:shadow-xl hover:shadow-stone-900/5"
  >
    <div
      class="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-church-50 transition duration-500 group-hover:scale-125 group-hover:bg-gold-500/10"
    />

    <div class="relative">
      <div
        class="flex size-11 items-center justify-center rounded-2xl bg-church-50"
      >
        <span
          class="size-2 rounded-full bg-gold-500"
        />
      </div>

      <p
        class="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-500"
      >
        {{ eyebrow }}
      </p>

      <h3
        class="mt-2 font-display text-xl font-bold leading-snug text-church-900"
      >
        {{ title }}
      </h3>

      <p
        v-if="description"
        class="mt-3 text-sm leading-7 text-stone-500"
      >
        {{ description }}
      </p>
    </div>
  </article>
</template>