import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Beranda.css'

export default function Beranda() { 
 const { items = [], loading } = useKoleksi()

  if (loading) {
    return (
      <section className="beranda-wrapper">
        <p>Memuat statistik...</p>
      </section>
    )
  }

  const totalBuku = items.length

  const totalKategori = new Set(
    items.map((buku) => buku.kategori).filter(Boolean)
  ).size

  return (
    <section className="beranda-wrapper">
      <div className="hero-banner">
        <span className="hero-badge">📚</span>
        <h2>Rak Buku Pribadiku</h2>
        <h3>Halo Dela, Selamat Datang!!</h3>
        <p>
          Ayoo mulai catatan, kelola, dan
          lihat koleksi buku pribadikuu 😉
        </p>
      </div>

      <div className="grid-statistik">
        <div className="kartu-stat">
          <span className="angka-stat">{totalBuku}</span>
          <span className="label-stat">Total Koleksi Buku</span>
        </div>
        <div className="kartu-stat">
          <span className="angka-stat">{totalKategori}</span>
          <span className="label-stat">Kategori Terdaftar</span>
        </div>
      </div>

      <div className="area-tombol">
        <Link to="/koleksi" className="btn-utama">
          📚 Lihat Koleksi Buku
        </Link>
        <Link to="/tambah" className="btn-sekunder">
          ➕ Tambah Buku Baru
        </Link>
      </div>

      <div className="kartu-kutipan">
        <p>
          <em>"Buku adalah cermin: kamu hanya melihat di dalamnya apa yang sudah kamu miliki di dalam dirimu."</em>
        </p>
        <span>— Carlos Ruiz Zafón</span>
      </div>
    </section>
  )
}