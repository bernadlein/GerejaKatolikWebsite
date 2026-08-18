import type { MassRepository } from '#shared/domain/mass/MassRepository'

export async function getWeeklyMassSchedule(
  repository: MassRepository,
) {
  return repository.getWeeklySchedule()
}
