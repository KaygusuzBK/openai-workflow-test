import Card from '@/components/Card'
import { useAuth } from '@/auth/AuthContext'

export default function DashboardPage() {
  const { user } = useAuth()
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Hoş geldin, {user?.name}</h2>
        <p className="text-sm text-gray-600">Rolün: {user?.role}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card title="Hızlı Erişim">
          <ul className="list-disc px-5 text-sm text-gray-700">
            <li>Profil bilgilerini güncelle</li>
            <li>Takım üyeleri ile paylaş</li>
            <li>OpenAI entegrasyonuna hazırlık</li>
          </ul>
        </Card>

        <Card title="Aktivite">
          <div className="text-sm text-gray-700">Henüz aktivite yok.</div>
        </Card>
      </div>
    </div>
  )
}


