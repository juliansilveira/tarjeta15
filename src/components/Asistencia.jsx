export default function Asistencia() {
  return (
    <div
      className="flex justify-center items-center my-8 font-lato px-4"
      style={{ animation: "slideUp 1s ease-out 1s both" }}
    >
      <div className="bg-gradient-to-br from-blue-700/30 via-blue-500/30 to-indigo-700/30 backdrop-blur-xl p-[3px] rounded-3xl shadow-2xl border border-blue-200/30 hover:scale-105 transition-all duration-500">
        <div className="bg-gradient-to-br from-slate-950/95 via-blue-950/95 to-slate-950/95 rounded-3xl p-8 md:p-10 w-full max-w-md text-center">
          {/* Título con gradiente */}
          <h3 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-blue-100 via-white to-blue-100 bg-clip-text text-transparent mb-4">
            Confirmar Asistencia
          </h3>

          {/* Descripción */}
          <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed font-light">
            Por favor, confirma tu asistencia al evento
          </p>

          {/* Botón premium con efecto shimmer */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe0UtKq4An4XmOQX2dKjRVFge0DRvjislDiqi7kjhHhF21RFQ/viewform?usp=sharing&ouid=112482795277689222782"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-8 py-4 rounded-2xl font-montserrat font-medium text-xl md:text-2xl text-white shadow-2xl transition-all duration-500 overflow-hidden group uppercase tracking-wide"
            style={{
              background:
                "linear-gradient(135deg, #3b82f6 0%, #0ea5e9 50%, #06b6d4 100%)",
              boxShadow:
                "0 10px 40px rgba(59, 130, 246, 0.6), 0 0 20px rgba(6, 182, 212, 0.4)",
            }}
          >
            {/* Efecto shimmer */}
            <span
              className="absolute inset-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                animation: "shimmer 3s infinite",
              }}
            ></span>

            {/* Texto del botón */}
            <span className="relative z-10">Confirmar</span>

            {/* Efecto hover */}
            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
