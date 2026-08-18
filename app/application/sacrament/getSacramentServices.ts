import type {
  SacramentRepository,
} from '#shared/domain/sacrament/SacramentRepository'

export async function getSacramentServices(
  repository: SacramentRepository,
) {
  const services =
    await repository.getAll()

  return services
}