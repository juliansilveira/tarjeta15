import { useState, useEffect } from "react"

const Contador = () => {
  const [tiempo, setTiempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  })

  useEffect(() => {
    const fechaLimite = new Date("2026-01-16T00:00:00").getTime()

    const intervalo = setInterval(() => {
      const ahora = new Date().getTime()
      const diferencia = fechaLimite - ahora

      if (diferencia <= 0) {
        clearInterval(intervalo)
        setTiempo({ dias: 0, horas: 0, minutos: 0, segundos: 0 })
        return
      }

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))
      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60))
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000)

      setTiempo({ dias, horas, minutos, segundos })
    }, 1000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className="flex flex-col items-center mt-6 px-4 font-[Poppins]">
      <p className="font-bold text-lg mb-4 text-center bg-blue-900 text-white p-2 rounded-xl">⏳ Tiempo Restante</p>
      <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 w-full max-w-md">
        <div className="flex flex-col items-center p-3 bg-blue-900 text-white rounded-xl shadow-lg">
          <p className="text-2xl font-bold">{tiempo.dias}</p>
          <span className="text-sm">Días</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-blue-900 text-white rounded-xl shadow-lg">
          <p className="text-2xl font-bold">{tiempo.horas}</p>
          <span className="text-sm">Horas</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-blue-900 text-white rounded-xl shadow-lg">
          <p className="text-2xl font-bold">{tiempo.minutos}</p>
          <span className="text-sm">Minutos</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-blue-900 text-white rounded-xl shadow-lg">
          <p className="text-2xl font-bold">{tiempo.segundos}</p>
          <span className="text-sm">Segundos</span>
        </div>
      </div>
    </div>
  )
}

export default Contador
