import { Link } from 'react-router-dom'
import Card from '@/components/Card'
import StatusBadge from '@/components/StatusBadge'
import { widgets } from '@/data/widgets'

export default function WidgetsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Widgetlar</h2>
          <p className="text-sm text-gray-600">Sitenizde gösterilecek widget koleksiyonu</p>
        </div>
        <button className="btn btn-primary">Yeni Widget</button>
      </div>

      <Card title="Liste">
        <div className="overflow-hidden rounded-lg border">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ad</th>
                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Durum</th>
                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">İstatistikler</th>
                <th className="px-4 py-2"/>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {widgets.map(w => (
                <tr key={w.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900">{w.name}</div>
                    <div className="text-sm text-gray-600">{w.description}</div>
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={w.status} />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {w.metrics.impressions.toLocaleString()} görüntülenme · {w.metrics.clicks.toLocaleString()} tıklama · {w.metrics.conversions.toLocaleString()} dönüşüm
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link to={`/widgets/${w.id}`} className="btn btn-ghost">Detay</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}


