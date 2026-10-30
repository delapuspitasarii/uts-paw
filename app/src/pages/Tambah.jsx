import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = {
  judul: '',
  kategori: 'Teknologi',
  penulis: '',
  tahunTerbit: '2026',
  status: 'dimiliki'
}

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    setGalat('')
    tambah({
      ...form,
      judul: form.judul.trim(),
      penulis: form.penulis.trim() || 'Anonim',
      tahunTerbit: form.tahunTerbit.trim() || '2026'
    })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Buku</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option value="Teknologi">Teknologi</option>
        <option value="Novel">Novel</option>
        <option value="Sejarah">Sejarah</option>
        <option value="Komik">Komik</option>
      </select>

      <label htmlFor="penulis">Penulis</label>
      <input id="penulis" name="penulis" value={form.penulis} onChange={ubah} />

      <label htmlFor="tahunTerbit">Tahun Terbit</label>
      <input id="tahunTerbit" name="tahunTerbit" value={form.tahunTerbit} onChange={ubah} />

      <label htmlFor="status">Status</label>
      <select id="status" name="status" value={form.status} onChange={ubah}>
        <option value="dimiliki">dimiliki</option>
        <option value="sedang dibaca">sedang dibaca</option>
        <option value="ingin dibeli">ingin dibeli</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}