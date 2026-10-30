import React from 'react';
import { NavLink } from 'react-router-dom'; 
export default function Header() {
  return (
    <header id="header-utama">
      <div className="brand-container">
        <span className="brand-icon">📖</span>
        <h1 className="teks-header-putih">Rak Buku Akuuu ( Delaaa)</h1>
      </div>

      <nav className="nav-menu">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
          Beranda
        </NavLink>
        <NavLink to="/koleksi" className={({ isActive }) => (isActive ? 'active' : '')}>
          Koleksi
        </NavLink>
        <NavLink to="/tambah" className={({ isActive }) => (isActive ? 'active' : '')}>
          Tambah
        </NavLink>
        <NavLink to="/statistik" className={({ isActive }) => (isActive ? 'active' : '')}>
          Statistik
        </NavLink>
        <NavLink to="/tentang" className={({ isActive }) => (isActive ? 'active' : '')}>
          Tentang
        </NavLink>
      </nav>
    </header>
  );
}