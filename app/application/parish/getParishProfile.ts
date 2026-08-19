import type {
  ParishRepository,
} from '#shared/domain/parish/ParishRepository'

export async function getParishProfile(
  repository: ParishRepository,
) {
  return repository.getProfile()
}