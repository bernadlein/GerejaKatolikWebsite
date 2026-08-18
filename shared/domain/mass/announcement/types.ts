export type AnnouncementPriority =
  | 'normal'
  | 'important'

export interface Announcement {
  id: string
  title: string
  summary: string

  publishedAt: string
  expiresAt?: string

  priority: AnnouncementPriority

  action?: {
    label: string
    to: string
  }
}