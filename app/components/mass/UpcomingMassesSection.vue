<script setup lang="ts">
const {
  nextMass,
  upcomingMasses,
  isLoading,
  error,
} = useMassSchedule(4)
</script>

<template>
  <section class="bg-church-50">
    <div
      class="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24"
    >
      <!-- Heading -->
      <div
        class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div class="max-w-2xl">
          <div class="flex items-center gap-3">
            <span
              class="h-px w-8 bg-gold-500"
            />

            <p
              class="text-xs font-bold uppercase tracking-[0.22em] text-gold-500"
            >
              Jadwal Perayaan
            </p>
          </div>

          <h2
            class="mt-4 font-display text-3xl font-bold tracking-tight text-church-900 sm:text-4xl"
          >
            Misa Berikutnya
          </h2>

          <p
            class="mt-4 max-w-xl leading-7 text-stone-600"
          >
            Temukan waktu perayaan Ekaristi
            berikutnya di Paroki St. Yosafat.
          </p>
        </div>

        <NuxtLink
          to="/jadwal"
          class="group inline-flex items-center text-sm font-semibold text-church-800"
        >
          Lihat jadwal lengkap

          <span
            aria-hidden="true"
            class="ml-2 transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </NuxtLink>
      </div>

      <!-- Loading -->
      <div
        v-if="isLoading && !nextMass"
        class="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div
          class="h-[320px] animate-pulse rounded-3xl bg-church-200"
        />

        <div class="space-y-3">
          <div
            v-for="item in 3"
            :key="item"
            class="h-24 animate-pulse rounded-2xl bg-white"
          />
        </div>
      </div>

      <!-- Error -->
      <div
        v-else-if="error"
        class="mt-10 rounded-3xl border border-red-200 bg-red-50 p-6"
      >
        <p class="font-semibold text-red-900">
          Jadwal misa belum dapat dimuat.
        </p>

        <p class="mt-2 text-sm text-red-700">
          Silakan coba kembali beberapa saat lagi.
        </p>
      </div>

      <!-- Content -->
      <div
        v-else-if="nextMass"
        class="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <!-- NEXT MASS -->
        <article
          class="relative min-h-[340px] overflow-hidden rounded-[2rem] bg-church-900 p-7 text-white sm:p-9 lg:p-10"
        >
          <!-- Decoration -->
          <div
            class="absolute -right-24 -top-24 size-72 rounded-full border border-white/10"
          />

          <div
            class="absolute -right-6 top-12 size-48 rounded-full border border-white/10"
          />

          <div
            class="absolute bottom-0 right-0 size-64 bg-[radial-gradient(circle,rgba(183,147,74,0.18),transparent_65%)]"
          />

          <div
            class="relative flex h-full flex-col justify-between"
          >
            <div>
              <div
                class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-500"
              >
                <span
                  class="size-1.5 rounded-full bg-gold-500"
                />

                Misa Berikutnya
              </div>

              <p
                class="mt-8 text-sm font-medium text-white/60"
              >
                {{ nextMass.dateLabel }}
              </p>

              <p
                class="mt-2 font-display text-5xl font-bold sm:text-6xl"
              >
                {{ nextMass.timeLabel }}
              </p>

              <h3
                class="mt-5 text-xl font-semibold"
              >
                {{ nextMass.label }}
              </h3>
            </div>

            <div
              class="mt-10 border-t border-white/15 pt-6"
            >
              <p
                class="text-xs font-bold uppercase tracking-[0.18em] text-white/40"
              >
                Lokasi
              </p>

              <p
                class="mt-2 text-sm font-medium text-white/80"
              >
                {{ nextMass.location }}
              </p>
            </div>
          </div>
        </article>

        <!-- UPCOMING LIST -->
        <div class="flex flex-col gap-3">
          <article
            v-for="(mass, index) in upcomingMasses.slice(1)"
            :key="mass.id"
            class="group flex flex-1 items-center justify-between rounded-3xl border border-stone-200 bg-white p-5 transition hover:border-gold-500/40 hover:shadow-lg hover:shadow-stone-900/5 sm:p-6"
          >
            <div class="min-w-0">
              <p
                class="text-xs font-bold uppercase tracking-[0.14em] text-gold-500"
              >
                Berikutnya {{ index + 2 }}
              </p>

              <p
                class="mt-2 font-display text-lg font-bold text-church-900"
              >
                {{ mass.label }}
              </p>

              <p
                class="mt-1 text-sm text-stone-500"
              >
                {{ mass.shortDateLabel }}
              </p>
            </div>

            <div
              class="ml-5 shrink-0 text-right"
            >
              <p
                class="font-display text-xl font-bold text-church-900"
              >
                {{ mass.timeLabel }}
              </p>

              <p
                class="mt-1 max-w-[150px] truncate text-xs text-stone-500"
              >
                {{ mass.location }}
              </p>
            </div>
          </article>

          <!-- Schedule CTA -->
          <NuxtLink
            to="/jadwal"
            class="group flex min-h-[76px] items-center justify-between rounded-3xl border border-dashed border-church-300 px-6 text-sm font-semibold text-church-800 transition hover:border-church-700 hover:bg-white"
          >
            <span>
              Jadwal Misa Mingguan
            </span>

            <span
              aria-hidden="true"
              class="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </NuxtLink>
        </div>
      </div>

      <!-- Empty -->
      <div
        v-else
        class="mt-10 rounded-3xl border border-stone-200 bg-white p-8 text-center"
      >
        <p class="font-semibold text-church-900">
          Belum ada jadwal misa.
        </p>

        <p class="mt-2 text-sm text-stone-500">
          Jadwal akan ditampilkan ketika tersedia.
        </p>
      </div>
    </div>
  </section>
</template>
