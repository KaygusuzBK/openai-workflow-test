import { ReactNode } from 'react'

export default function Card({ title, children, actions }: { title: string; children: ReactNode; actions?: ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b px-5 py-3">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        {actions}
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  )
}


