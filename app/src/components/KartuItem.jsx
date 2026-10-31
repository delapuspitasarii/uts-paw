import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  
return (
    <div className="kartu-item">
      <h3>{item.judul}</h3>
      <p>{item.kategori}</p>
      <Link to={`/koleksi/${item.id}`}>Lihat Detail</Link>
    </div>
  )
}