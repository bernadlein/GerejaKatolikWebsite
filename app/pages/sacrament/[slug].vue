<script setup lang="ts">
import type {
  SacramentSlug,
} from '#shared/domain/sacrament/types'

import {
  parishConfig,
} from '~/config/parish'

const route = useRoute()

const slug =
  route.params.slug as SacramentSlug

const {
  sacrament,
  status,
  error,
} = useSacramentDetail(
  slug,
)

watchEffect(() => {
  if (
    status.value === 'success'
    && !sacrament.value
  ) {
    throw createError({
      statusCode: 404,
      statusMessage:
        'Pelayanan tidak ditemukan',
    })
  }
})

useSeoMeta({
  title: () =>
    sacrament.value
      ? `${sacrament.value.title} | ${parishConfig.name}`
      : `Pelayanan Sakramen | ${parishConfig.name}`,

  description: () =>
    sacrament.value?.summary
    ?? `Informasi pelayanan ${parishConfig.name}.`,
})
</script>

<template>
  <main class="bg-[#faf9f7]">
    <!-- Loading -->
    <div
      v-if="status === 'pending'"
      class="mx-auto max-w-7xl px-5 py-20 lg:px-8"
    >
      <div
        class="h-[500px] animate-pulse rounded-[2rem] bg-stone-200"
      />
    </div>

    <template
      v-else-if="sacrament"
    >
      <!-- HERO -->
      <section
        class="relative overflow-hidden bg-church-900"
      >
        <div
          class="absolute -right-32 -top-32 size-[450px] rounded-full border border-white/10"
        />

        <div
          class="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
        >
          <NuxtLink
            to="/sakramen"
            class="inline-flex items-center text-sm font-semibold text-white/50 transition hover:text-white"
          >
            ← Pelayanan Sakramen
          </NuxtLink>

          <div
            class="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <div class="max-w-3xl">
              <p
                class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
              >
                {{ sacrament.subtitle }}
              </p>

              <h1
                class="mt-4 font-display text-5xl font-bold text-white sm:text-6xl"
              >
                {{ sacrament.title }}
              </h1>

              <p
                class="mt-6 max-w-2xl text-base leading-8 text-white/60"
              >
                {{ sacrament.description }}
              </p>
            </div>

            <div
              class="flex size-24 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 text-gold-500"
            >
              <SacramentIcon
                :name="sacrament.icon"
                class="size-11"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- CONTENT -->
      <section
        class="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20"
      >
        <!-- Not published -->
        <div
          v-if="!sacrament.detailsPublished"
          class="rounded-[2rem] border border-gold-500/20 bg-[#f8f4ea] p-7 sm:p-8"
        >
          <div
            class="flex flex-col gap-5 sm:flex-row sm:items-start"
          >
            <div
              class="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-gold-500"
            >
              i
            </div>

            <div>
              <h2
                class="font-display text-xl font-bold text-church-900"
              >
                Informasi Resmi Sedang Dilengkapi
              </h2>

              <p
                class="mt-2 max-w-2xl text-sm leading-7 text-stone-600"
              >
                Persyaratan, jadwal, dan prosedur
                resmi pelayanan ini akan ditampilkan
                setelah informasi Paroki St. Yosafat
                tersedia.
              </p>
            </div>
          </div>
        </div>

        <!-- Information -->
        <div
          class="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]"
        >
          <!-- Main -->
          <div class="space-y-6">
            <!-- Requirements -->
            <article
              class="rounded-[2rem] border border-stone-200 bg-white p-7 sm:p-8"
            >
              <p
                class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
              >
                Persyaratan
              </p>

              <h2
                class="mt-3 font-display text-2xl font-bold text-church-900"
              >
                Persyaratan Pelayanan
              </h2>

              <ul
                v-if="sacrament.hasRequirements"
                class="mt-6 space-y-3"
              >
                <li
                  v-for="requirement in sacrament.requirements"
                  :key="requirement"
                  class="flex gap-3 text-sm leading-7 text-stone-600"
                >
                  <span
                    class="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500"
                  />

                  {{ requirement }}
                </li>
              </ul>

              <p
                v-else
                class="mt-5 text-sm leading-7 text-stone-500"
              >
                Persyaratan resmi belum dipublikasikan.
                Silakan menghubungi sekretariat paroki.
              </p>
            </article>

            <!-- Process -->
            <article
              class="rounded-[2rem] border border-stone-200 bg-white p-7 sm:p-8"
            >
              <p
                class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
              >
                Tahapan
              </p>

              <h2
                class="mt-3 font-display text-2xl font-bold text-church-900"
              >
                Proses Pelayanan
              </h2>

              <div
                v-if="sacrament.hasProcess"
                class="mt-7 space-y-6"
              >
                <div
                  v-for="(step, index) in sacrament.process"
                  :key="step.id"
                  class="flex gap-5"
                >
                  <div
                    class="flex size-10 shrink-0 items-center justify-center rounded-full bg-church-900 text-sm font-bold text-white"
                  >
                    {{ index + 1 }}
                  </div>

                  <div>
                    <h3
                      class="font-semibold text-church-900"
                    >
                      {{ step.title }}
                    </h3>

                    <p
                      v-if="step.description"
                      class="mt-1 text-sm leading-6 text-stone-500"
                    >
                      {{ step.description }}
                    </p>
                  </div>
                </div>
              </div>

              <p
                v-else
                class="mt-5 text-sm leading-7 text-stone-500"
              >
                Tahapan pelayanan resmi akan
                diperbarui setelah informasi
                dari paroki tersedia.
              </p>
            </article>
          </div>

          <!-- Sidebar -->
          <aside>
            <div
              class="sticky top-28 rounded-[2rem] bg-church-900 p-7 text-white"
            >
              <p
                class="text-xs font-bold uppercase tracking-[0.18em] text-gold-500"
              >
                Informasi & Pendaftaran
              </p>

              <h2
                class="mt-3 font-display text-2xl font-bold"
              >
                Hubungi Sekretariat
              </h2>

              <p
                v-if="sacrament.contactNote"
                class="mt-4 text-sm leading-7 text-white/60"
              >
                {{ sacrament.contactNote }}
              </p>

              <div
                class="mt-7 border-t border-white/10 pt-6"
              >
                <a
                  :href="`mailto:${parishConfig.contact.email}`"
                  class="block text-sm font-medium text-white/80 transition hover:text-white"
                >
                  {{ parishConfig.contact.email }}
                </a>

                <a
                  v-for="phone in parishConfig.contact.phones"
                  :key="phone"
                  :href="`tel:${phone}`"
                  class="mt-3 block text-sm font-medium text-white/80 transition hover:text-white"
                >
                  {{ phone }}
                </a>
              </div>

              <NuxtLink
                to="/kontak"
                class="mt-7 inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-white"
              >
                Lihat Kontak Lengkap
              </NuxtLink>
            </div>
          </aside>
        </div>
      </section>
    </template>

    <div
      v-else-if="error"
      class="mx-auto max-w-7xl px-5 py-20 lg:px-8"
    >
      <p class="text-red-700">
        Informasi pelayanan tidak dapat dimuat.
      </p>
    </div>
  </main>
</template>