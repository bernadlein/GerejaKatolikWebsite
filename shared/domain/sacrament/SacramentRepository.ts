import type {
  SacramentService,
  SacramentSlug,
} from './types'

export interface SacramentRepository {
  getAll(): Promise<SacramentService[]>

  getBySlug(
    slug: SacramentSlug,
  ): Promise<SacramentService | null>
}