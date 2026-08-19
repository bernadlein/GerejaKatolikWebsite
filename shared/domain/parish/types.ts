export interface ParishHistoryItem {
  id: string
  year?: string
  date?: string
  title: string
  description: string
}

export interface ParishPastor {
  id: string
  name: string
  role: string
  period?: string
  photo?: string
}

export interface ParishMissionItem {
  id: string
  text: string
}

export interface ParishProfile {
  introduction: string

  inauguration: {
    date: string
    officiant: string
    description: string
  }

  history: ParishHistoryItem[]

  patronSaint: {
    title: string
    description?: string
    image?: string
    published: boolean
  }

  vision?: string

  missions: ParishMissionItem[]

  pastors: ParishPastor[]

  historyPublished: boolean
  visionMissionPublished: boolean
  pastorsPublished: boolean
}