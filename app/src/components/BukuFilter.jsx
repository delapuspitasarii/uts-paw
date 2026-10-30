export default function BukuFilter({ opsiKategori, kategoriAktif, onUbahKategori }) {
  return (
    <select 
      aria-label="Kategori" 
      value={kategoriAktif} 
      onChange={(e) => onUbahKategori(e.target.value)}
    >
      {opsiKategori.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  )
}