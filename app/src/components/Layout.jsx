import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

const MENU_LIST = [
  { ke: '/', label: 'Beranda' },
  { ke: '/koleksi', label: 'Koleksi' },
  { ke: '/tambah', label: 'Tambah' },
  { ke: '/statistik', label: 'Statistik' },
  { ke: '/tentang', label: 'Tentang' },
]

export default function Layout() {
  return (
    <div className="kerangka">
      <header id="header-utama" className="kepala">
        <strong><h1>📚Rak Buku Pribadiku - Delaaa</h1> Dela Puspita Sari (123140080) </strong>
        <nav className="menu">
          {MENU_LIST.map(({ ke, label }) => (
            <NavLink key={ke} to={ke} end={ke === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="konten-utama" className="isi">
        <Outlet />
      </main>
      <footer id="footer-utama" className="kaki">
        Ujian Tengah Semester (PAW) - Dela Puspita Sari (123140080)
      </footer>
    </div>
  )

}