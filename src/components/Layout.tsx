import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '@/auth/AuthContext'

export default function Layout() {
  const { user, logout } = useAuth()
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary-600"></div>
            <span className="text-lg font-semibold">OpenAI Workflow</span>
          </div>
          <nav className="flex items-center gap-4">
            <NavLink to="/" className={({ isActive }) => `text-sm ${isActive ? 'text-primary-600' : 'text-gray-600'}`}>Dashboard</NavLink>
            <NavLink to="/widgets" className={({ isActive }) => `text-sm ${isActive ? 'text-primary-600' : 'text-gray-600'}`}>Widgetlar</NavLink>
            <NavLink to="/profile" className={({ isActive }) => `text-sm ${isActive ? 'text-primary-600' : 'text-gray-600'}`}>Profil</NavLink>
            <div className="h-6 w-px bg-gray-200" />
            <span className="text-sm text-gray-700">{user?.name}</span>
            <button onClick={logout} className="rounded bg-gray-900 px-3 py-1.5 text-sm text-white hover:bg-black/90">Çıkış</button>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}


