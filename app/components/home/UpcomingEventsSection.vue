<script setup lang="ts">
const {
  events,
  status,
} = useUpcomingEvents(3)
</script>

<template>
  <section
    class="bg-[#faf9f7]"
  >
    <div
      class="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
    >
      <div
        class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
      >
        <div>
          <div
            class="flex items-center gap-3"
          >
            <span
              class="h-px w-8 bg-gold-500"
            />

            <p
              class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
            >
              Agenda Paroki
            </p>
          </div>

          <h2
            class="mt-4 font-display text-3xl font-bold text-church-900 sm:text-4xl"
          >
            Kegiatan Mendatang
          </h2>

          <p
            class="mt-4 max-w-xl text-sm leading-7 text-stone-500"
          >
            Ikuti berbagai kegiatan
            dan kehidupan bersama
            umat Paroki St. Yosafat.
          </p>
        </div>

        <NuxtLink
          to="/kegiatan"
          class="group text-sm font-semibold text-church-800"
        >
          Lihat semua kegiatan

          <span
            class="ml-2 inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </NuxtLink>
      </div>

      <div
        v-if="status === 'pending'"
        class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        <div
          v-for="item in 3"
          :key="item"
          class="h-[390px] animate-pulse rounded-[2rem] bg-stone-200"
        />
      </div>

      <div
        v-else-if="events.length"
        class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        <EventCard
          v-for="event in events"
          :key="event.id"
          :event="event"
        />
      </div>

      <div
        v-else
        class="mt-10 rounded-[2rem] border border-dashed border-stone-300 bg-white px-7 py-12"
      >
        <div
          class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h3
              class="font-display text-xl font-bold text-church-900"
            >
              Agenda akan segera diperbarui
            </h3>

            <p
              class="mt-2 text-sm leading-7 text-stone-500"
            >
              Kegiatan resmi Paroki
              akan ditampilkan setelah
              informasinya tersedia.
            </p>
          </div>

          <NuxtLink
            to="/kegiatan"
            class="inline-flex shrink-0 items-center text-sm font-semibold text-church-800"
          >
            Halaman Kegiatan →
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
