import React from "react";

export default function Contenido() {
  return (
    <>
      {/* Tarjeta principal con animación de entrada */}
      <div
        className="grid place-items-center text-center text-white mt-16 mx-4 p-10 rounded-3xl shadow-2xl backdrop-blur-xl bg-gradient-to-br from-purple-600/40 via-pink-500/30 to-indigo-600/40 border border-white/30 hover:scale-[1.02] transition-all duration-500 ease-out"
        style={{
          animation: "fadeIn 1s ease-out",
          boxShadow:
            "0 20px 60px rgba(167, 139, 250, 0.4), 0 0 40px rgba(236, 72, 153, 0.3)",
        }}
      >
        {/* Título con efecto de brillo */}
        <h1 className="font-chicle text-4xl md:text-5xl mb-2 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-lg">
          ✨ Te invito a Festejar mis 15 Años ✨
        </h1>

        {/* Nombre con animación flotante */}
        <h1
          className="mt-8 text-7xl md:text-8xl font-extrabold font-vibes bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl pt-2"
          style={{
            animation: "float 3s ease-in-out infinite",
            filter: "drop-shadow(0 0 30px rgba(236, 72, 153, 0.6))",
          }}
        >
          Mia
        </h1>

        {/* Decoración con estrellas */}
        <div className="flex gap-3 mt-6 text-3xl opacity-80">
          <span className="animate-pulse">💫</span>
          <span className="animate-pulse" style={{ animationDelay: "0.3s" }}>
            ✨
          </span>
          <span className="animate-pulse" style={{ animationDelay: "0.6s" }}>
            🌟
          </span>
        </div>
      </div>

      {/* Tarjeta de información con glassmorphism */}
      <div
        className="bg-gradient-to-br from-indigo-900/70 via-purple-800/60 to-pink-900/70 backdrop-blur-lg text-white flex flex-col md:flex-row justify-around items-center gap-6 p-6 rounded-2xl mx-4 my-12 border-2 border-white/40 shadow-2xl hover:shadow-pink-500/50 transition-all duration-500"
        style={{
          animation: "slideUp 1s ease-out 0.3s both",
          boxShadow: "0 15px 50px rgba(139, 92, 246, 0.5)",
        }}
      >
        {/* Fecha */}
        <div className="flex items-center gap-3 font-dancing-script text-xl md:text-2xl">
          <span className="text-2xl">📅</span>
          <h3 className="flex items-center gap-2">
            Viernes
            <p className="text-5xl md:text-6xl font-bold mx-2 bg-gradient-to-br from-yellow-200 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
              16
            </p>
            de Enero
          </h3>
        </div>

        {/* Divisor decorativo */}
        <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
        <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        {/* Ubicación y horario */}
        <div className="flex flex-col justify-center items-center gap-2 font-dancing-script">
          <div className="flex items-center gap-2 text-xl md:text-2xl">
            <span className="text-2xl">📍</span>
            <p className="font-semibold">San Martín 370</p>
          </div>
          <div className="flex items-center gap-2 text-xl md:text-2xl">
            <span className="text-2xl">🕐</span>
            <p className="font-semibold">22 a 5 hs</p>
          </div>
        </div>
      </div>
    </>
  );
}
