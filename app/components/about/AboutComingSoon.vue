<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div
    class="rounded-[2rem] border border-dashed border-stone-300 bg-white px-7 py-12 text-center"
  >
    <div
      class="mx-auto flex size-12 items-center justify-center rounded-2xl bg-church-50 text-gold-500"
    >
      <span class="text-lg">
        +
      </span>
    </div>

    <h3
      class="mt-5 font-display text-xl font-bold text-church-900"
    >
      {{ title }}
    </h3>

    <p
      class="mx-auto mt-3 max-w-md text-sm leading-7 text-stone-500"
    >
      {{ description }}
    </p>
  </div>
</template>
