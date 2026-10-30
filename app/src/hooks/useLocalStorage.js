import { useEffect, useState } from 'react'

export default function useLocalStorage(kunci, nilaiAwal) {
  const [nilai, setNilai] = useState(() => {
    try {
      const tersimpan = localStorage.getItem(kunci)
      return tersimpan ? JSON.parse(tersimpan) : nilaiAwal
    } catch (err) {
      console.error('[Storage Read Error]:', err)
      return nilaiAwal
    }
  })

  useEffect(() => {
    try {
      if (nilai === null) localStorage.removeItem(kunci)
      else localStorage.setItem(kunci, JSON.stringify(nilai))
    } catch (err) {
      console.error('[Storage Write Error]:', err)
    }
  }, [kunci, nilai])

  return [nilai, setNilai]
}