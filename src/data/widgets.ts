import { Widget } from '@/types/widget'

export const widgets: Widget[] = [
  {
    id: 'wid-1',
    name: 'Karşılama Bannerı',
    description: 'Ziyaretçilere hoş geldiniz mesajı gösterir.',
    status: 'active',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
    metrics: { impressions: 12540, clicks: 930, conversions: 112 },
  },
  {
    id: 'wid-2',
    name: 'Çıkış Niyeti Popup',
    description: 'Kullanıcı ayrılmadan önce kampanya gösterir.',
    status: 'paused',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 40).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    metrics: { impressions: 8420, clicks: 640, conversions: 77 },
  },
  {
    id: 'wid-3',
    name: 'Footer Abonelik Çubuğu',
    description: 'Bülten aboneliği toplar.',
    status: 'draft',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    metrics: { impressions: 2130, clicks: 180, conversions: 22 },
  },
]

export const getWidgetById = (id: string) => widgets.find(w => w.id === id) || null


