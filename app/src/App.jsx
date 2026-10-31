import { Routes, Route, Navigate } from 'react-router-dom'
import { KoleksiProvider } from './context/KoleksiProvider.jsx'
import Layout from './components/Layout.jsx'
import Beranda from './pages/Beranda.jsx'
import Koleksi from './pages/Koleksi.jsx'
import Detail from './pages/Detail.jsx'
import Tambah from './pages/Tambah.jsx'
import Statistik from './pages/Statistik.jsx'
import Tentang from './pages/Tentang.jsx'
import TidakDitemukan from './pages/TidakDitemukan.jsx'

export default function App() {
  return (
    <KoleksiProvider>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Beranda />} /> 
         <Route path="beranda" element={<Navigate to="/" replace />} />
          <Route path="koleksi" element={<Koleksi />} />
          <Route path="koleksi/:id" element={<Detail />} />
          <Route path="tambah" element={<Tambah />} />
          <Route path="statistik" element={<Statistik />} />
          <Route path="tentang" element={<Tentang />} />
          <Route path="*" element={<TidakDitemukan />} />
        </Route>
      </Routes>
    </KoleksiProvider>
  )
}