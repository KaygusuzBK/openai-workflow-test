export type Widget = {
  id: string
  name: string
  description: string
  status: 'active' | 'paused' | 'draft'
  createdAt: string
  updatedAt: string
  metrics: {
    impressions: number
    clicks: number
    conversions: number
  }
}


