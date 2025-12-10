export default function Asistencia() {
  return (
    <div
      className="flex justify-center items-center my-8 font-ibm px-4"
      style={{ animation: "slideUp 1s ease-out 1s both" }}
    >
      <div className="bg-gradient-to-br from-purple-600/30 via-pink-500/30 to-indigo-600/30 backdrop-blur-xl p-[3px] rounded-3xl shadow-2xl border border-white/30 hover:scale-105 transition-all duration-500">
        <div className="bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 rounded-3xl p-8 md:p-10 w-full max-w-md text-center">
          {/* Título con gradiente */}
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent mb-4">
            Confirmar Asistencia
          </h3>

          {/* Descripción */}
          <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
            Haz clic en el enlace para confirmar tu asistencia al evento 🎉
          </p>

          {/* Botón premium con efecto shimmer */}
          <a
            href="https://tulink.com/invitacion"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-8 py-4 rounded-2xl font-bold text-lg md:text-xl text-white shadow-2xl transition-all duration-500 overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
              boxShadow:
                "0 10px 40px rgba(167, 139, 250, 0.6), 0 0 20px rgba(236, 72, 153, 0.4)",
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
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="text-2xl">✨</span>
              Confirmar Asistencia
              <span className="text-2xl">✨</span>
            </span>

            {/* Efecto hover */}
            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl"></span>
          </a>

          {/* Decoración inferior */}
          <div className="flex justify-center gap-2 mt-6 text-2xl opacity-70">
            <span className="animate-bounce" style={{ animationDelay: "0s" }}>
              🎊
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              🎈
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              🎉
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
