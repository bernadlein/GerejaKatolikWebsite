<script setup lang="ts">
useSeoMeta({ title: 'Jadwal Misa' })
const { data: masses } = await useMassSchedule()
</script>

<template>
  <section class="mx-auto max-w-5xl px-5 py-16 lg:px-8">
    <p class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">Jadwal</p>
    <h1 class="mt-3 font-display text-4xl font-bold text-church-900">Jadwal Misa</h1>
    <p class="mt-4 max-w-2xl text-stone-600">Halaman ini menjadi pintu utama untuk seluruh jadwal liturgi paroki.</p>

    <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="mass in masses" :key="`${mass.id}-${mass.startsAt}`" class="rounded-3xl border border-church-200 bg-white p-6">
        <p class="font-display text-2xl font-bold text-church-900">{{ mass.label }}</p>
        <p class="mt-2 text-sm text-stone-500">{{ mass.location }}</p>
      </article>
    </div>
  </section>
</template>
