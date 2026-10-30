import { useEffect, useState } from 'react'
import { KoleksiContext } from './koleksiContext.js'
import useLocalStorage from '../hooks/useLocalStorage.js'

export function KoleksiProvider({ children }) {
  const [items, setItems] = useLocalStorage('uts-paw-koleksi', null)
  const [loading, setLoading] = useState(items === null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (items !== null) return
    let isAlive = true

    async function muatData() {
      try {
        const path = `${import.meta.env.BASE_URL}data/koleksi.json`
        const res = await fetch(path)
        if (!res.ok) throw new Error(`Status HTTP: ${res.status}`)
        const payload = await res.json()
        if (isAlive) setItems(payload)
      } catch (err) {
        if (isAlive) setError(err.message || 'Gagal memuat data')
      } finally {
        if (isAlive) setLoading(false)
      }
    }

    muatData()
    return () => { isAlive = false }
  }, [items, setItems])

  const tambah = (newItem) => {
    setItems((prev) => [...(prev ?? []), { ...newItem, id: String(Date.now()) }])
  }

  const hapus = (targetId) => {
    setItems((prev) => (prev ?? []).filter((i) => String(i.id) !== String(targetId)))
  }

  return (
    <KoleksiContext.Provider value={{ items: items ?? [], loading, error, tambah, hapus }}>
      {children}
    </KoleksiContext.Provider>
  )
}