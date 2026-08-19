export type CommunityCategory =
  | 'youth'
  | 'children'
  | 'family'
  | 'women'
  | 'liturgy'
  | 'devotional'
  | 'music'
  | 'social'
  | 'formation'
  | 'other'

export interface CommunityActivity {
  id: string

  title: string

  description?: string
}

export interface CommunityContact {
  name?: string

  role?: string

  phone?: string

  email?: string
}

export interface CommunityMeeting {
  schedule?: string

  location?: string
}

export interface ParishCommunity {
  id: string

  slug: string

  name: string

  shortName?: string

  summary: string

  description?: string

  category: CommunityCategory

  activities: CommunityActivity[]

  meeting?: CommunityMeeting

  coordinator?: CommunityContact

  joinInfo?: string

  coverImage?: string

  featured: boolean

  published: boolean
}