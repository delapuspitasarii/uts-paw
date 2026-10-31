import { Link, useNavigate, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import BadgeStatus from '../components/BadgeStatus.jsx'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const contextData = useKoleksi() || {}

  const { items = [], loading = false, hapus } = contextData
  
  const item = items.find((i) => String(i.id) === String(id))

  if (loading) return <p>Memuat data...</p>

  if (!item) {
    return (
      <section>
        <h1>Buku tidak ditemukan</h1>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    )
  }

  const handleHapus = () => {
    if (typeof hapus === 'function') {
      hapus(item.id)
    }
    navigate('/koleksi')
  }

  const statusVal = item.statusBaca || item.status || 'Belum Dibaca'
  const penerbitVal = item.penerbit || '-'
  const halamanVal = item.jumlahHalaman ?? item.halaman ?? '-'
  const penulisVal = item.penulis || item.pengarang || '-'
  const tahunVal = item.tahunTerbit || item.tahun || '-'

  return (
    <section>
      <h1>{item.judul}</h1>
    <dl>
        <dt>Kategori</dt>
        <dd>{item.kategori}</dd>

        <dt>Penulis</dt>
        <dd>{penulisVal}</dd>

        <dt>Penerbit</dt>
        <dd>{penerbitVal}</dd>

        <dt>Tahun Terbit</dt>
        <dd>{tahunVal}</dd>

        <dt>Jumlah Halaman</dt>
        <dd>{halamanVal}</dd>

        <dt>Status Baca</dt>
        <dd>
          <BadgeStatus statusVal={statusVal} />
        </dd>
      </dl>

      <div className="aksi">
        <button type="button" onClick={handleHapus}>
          Hapus
        </button>
        <Link to="/koleksi">Kembali</Link>
      </div>
    </section>
  )
}