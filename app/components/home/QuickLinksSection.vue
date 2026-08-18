<script setup lang="ts">
import type { QuickLinkIcon } from '~/config/home'

defineProps<{
  name: QuickLinkIcon
}>()
</script>

<template>
  <svg
    v-if="name === 'mass'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3v18" />
    <path d="M8 7h8" />
    <path d="M6 21h12" />
  </svg>

  <svg
    v-else-if="name === 'bulletin'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M6 3h12a2 2 0 0 1 2 2v16l-4-3-4 3-4-3-4 3V5a2 2 0 0 1 2-2Z" />
    <path d="M8 8h8" />
    <path d="M8 12h6" />
  </svg>

  <svg
    v-else-if="name === 'sacrament'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2v7" />
    <path d="M9 5h6" />
    <path d="M7 13a5 5 0 0 1 10 0c0 4-5 9-5 9s-5-5-5-9Z" />
  </svg>

  <svg
    v-else
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2
      19.79 19.79 0 0 1-8.63-3.07
      19.5 19.5 0 0 1-6-6
      19.79 19.79 0 0 1-3.07-8.67
      A2 2 0 0 1 4.11 2h3
      a2 2 0 0 1 2 1.72
      c.13.96.36 1.9.68 2.8
      a2 2 0 0 1-.45 2.11L8.07 9.9
      a16 16 0 0 0 6 6
      l1.27-1.27
      a2 2 0 0 1 2.11-.45
      c.9.32 1.84.55 2.8.68
      A2 2 0 0 1 22 16.92Z"
    />
  </svg>
</template>
