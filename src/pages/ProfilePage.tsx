import { FormEvent, useState } from 'react'
import Card from '@/components/Card'
import { useAuth, User } from '@/auth/AuthContext'

export default function ProfilePage() {
  const { user } = useAuth()
  const [form, setForm] = useState<User | null>(user)
  const [saved, setSaved] = useState(false)

  if (!form) return null

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    localStorage.setItem('owf_auth_user', JSON.stringify(form))
    setSaved(true)
    setTimeout(() => setSaved(false), 1200)
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Card title="Profil Bilgileri">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Ad Soyad</label>
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-primary-500 focus:ring-2"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">E-posta</label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-primary-500 focus:ring-2"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Rol</label>
            <select
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-primary-500 focus:ring-2"
              value={form.role}
              onChange={e => setForm({ ...form, role: e.target.value as User['role'] })}
            >
              <option value="user">Kullanıcı</option>
              <option value="admin">Yönetici</option>
            </select>
          </div>
          <button className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">Kaydet</button>
          {saved && <span className="ml-2 text-sm text-green-600">Kaydedildi</span>}
        </form>
      </Card>

      <Card title="Hesap Özeti">
        <ul className="space-y-2 text-sm text-gray-700">
          <li><span className="font-medium">ID:</span> {form.id}</li>
          <li><span className="font-medium">E-posta:</span> {form.email}</li>
          <li><span className="font-medium">Rol:</span> {form.role}</li>
        </ul>
      </Card>
    </div>
  )
}


