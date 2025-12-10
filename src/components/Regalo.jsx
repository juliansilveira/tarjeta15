export default function Regalo() {
  return (
    <div
      className="flex justify-center items-center my-8 px-4 font-ibm"
      style={{ animation: "slideUp 1s ease-out 1.2s both" }}
    >
      <div className="bg-gradient-to-br from-purple-600/30 via-pink-500/30 to-indigo-600/30 backdrop-blur-xl p-[3px] rounded-3xl shadow-2xl border border-white/30 hover:scale-105 transition-all duration-500 w-full max-w-2xl">
        <div className="bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 rounded-3xl p-8 md:p-10 text-center">
          {/* Icono decorativo */}
          <div className="text-6xl mb-4">🎁</div>

          {/* Título con gradiente */}
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent mb-6">
            Regalo
          </h3>

          {/* Mensaje principal */}
          <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
            ¡Lo más importante es que me acompañes en esta gran noche! 💕
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            Pero si quisieras hacerme un regalo o no sabes que regalarme te dejo
            mi alias:
          </p>

          {/* Información de pago con estilo destacado */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 space-y-4">
            {/* Nombre */}
            <div className="space-y-1">
              <p className="text-pink-300 font-bold text-xl md:text-2xl">
                Mía Sanchez Silveira
              </p>
            </div>

            {/* Alias destacado */}
            <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl p-4 border border-purple-400/30">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                Alias
              </p>
              <p className="text-white font-bold text-2xl md:text-3xl tracking-wide">
                sanchezmia
              </p>
            </div>

            {/* CVU */}
            <div className="space-y-1">
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                CVU
              </p>
              <p className="text-white font-mono text-sm md:text-base break-all">
                0000000000000000000
              </p>
            </div>

            {/* CUIT/CUIL */}
            <div className="space-y-1">
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                CUIT/CUIL
              </p>
              <p className="text-white font-mono text-sm md:text-base">
                000000000000
              </p>
            </div>

            {/* Logo Mercado Pago */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-blue-300 font-bold text-lg flex items-center justify-center gap-2">
                <span className="text-2xl">💳</span>
                Mercado Pago
              </p>
            </div>
          </div>

          {/* Decoración inferior */}
          <div className="flex justify-center gap-2 mt-6 text-2xl opacity-70">
            <span className="animate-bounce" style={{ animationDelay: "0s" }}>
              💝
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              ✨
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              💝
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
