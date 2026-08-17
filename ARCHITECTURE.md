# Architecture

## Principles

1. UI components never decide business rules.
2. Domain code is framework-agnostic and lives in `shared/domain`.
3. Application use-cases orchestrate domain operations.
4. Infrastructure implements repository contracts and can be replaced without changing UI.
5. Nuxt composables adapt application use-cases to Vue reactivity.
6. Server routes stay thin and delegate to application/domain services when backend features are added.

## Dependency direction

`components/pages -> composables -> application -> domain <- infrastructure`

The domain layer must not import Vue, Nuxt, Tailwind, database clients, or HTTP clients.

## Planned modules

- Mass schedules
- Parish announcements
- Parish bulletin / Warta
- Sacraments
- Events and registrations
- Communities / ministries
- Gallery
- Contact and office hours
- Admin/CMS

Each module should repeat the same separation: domain contract, use-case, infrastructure adapter, composable/server adapter, UI.
