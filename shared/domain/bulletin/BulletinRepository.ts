import type {
  Bulletin,
} from './types'

export interface BulletinRepository {
  getAll(): Promise<Bulletin[]>
}