import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type User = {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

type AuthContextValue = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

const LOCAL_STORAGE_KEY = 'owf_auth_user'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (raw) setUser(JSON.parse(raw))
  }, [])

  const login = async (email: string, password: string) => {
    await new Promise(r => setTimeout(r, 400))
    // Simple mock auth; replace with API later
    if (!email || !password) throw new Error('E-posta ve şifre gerekli')
    const newUser: User = {
      id: crypto.randomUUID(),
      name: email.split('@')[0],
      email,
      role: email.startsWith('admin') ? 'admin' : 'user',
    }
    setUser(newUser)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(LOCAL_STORAGE_KEY)
  }

  const value = useMemo(() => ({ user, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}


