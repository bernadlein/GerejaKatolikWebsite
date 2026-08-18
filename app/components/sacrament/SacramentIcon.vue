<script setup lang="ts">
import type {
  SacramentIcon,
} from '#shared/domain/sacrament/types'

defineProps<{
  name: SacramentIcon
}>()
</script>

<template>
  <!-- Baptis -->
  <svg
    v-if="name === 'baptism'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path
      d="M12 3c3 4 5 6.5 5 10a5 5 0 0 1-10 0c0-3.5 2-6 5-10Z"
    />
  </svg>

  <!-- Komuni -->
  <svg
    v-else-if="name === 'communion'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="8"
      r="4"
    />

    <path
      d="M12 12v9"
    />

    <path
      d="M8 21h8"
    />
  </svg>

  <!-- Krisma -->
  <svg
    v-else-if="name === 'confirmation'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path
      d="M12 3v18"
    />

    <path
      d="M8 7h8"
    />

    <path
      d="M6 15c2-2 4-2 6 0 2-2 4-2 6 0"
    />
  </svg>

  <!-- Perkawinan -->
  <svg
    v-else-if="name === 'marriage'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle
      cx="9"
      cy="12"
      r="5"
    />

    <circle
      cx="15"
      cy="12"
      r="5"
    />
  </svg>

  <!-- Pengurapan -->
  <svg
    v-else
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path
      d="M12 3v18"
    />

    <path
      d="M8 7h8"
    />

    <path
      d="M6 19h12"
    />
  </svg>
</template>