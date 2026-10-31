import useKoleksi from '../hooks/useKoleksi.js'
import './Statistik.css'

export default function Statistik() {
  const { items = [], loading } = useKoleksi()

  if (loading) {
    return (
      <section className="statistik-wrapper">
        <p>Memuat data statistik...</p>
      </section>
    )
  }

  const perKategori = items.reduce(
    (hitung, { kategori }) => ({ ...hitung, [kategori]: (hitung[kategori] ?? 0) + 1 }),
    {}
  )

  return (
    <section className="statistik-wrapper">
      <h1 className="statistik-judul">📊 Statistik Koleksi Buku</h1>
      <div className="tabel-card"></div>
        <div className="tabel-gulir">
          <table className="tabel-data">
          <thead>
            <tr>
              <th>Kategori Buku</th>
              <th>Jumlah Buku </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(perKategori).map(([kategori, jumlah]) => (
              <tr key={kategori}>
                <td>{kategori}</td>
                <td>{jumlah}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Total Koleksi</th>
              <td>{items.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}