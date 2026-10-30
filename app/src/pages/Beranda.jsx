// src/pages/Beranda.jsx
import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
  const { items = [], loading } = useKoleksi()
  const totalKategori = new Set((items || []).map((item) => item.kategori)).size

  return (
    <section>
      <h1>Rak Buku Pribadi</h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p>
          Ada {items.length} item dalam {totalKategori} kategori.
        </p>
      )}
      <Link to="/koleksi">Lihat semua koleksi</Link>
    </section>
  )
}