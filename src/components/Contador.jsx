import { useState, useEffect } from "react";

const Contador = () => {
  const [tiempo, setTiempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const fechaLimite = new Date("2026-01-16T00:00:00").getTime();

    const intervalo = setInterval(() => {
      const ahora = new Date().getTime();
      const diferencia = fechaLimite - ahora;

      if (diferencia <= 0) {
        clearInterval(intervalo);
        setTiempo({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
        return;
      }

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      setTiempo({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div
      className="flex flex-col items-center mt-8 mb-6 px-4 font-edu-hand"
      style={{ animation: "slideUp 1s ease-out 0.6s both" }}
    >
      {/* Título del contador */}
      <p className="font-bold text-2xl md:text-3xl mb-6 text-center bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 text-transparent bg-clip-text p-4 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl">
        ⏳ Tiempo Restante ⏳
      </p>

      {/* Grid de tarjetas de tiempo */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
        {/* Tarjeta de Días */}
        <div
          className="flex flex-col items-center p-6 md:p-8 bg-gradient-to-br from-purple-600/80 to-indigo-600/80 backdrop-blur-xl text-white rounded-2xl shadow-2xl border-2 border-white/30 hover:scale-110 hover:-rotate-2 transition-all duration-500 ease-out"
          style={{
            boxShadow: "0 10px 40px rgba(139, 92, 246, 0.6)",
            animation: "fadeIn 0.8s ease-out 0.8s both",
          }}
        >
          <p className="text-5xl md:text-6xl font-bold mb-2 drop-shadow-lg">
            {tiempo.dias}
          </p>
          <span className="text-sm md:text-base font-semibold uppercase tracking-wider">
            Días
          </span>
        </div>

        {/* Tarjeta de Horas */}
        <div
          className="flex flex-col items-center p-6 md:p-8 bg-gradient-to-br from-pink-600/80 to-rose-600/80 backdrop-blur-xl text-white rounded-2xl shadow-2xl border-2 border-white/30 hover:scale-110 hover:rotate-2 transition-all duration-500 ease-out"
          style={{
            boxShadow: "0 10px 40px rgba(236, 72, 153, 0.6)",
            animation: "fadeIn 0.8s ease-out 1s both",
          }}
        >
          <p className="text-5xl md:text-6xl font-bold mb-2 drop-shadow-lg">
            {tiempo.horas}
          </p>
          <span className="text-sm md:text-base font-semibold uppercase tracking-wider">
            Horas
          </span>
        </div>

        {/* Tarjeta de Minutos */}
        <div
          className="flex flex-col items-center p-6 md:p-8 bg-gradient-to-br from-indigo-600/80 to-blue-600/80 backdrop-blur-xl text-white rounded-2xl shadow-2xl border-2 border-white/30 hover:scale-110 hover:-rotate-2 transition-all duration-500 ease-out"
          style={{
            boxShadow: "0 10px 40px rgba(99, 102, 241, 0.6)",
            animation: "fadeIn 0.8s ease-out 1.2s both",
          }}
        >
          <p className="text-5xl md:text-6xl font-bold mb-2 drop-shadow-lg">
            {tiempo.minutos}
          </p>
          <span className="text-sm md:text-base font-semibold uppercase tracking-wider">
            Minutos
          </span>
        </div>

        {/* Tarjeta de Segundos con animación de pulso */}
        <div
          className="flex flex-col items-center p-6 md:p-8 bg-gradient-to-br from-fuchsia-600/80 to-purple-600/80 backdrop-blur-xl text-white rounded-2xl shadow-2xl border-2 border-white/30 hover:scale-110 hover:rotate-2 transition-all duration-500 ease-out"
          style={{
            boxShadow: "0 10px 40px rgba(192, 38, 211, 0.6)",
            animation:
              "fadeIn 0.8s ease-out 1.4s both, pulse 1s ease-in-out infinite",
          }}
        >
          <p className="text-5xl md:text-6xl font-bold mb-2 drop-shadow-lg">
            {tiempo.segundos}
          </p>
          <span className="text-sm md:text-base font-semibold uppercase tracking-wider">
            Segundos
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contador;
