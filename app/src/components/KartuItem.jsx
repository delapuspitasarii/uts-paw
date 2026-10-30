import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, penulis, status } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {kategori} &middot; {penulis} ({status})
      </p>
    </article>
  )
}