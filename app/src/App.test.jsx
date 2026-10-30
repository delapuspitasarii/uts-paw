import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import App from './App.jsx'
import BadgeStatus from './components/BadgeStatus.jsx'
import KotakPencarian from './components/KotakPencarian.jsx'

describe('Pengujian Unit Aplikasi Rak Buku', () => {
  it('1. Menampilkan judul di beranda', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', { level: 1, name: /Rak Buku Pribadi/i })
    ).toBeInTheDocument()
  })

  it('2. Menampilkan menu navigasi utama', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: /^Beranda$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^Koleksi$/i })).toBeInTheDocument()
  })

  it('3. Menampilkan halaman tentang mahasiswa', () => {
    render(
      <MemoryRouter initialEntries={['/tentang']}>
        <App />
      </MemoryRouter>
    )
  
    expect(screen.getByRole('heading', { name: /Tentang/i })).toBeInTheDocument()
    
    const namaElements = screen.getAllByText(/Dela Puspita Sari/i)
    expect(namaElements.length).toBeGreaterThan(0)
  })

  it('4. Komponen BadgeStatus merender teks status dengan benar', () => {
    render(<BadgeStatus statusVal="dimiliki" />)
    expect(screen.getByText('dimiliki')).toBeInTheDocument()
  })

  it('5. Komponen KotakPencarian merender input pencarian', () => {
    render(<KotakPencarian nilai="Struktur" onUbah={() => {}} />)
    expect(screen.getByPlaceholderText(/Cari judul/i)).toBeInTheDocument()
  })
})