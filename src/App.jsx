import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import Panel from './components/Panel'
import KartuMenu from './components/KartuMenu'

function App() {
  const [count, setCount] = useState(0)
  const harga = 1000;
  const jam = 9;

  return (
    <>
      <h1 className='judul'>Kantin Rani</h1>
      <p className='deskripsi'>Selamat {jam < 12 ? "pagi" : "siang"}</p>
      <p> Saldo awal kartu kantin : {harga * 1000}</p>
      <button>Bayar</button>

      <panel judul = "Menu Hari Ini">
        <KartuMenu nama= "Nasi Ayam Geprek" harga={13700}></KartuMenu>

        <KartuMenu nama= "Es Teh Lemon" kategori="Minuman" harga={6000}></KartuMenu>

        <KartuMenu nama= "Mie Goreng Telur"  harga={12000}></KartuMenu>
      </panel>
    </>

  );
  
}

export default App
