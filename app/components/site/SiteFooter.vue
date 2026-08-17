<script setup lang="ts">
import { parishConfig } from '~/config/parish'
</script>

<template>
  <footer class="border-t border-church-200 bg-white">
    <div class="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-3 lg:px-8">
      <div>
        <p class="font-display text-xl font-bold text-church-900">{{ parishConfig.name }}</p>
        <p class="mt-3 max-w-sm text-sm leading-6 text-stone-600">{{ parishConfig.tagline }}</p>
      </div>
      <div>
        <p class="text-sm font-semibold text-stone-900">Sekretariat</p>
        <p class="mt-3 text-sm leading-6 text-stone-600">{{ parishConfig.address }}</p>
      </div>
      <div>
        <p class="text-sm font-semibold text-stone-900">Kontak</p>
        <p class="mt-3 text-sm text-stone-600">{{ parishConfig.phone }}</p>
        <p class="mt-1 text-sm text-stone-600">{{ parishConfig.email }}</p>
      </div>
    </div>
  </footer>
</template>
