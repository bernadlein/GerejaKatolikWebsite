<script setup lang="ts">
withDefaults(defineProps<{
  to?: string
  variant?: 'primary' | 'secondary'
}>(), {
  variant: 'primary',
})
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
    :class="variant === 'primary'
      ? 'bg-church-700 text-white hover:bg-church-800'
      : 'border border-church-200 bg-white/80 text-church-800 hover:bg-white'"
  >
    <slot />
  </NuxtLink>

  <button
    v-else
    type="button"
    class="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
    :class="variant === 'primary'
      ? 'bg-church-700 text-white hover:bg-church-800'
      : 'border border-church-200 bg-white/80 text-church-800 hover:bg-white'"
  >
    <slot />
  </button>
</template>
