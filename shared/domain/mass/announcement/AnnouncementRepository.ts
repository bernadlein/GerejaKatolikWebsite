import type {
  Announcement,
} from './types'

export interface AnnouncementRepository {
  getAll(): Promise<Announcement[]>
}