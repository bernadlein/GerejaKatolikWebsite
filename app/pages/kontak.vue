<script setup lang="ts">
import { parishConfig } from '~/config/parish'

useSeoMeta({
  title: 'Kontak Paroki',
  description: `Alamat dan kontak ${parishConfig.churchName}.`,
})
</script>

<template>
  <main>
    <section class="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
      <p
        class="text-xs font-bold uppercase tracking-[0.2em] text-gold-500"
      >
        Sekretariat
      </p>

      <h1
        class="mt-3 font-display text-4xl font-bold text-church-900 sm:text-5xl"
      >
        Kontak Paroki
      </h1>

      <p class="mt-4 max-w-2xl leading-7 text-stone-600">
        Informasi alamat, nomor telepon, email, dan media sosial
        {{ parishConfig.name }}.
      </p>

      <div class="mt-10 grid gap-5 md:grid-cols-2">
        <!-- Alamat -->
        <article
          class="rounded-3xl border border-church-200 bg-white p-7"
        >
          <p
            class="text-xs font-bold uppercase tracking-[0.15em] text-gold-500"
          >
            Alamat
          </p>

          <p class="mt-4 font-semibold leading-7 text-stone-900">
            {{ parishConfig.address }}
          </p>
        </article>

        <!-- Email -->
        <article
          class="rounded-3xl border border-church-200 bg-white p-7"
        >
          <p
            class="text-xs font-bold uppercase tracking-[0.15em] text-gold-500"
          >
            Email
          </p>

          <a
            :href="`mailto:${parishConfig.contact.email}`"
            class="mt-4 block font-semibold text-church-800 hover:text-church-600"
          >
            {{ parishConfig.contact.email }}
          </a>
        </article>

        <!-- Telepon -->
        <article
          class="rounded-3xl border border-church-200 bg-white p-7"
        >
          <p
            class="text-xs font-bold uppercase tracking-[0.15em] text-gold-500"
          >
            Telepon
          </p>

          <div class="mt-4 space-y-2">
            <a
              v-for="phone in parishConfig.contact.phones"
              :key="phone"
              :href="`tel:${phone}`"
              class="block font-semibold text-church-800 hover:text-church-600"
            >
              {{ phone }}
            </a>
          </div>
        </article>

        <!-- Media sosial -->
        <article
          class="rounded-3xl border border-church-200 bg-white p-7"
        >
          <p
            class="text-xs font-bold uppercase tracking-[0.15em] text-gold-500"
          >
            Media Sosial
          </p>

          <a
            :href="parishConfig.social.instagram.url"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 block font-semibold text-church-800 hover:text-church-600"
          >
            Instagram @{{ parishConfig.social.instagram.username }}
          </a>

          <p class="mt-2 font-semibold text-stone-700">
            YouTube · {{ parishConfig.social.youtube.name }}
          </p>
        </article>
      </div>
    </section>
  </main>
</template>
