export type EventCategory =
  | 'liturgi'
  | 'pastoral'
  | 'komunitas'
  | 'sosial'
  | 'formasi'
  | 'lainnya'

export type EventStatus =
  | 'upcoming'
  | 'ongoing'
  | 'finished'

export interface ParishEvent {
  id: string

  slug: string

  title: string

  summary: string

  description?: string

  category: EventCategory

  startsAt: string

  endsAt?: string

  location: string

  address?: string

  coverImage?: string

  registration?: {
    enabled: boolean
    label?: string
    url?: string
  }

  contact?: {
    name?: string
    phone?: string
  }

  featured: boolean

  published: boolean
}