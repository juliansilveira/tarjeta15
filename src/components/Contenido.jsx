import React from "react";

export default function Contenido() {
  return (
    <>
      {/* Tarjeta principal con animación de entrada */}
      <div
        className="grid place-items-center text-center text-white mt-16 mx-4 p-10 rounded-3xl shadow-2xl backdrop-blur-xl bg-gradient-to-br from-blue-600/40 via-cyan-500/30 to-blue-700/40 border border-white/30 hover:scale-[1.02] transition-all duration-500 ease-out"
        style={{
          animation: "fadeIn 1s ease-out",
          boxShadow:
            "0 20px 60px rgba(59, 130, 246, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)",
        }}
      >
        {/* Título con efecto de brillo */}
        <h1 className="font-allura text-5xl md:text-6xl mb-4 bg-gradient-to-r from-cyan-200 via-blue-200 to-sky-200 bg-clip-text text-transparent drop-shadow-lg">
          Te invito a festejar mis 15 años
        </h1>

        {/* Nombre con animación flotante */}
        <h1
          className="mt-8 text-8xl md:text-9xl font-allura bg-gradient-to-r from-cyan-300 via-blue-200 to-sky-300 bg-clip-text text-transparent drop-shadow-2xl pt-2"
          style={{
            animation: "float 3s ease-in-out infinite",
            filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))",
          }}
        >
          Mia
        </h1>

        {/* Línea decorativa */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mt-8"></div>
      </div>

      {/* Tarjeta de información con glassmorphism */}
      <div
        className="bg-gradient-to-br from-blue-900/70 via-cyan-800/60 to-blue-900/70 backdrop-blur-lg text-white flex flex-col md:flex-row justify-around items-center gap-6 p-6 rounded-2xl mx-4 my-12 border-2 border-white/40 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500"
        style={{
          animation: "slideUp 1s ease-out 0.3s both",
          boxShadow: "0 15px 50px rgba(6, 182, 212, 0.5)",
        }}
      >
        {/* Fecha */}
        <div className="flex flex-col items-center gap-2 font-montserrat">
          <p className="text-base uppercase tracking-widest text-cyan-200">
            Fecha
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl md:text-2xl">Viernes</span>
            <p className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-cyan-200 to-blue-300 bg-clip-text text-transparent drop-shadow-lg font-playfair">
              16
            </p>
            <span className="text-xl md:text-2xl">de Enero</span>
          </div>
        </div>

        {/* Divisor decorativo */}
        <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
        <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        {/* Ubicación y horario */}
        <div className="flex flex-col justify-center items-center gap-3 font-lato">
          <div className="flex flex-col items-center">
            <p className="text-sm uppercase tracking-widest text-cyan-200 mb-1">
              Ubicación
            </p>
            <p className="text-2xl md:text-3xl font-light">San Martín 370</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm uppercase tracking-widest text-cyan-200 mb-1">
              Horario
            </p>
            <p className="text-2xl md:text-3xl font-light">22:00 a 05:00 hs</p>
          </div>
        </div>
      </div>
    </>
  );
}
