import './App.css'
import Header from './components/Header.jsx'
import Asistencia from './components/Asistencia.jsx'
import Footer from './components/Footer.jsx'
import Contador from './components/Contador.jsx'
import Contenido from './components/Contenido.jsx'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Contenido principal (ocupa espacio disponible) */}
<main className="flex-grow">
  <section id="contador">
    <Contenido/>
    <Contador />
  </section>

  <section id="asistencia">
    <Asistencia />
  </section>
</main>

<section id="footer">
  <Footer />
</section>
    </div>
  )
}

export default App
