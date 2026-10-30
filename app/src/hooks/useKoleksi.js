import { useContext } from 'react'
import { KoleksiContext } from '../context/koleksiContext.js'

export default function useKoleksi() {
  const ctx = useContext(KoleksiContext)
  if (!ctx) throw new Error('useKoleksi harus di dalam <KoleksiProvider>')
  return ctx
}