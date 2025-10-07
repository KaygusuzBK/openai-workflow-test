export default function StatusBadge({ status }: { status: 'active' | 'paused' | 'draft' }) {
  const map = {
    active: 'bg-green-100 text-green-800 border-green-200',
    paused: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    draft: 'bg-gray-100 text-gray-800 border-gray-200',
  } as const
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${map[status]}`}>
      {status === 'active' && <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-500" />}
      {status === 'paused' && <span className="mr-1 h-1.5 w-1.5 rounded-full bg-yellow-500" />}
      {status === 'draft' && <span className="mr-1 h-1.5 w-1.5 rounded-full bg-gray-500" />}
      {status}
    </span>
  )
}


