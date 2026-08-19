<script setup lang="ts">
import {
  parishConfig,
} from '~/config/parish'

const {
  profile,
  status,
  error,
} = useParishProfile()

useSeoMeta({
  title:
    `Tentang Paroki | ${parishConfig.name}`,

  description:
    `Profil, sejarah, dan informasi ${parishConfig.churchName}.`,
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
        class="absolute right-10 top-16 size-[280px] rounded-full border border-white/10"
      />

      <div
        class="absolute -bottom-24 left-1/3 size-72 rounded-full bg-gold-500/10 blur-3xl"
      />

      <div
        class="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8 lg:py-24"
      >
        <div class="max-w-3xl">
          <div
            class="flex items-center gap-3"
          >
            <span
              class="h-px w-9 bg-gold-500"
            />

            <p
              class="text-xs font-bold uppercase tracking-[0.25em] text-gold-500"
            >
              Tentang Kami
            </p>
          </div>

          <h1
            class="mt-5 font-display text-5xl font-bold leading-tight text-white sm:text-6xl"
          >
            {{ parishConfig.name }}
          </h1>

          <p
            class="mt-5 max-w-2xl text-base leading-8 text-white/60"
          >
            Mengenal perjalanan, kehidupan,
            dan pelayanan komunitas umat
            {{ parishConfig.churchName }}.
          </p>
        </div>

        <div
          class="flex size-44 items-center justify-center rounded-[2.5rem] border border-white/10 bg-white p-6 shadow-2xl shadow-black/10 lg:size-56"
        >
          <img
            :src="parishConfig.branding.logo"
            :alt="`Logo ${parishConfig.name}`"
            class="h-full w-full object-contain"
          >
        </div>
      </div>
    </section>

    <!-- LOADING -->
    <section
      v-if="status === 'pending'"
      class="mx-auto max-w-7xl px-5 py-20 lg:px-8"
    >
      <div
        class="grid gap-5 md:grid-cols-3"
      >
        <div
          v-for="item in 3"
          :key="item"
          class="h-64 animate-pulse rounded-[2rem] bg-stone-200"
        />
      </div>
    </section>

    <!-- ERROR -->
    <section
      v-else-if="error"
      class="mx-auto max-w-7xl px-5 py-20 lg:px-8"
    >
      <div
        class="rounded-[2rem] border border-red-200 bg-red-50 p-8"
      >
        <p
          class="font-semibold text-red-900"
        >
          Profil paroki belum dapat dimuat.
        </p>
      </div>
    </section>

    <template
      v-else-if="profile"
    >
      <!-- PROFILE -->
      <section
        class="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
      >
        <div
          class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
        >
          <!-- Label -->
          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
            >
              Profil Paroki
            </p>

            <h2
              class="mt-4 font-display text-4xl font-bold leading-tight text-church-900"
            >
              Bertumbuh Bersama dalam Iman
            </h2>
          </div>

          <!-- Description -->
          <div>
            <p
              class="text-lg leading-8 text-stone-600"
            >
              {{ profile.introduction }}
            </p>

            <div
              class="mt-9 grid gap-4 sm:grid-cols-2"
            >
              <ParishInfoCard
                eyebrow="Peresmian"
                :title="profile.inauguration.dateLabel"
                :description="`Diresmikan oleh ${profile.inauguration.officiant}`"
              />

              <ParishInfoCard
                eyebrow="Lokasi"
                title="Medokan Semampir, Surabaya"
                :description="parishConfig.address"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- INAUGURATION FEATURE -->
      <section
        class="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24"
      >
        <article
          class="relative overflow-hidden rounded-[2.5rem] bg-church-900 p-8 text-white sm:p-10 lg:p-14"
        >
          <div
            class="absolute -right-24 -top-24 size-72 rounded-full border border-white/10"
          />

          <div
            class="absolute right-20 top-10 size-44 rounded-full border border-white/10"
          />

          <div
            class="relative grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-center"
          >
            <div>
              <p
                class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
              >
                Tonggak Sejarah
              </p>

              <p
                class="mt-4 font-display text-5xl font-bold sm:text-6xl"
              >
                2025
              </p>
            </div>

            <div>
              <h2
                class="font-display text-3xl font-bold sm:text-4xl"
              >
                Peresmian Paroki St. Yosafat
              </h2>

              <p
                class="mt-5 max-w-3xl leading-8 text-white/60"
              >
                {{ profile.inauguration.description }}
              </p>
            </div>
          </div>
        </article>
      </section>

      <!-- HISTORY -->
      <section
        class="border-y border-stone-200 bg-white"
      >
        <div
          class="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
        >
          <div
            class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"
          >
            <div>
              <p
                class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
              >
                Perjalanan
              </p>

              <h2
                class="mt-4 font-display text-4xl font-bold text-church-900"
              >
                Sejarah Paroki
              </h2>

              <p
                class="mt-4 max-w-md text-sm leading-7 text-stone-500"
              >
                Perjalanan pertumbuhan umat
                dan terbentuknya
                Paroki St. Yosafat.
              </p>
            </div>

            <ParishHistoryTimeline
              v-if="profile.hasHistory"
              :items="profile.history"
            />

            <AboutComingSoon
              v-else
              title="Sejarah sedang dilengkapi"
              description="Riwayat dan perjalanan Paroki St. Yosafat akan ditampilkan setelah naskah sejarah resmi tersedia."
            />
          </div>
        </div>
      </section>

      <!-- PATRON SAINT -->
      <section
        class="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
      >
        <div
          class="grid gap-6 lg:grid-cols-2"
        >
          <article
            class="relative overflow-hidden rounded-[2rem] bg-[#f3eee5] p-8 sm:p-10"
          >
            <div
              class="absolute -right-20 -top-20 size-52 rounded-full border border-gold-500/20"
            />

            <p
              class="relative text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
            >
              Santo Pelindung
            </p>

            <h2
              class="relative mt-4 font-display text-3xl font-bold text-church-900"
            >
              {{ profile.patronSaint.title }}
            </h2>

            <p
              v-if="
                profile.hasPatronSaint
                && profile.patronSaint.description
              "
              class="relative mt-5 leading-8 text-stone-600"
            >
              {{ profile.patronSaint.description }}
            </p>

            <p
              v-else
              class="relative mt-5 leading-8 text-stone-500"
            >
              Profil Santo Pelindung Paroki
              akan dilengkapi pada pembaruan
              berikutnya.
            </p>
          </article>

          <!-- Vision -->
          <article
            class="rounded-[2rem] bg-church-900 p-8 text-white sm:p-10"
          >
            <p
              class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
            >
              Arah Pastoral
            </p>

            <h2
              class="mt-4 font-display text-3xl font-bold"
            >
              Visi & Misi
            </h2>

            <template
              v-if="profile.hasVisionMission"
            >
              <p
                v-if="profile.vision"
                class="mt-5 leading-8 text-white/70"
              >
                {{ profile.vision }}
              </p>

              <ul
                v-if="profile.missions.length"
                class="mt-6 space-y-3"
              >
                <li
                  v-for="mission in profile.missions"
                  :key="mission.id"
                  class="flex gap-3 text-sm leading-7 text-white/60"
                >
                  <span
                    class="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500"
                  />

                  {{ mission.text }}
                </li>
              </ul>
            </template>

            <p
              v-else
              class="mt-5 leading-8 text-white/50"
            >
              Visi dan misi resmi paroki
              akan ditampilkan setelah
              datanya tersedia.
            </p>
          </article>
        </div>
      </section>

      <!-- PASTOR -->
      <section
        class="border-t border-stone-200 bg-white"
      >
        <div
          class="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
        >
          <div
            class="max-w-2xl"
          >
            <p
              class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
            >
              Pelayanan Pastoral
            </p>

            <h2
              class="mt-4 font-display text-4xl font-bold text-church-900"
            >
              Pastor Paroki
            </h2>
          </div>

          <div
            v-if="profile.hasPastors"
            class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            <article
              v-for="pastor in profile.pastors"
              :key="pastor.id"
              class="overflow-hidden rounded-[2rem] border border-stone-200 bg-[#faf9f7]"
            >
              <div
                class="aspect-[4/3] bg-stone-100"
              >
                <img
                  v-if="pastor.photo"
                  :src="pastor.photo"
                  :alt="pastor.name"
                  class="h-full w-full object-cover"
                >
              </div>

              <div class="p-6">
                <p
                  class="text-xs font-bold uppercase tracking-[0.16em] text-gold-500"
                >
                  {{ pastor.role }}
                </p>

                <h3
                  class="mt-2 font-display text-xl font-bold text-church-900"
                >
                  {{ pastor.name }}
                </h3>

                <p
                  v-if="pastor.period"
                  class="mt-2 text-sm text-stone-500"
                >
                  {{ pastor.period }}
                </p>
              </div>
            </article>
          </div>

          <AboutComingSoon
            v-else
            class="mt-10"
            title="Profil Pastor akan dilengkapi"
            description="Nama, foto, dan informasi Pastor Paroki akan ditampilkan setelah data resmi tersedia."
          />
        </div>
      </section>
    </template>
  </main>
</template>
