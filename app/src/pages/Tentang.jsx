import mahasiswa from '../../mahasiswa.json'

const REPO = 'https://github.com/delapuspitasarii/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section>
      <h1>Tentang Pengembang</h1>
      <dl>
        <dt><h3>Nama :</h3></dt>
        <dd>{nama}</dd>
        <dt><h3>NIM :</h3></dt>
        <dd>{nim}</dd>
        <dt><h3>Kelas :</h3></dt>
        <dd>{kelas}</dd>
        <dt><h3>Tema :</h3></dt>
        <dd>{tema}</dd>
      </dl>
      <p>
       <h3>Kode Sumber :</h3><a href={REPO} target="_blank" rel="noreferrer">{REPO}</a>
      </p>
    </section>
  )
}