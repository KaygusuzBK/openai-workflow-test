import { Link, useParams } from 'react-router-dom'
import Card from '@/components/Card'
import StatusBadge from '@/components/StatusBadge'
import { getWidgetById } from '@/data/widgets'

export default function WidgetDetailPage() {
  const { id } = useParams()
  const widget = id ? getWidgetById(id) : null

  if (!widget) {
    return (
      <div className="space-y-4">
        <div className="text-sm text-gray-700">Widget bulunamadı.</div>
        <Link to="/widgets" className="btn btn-ghost">Listeye dön</Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{widget.name}</h2>
          <p className="text-sm text-gray-600">{widget.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge status={widget.status} />
          <Link to="/widgets" className="btn btn-ghost">Geri</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card title="Genel Bilgiler">
          <ul className="space-y-2 text-sm text-gray-700">
            <li><span className="font-medium">ID:</span> {widget.id}</li>
            <li><span className="font-medium">Durum:</span> {widget.status}</li>
            <li><span className="font-medium">Oluşturulma:</span> {new Date(widget.createdAt).toLocaleString()}</li>
            <li><span className="font-medium">Güncelleme:</span> {new Date(widget.updatedAt).toLocaleString()}</li>
          </ul>
        </Card>
        <Card title="Performans">
          <div className="text-sm text-gray-700">
            {widget.metrics.impressions.toLocaleString()} görüntülenme
            <br/>
            {widget.metrics.clicks.toLocaleString()} tıklama
            <br/>
            {widget.metrics.conversions.toLocaleString()} dönüşüm
          </div>
        </Card>
        <Card title="Önizleme" actions={<button className="btn btn-ghost">Yayınla</button>}>
          <div className="rounded-lg border border-dashed p-8 text-center text-sm text-gray-500">
            Burada widget önizlemesi yer alacak.
          </div>
        </Card>
      </div>
    </div>
  )
}


