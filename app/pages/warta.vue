<script setup lang="ts">
import {
  parishConfig,
} from '~/config/parish'

useSeoMeta({
  title:
    `Warta Paroki | ${parishConfig.name}`,

  description:
    `Warta, pengumuman, dan informasi mingguan ${parishConfig.churchName}.`,
})

const months = [
  {
    value: 1,
    label: 'Januari',
  },
  {
    value: 2,
    label: 'Februari',
  },
  {
    value: 3,
    label: 'Maret',
  },
  {
    value: 4,
    label: 'April',
  },
  {
    value: 5,
    label: 'Mei',
  },
  {
    value: 6,
    label: 'Juni',
  },
  {
    value: 7,
    label: 'Juli',
  },
  {
    value: 8,
    label: 'Agustus',
  },
  {
    value: 9,
    label: 'September',
  },
  {
    value: 10,
    label: 'Oktober',
  },
  {
    value: 11,
    label: 'November',
  },
  {
    value: 12,
    label: 'Desember',
  },
]

const {
  bulletins,
  latestBulletin,
  availableYears,

  selectedYear,
  selectedMonth,

  setYear,
  setMonth,
  resetFilters,

  status,
  error,
} = useBulletins()
</script>

<template>
  <main class="bg-[#faf9f7]">
    <!-- HERO -->
    <section
      class="relative overflow-hidden bg-church-900"
    >
      <div
        class="absolute -right-32 -top-32 size-[450px] rounded-full border border-white/10"
      />

      <div
        class="absolute right-10 top-12 size-[260px] rounded-full border border-white/10"
      />

      <div
        class="absolute bottom-0 left-1/2 size-72 -translate-x-1/2 bg-[radial-gradient(circle,rgba(183,147,74,0.14),transparent_65%)]"
      />

      <div
        class="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
      >
        <div
          class="flex items-center gap-3"
        >
          <span
            class="h-px w-9 bg-gold-500"
          />

          <p
            class="text-xs font-bold uppercase tracking-[0.25em] text-gold-500"
          >
            Informasi Paroki
          </p>
        </div>

        <h1
          class="mt-5 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Warta Paroki
        </h1>

        <p
          class="mt-5 max-w-2xl text-base leading-8 text-white/60"
        >
          Temukan warta mingguan,
          pengumuman, dan informasi
          kehidupan umat
          {{ parishConfig.name }}.
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section
      class="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20"
    >
      <!-- Loading -->
      <div
        v-if="status === 'pending'"
        class="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="item in 3"
          :key="item"
          class="h-[330px] animate-pulse rounded-[2rem] bg-stone-200/60"
        />
      </div>

      <!-- Error -->
      <div
        v-else-if="error"
        class="rounded-[2rem] border border-red-200 bg-red-50 p-8"
      >
        <p
          class="font-semibold text-red-900"
        >
          Warta Paroki belum dapat dimuat.
        </p>

        <p
          class="mt-2 text-sm text-red-700"
        >
          Silakan coba kembali beberapa saat lagi.
        </p>
      </div>

      <template v-else>
        <!-- FEATURED -->
        <article
          v-if="latestBulletin"
          class="relative overflow-hidden rounded-[2.25rem] bg-church-900 p-7 text-white sm:p-9 lg:p-12"
        >
          <div
            class="absolute -right-28 -top-28 size-80 rounded-full border border-white/10"
          />

          <div
            class="absolute right-14 top-10 size-48 rounded-full border border-white/10"
          />

          <div
            class="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <div class="max-w-3xl">
              <div
                class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
              >
                <span
                  class="size-1.5 rounded-full bg-gold-500"
                />

                <span
                  class="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-500"
                >
                  Warta Terbaru
                </span>
              </div>

              <p
                v-if="latestBulletin.liturgicalLabel"
                class="mt-8 text-xs font-semibold uppercase tracking-[0.15em] text-gold-500"
              >
                {{ latestBulletin.liturgicalLabel }}
              </p>

              <h2
                class="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
              >
                {{ latestBulletin.title }}
              </h2>

              <p
                class="mt-4 text-sm text-white/50"
              >
                {{ latestBulletin.dateLabel }}
              </p>

              <p
                v-if="latestBulletin.description"
                class="mt-6 max-w-2xl leading-7 text-white/60"
              >
                {{ latestBulletin.description }}
              </p>
            </div>

            <a
              v-if="latestBulletin.pdfUrl"
              :href="latestBulletin.pdfUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex shrink-0 items-center justify-center rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
            >
              Baca Warta

              <span class="ml-2">
                →
              </span>
            </a>
          </div>
        </article>

        <!-- Empty database -->
        <BulletinEmptyState
          v-if="
            !latestBulletin
            && bulletins.length === 0
          "
        />

        <template v-else>
          <!-- Archive header -->
          <div
            class="mt-16 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p
                class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
              >
                Arsip
              </p>

              <h2
                class="mt-3 font-display text-3xl font-bold text-church-900"
              >
                Arsip Warta
              </h2>

              <p
                class="mt-3 max-w-xl text-sm leading-6 text-stone-500"
              >
                Cari Warta Paroki berdasarkan
                tahun dan bulan penerbitan.
              </p>
            </div>

            <!-- FILTERS -->
            <div
              class="flex flex-wrap gap-3"
            >
              <select
                :value="selectedYear ?? ''"
                class="min-w-[145px] rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-700 outline-none transition focus:border-church-700"
                @change="
                  setYear(
                    ($event.target as HTMLSelectElement).value
                      ? Number(
                          ($event.target as HTMLSelectElement).value,
                        )
                      : undefined,
                  )
                "
              >
                <option value="">
                  Semua Tahun
                </option>

                <option
                  v-for="year in availableYears"
                  :key="year"
                  :value="year"
                >
                  {{ year }}
                </option>
              </select>

              <select
                :value="selectedMonth ?? ''"
                class="min-w-[155px] rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-700 outline-none transition focus:border-church-700"
                @change="
                  setMonth(
                    ($event.target as HTMLSelectElement).value
                      ? Number(
                          ($event.target as HTMLSelectElement).value,
                        )
                      : undefined,
                  )
                "
              >
                <option value="">
                  Semua Bulan
                </option>

                <option
                  v-for="month in months"
                  :key="month.value"
                  :value="month.value"
                >
                  {{ month.label }}
                </option>
              </select>

              <button
                v-if="
                  selectedYear
                  || selectedMonth
                "
                type="button"
                class="rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-church-800 transition hover:border-church-800"
                @click="resetFilters"
              >
                Reset
              </button>
            </div>
          </div>

          <!-- Archive cards -->
          <div
            v-if="bulletins.length"
            class="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            <BulletinCard
              v-for="bulletin in bulletins"
              :key="bulletin.id"
              :bulletin="bulletin"
            />
          </div>

          <!-- Filter no result -->
          <div
            v-else
            class="mt-9 rounded-[2rem] border border-dashed border-stone-300 bg-white px-6 py-14 text-center"
          >
            <p
              class="font-display text-xl font-bold text-church-900"
            >
              Warta tidak ditemukan
            </p>

            <p
              class="mt-2 text-sm text-stone-500"
            >
              Tidak ada Warta pada periode yang dipilih.
            </p>

            <button
              type="button"
              class="mt-5 text-sm font-semibold text-church-800"
              @click="resetFilters"
            >
              Tampilkan semua warta →
            </button>
          </div>
        </template>
      </template>
    </section>
  </main>
</template>
