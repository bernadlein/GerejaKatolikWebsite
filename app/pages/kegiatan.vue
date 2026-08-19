<script setup lang="ts">
import {
  parishConfig,
} from '~/config/parish'

const {
  upcomingEvents,
  ongoingEvents,
  pastEvents,
  status,
  error,
} = useParishEvents()

useSeoMeta({
  title:
    `Kegiatan & Agenda | ${parishConfig.name}`,

  description:
    `Agenda, kegiatan, dan kehidupan umat ${parishConfig.churchName}.`,
})
</script>

<template>
  <main class="bg-[#faf9f7]">
    <!-- HERO -->
    <section
      class="relative overflow-hidden bg-church-900"
    >
      <div
        class="absolute -right-40 -top-40 size-[520px] rounded-full border border-white/10"
      />

      <div
        class="absolute right-12 top-16 size-[280px] rounded-full border border-white/10"
      />

      <div
        class="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
      >
        <div class="flex items-center gap-3">
          <span
            class="h-px w-9 bg-gold-500"
          />

          <p
            class="text-xs font-bold uppercase tracking-[0.24em] text-gold-500"
          >
            Kehidupan Paroki
          </p>
        </div>

        <h1
          class="mt-5 font-display text-5xl font-bold text-white sm:text-6xl"
        >
          Kegiatan & Agenda
        </h1>

        <p
          class="mt-5 max-w-2xl text-base leading-8 text-white/60"
        >
          Temukan agenda, pertemuan,
          kegiatan pastoral, dan berbagai
          aktivitas umat
          {{ parishConfig.name }}.
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section
      class="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"
    >
      <!-- Loading -->
      <div
        v-if="status === 'pending'"
        class="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        <div
          v-for="item in 3"
          :key="item"
          class="h-[390px] animate-pulse rounded-[2rem] bg-stone-200"
        />
      </div>

      <!-- Error -->
      <div
        v-else-if="error"
        class="rounded-[2rem] border border-red-200 bg-red-50 p-8"
      >
        <p class="font-semibold text-red-900">
          Agenda paroki belum dapat dimuat.
        </p>
      </div>

      <template v-else>
        <!-- ONGOING -->
        <section
          v-if="ongoingEvents.length"
        >
          <p
            class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
          >
            Sedang Berlangsung
          </p>

          <h2
            class="mt-3 font-display text-3xl font-bold text-church-900"
          >
            Kegiatan Saat Ini
          </h2>

          <div
            class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            <EventCard
              v-for="event in ongoingEvents"
              :key="event.id"
              :event="event"
            />
          </div>
        </section>

        <!-- UPCOMING -->
        <section
          :class="{
            'mt-16':
              ongoingEvents.length,
          }"
        >
          <div
            class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p
                class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
              >
                Agenda
              </p>

              <h2
                class="mt-3 font-display text-3xl font-bold text-church-900"
              >
                Kegiatan Mendatang
              </h2>
            </div>

            <p
              class="max-w-lg text-sm leading-7 text-stone-500"
            >
              Informasi kegiatan dapat
              berubah sesuai pengumuman
              resmi dari paroki.
            </p>
          </div>

          <div
            v-if="upcomingEvents.length"
            class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            <EventCard
              v-for="event in upcomingEvents"
              :key="event.id"
              :event="event"
            />
          </div>

          <EventEmptyState
            v-else
            class="mt-8"
          />
        </section>

        <!-- PAST -->
        <section
          v-if="pastEvents.length"
          class="mt-20 border-t border-stone-200 pt-16"
        >
          <p
            class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
          >
            Arsip
          </p>

          <h2
            class="mt-3 font-display text-3xl font-bold text-church-900"
          >
            Kegiatan Sebelumnya
          </h2>

          <div
            class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            <EventCard
              v-for="event in pastEvents"
              :key="event.id"
              :event="event"
            />
          </div>
        </section>
      </template>
    </section>
  </main>
</template>
