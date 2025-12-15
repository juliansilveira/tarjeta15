export default function Regalo() {
  return (
    <div
      className="flex justify-center items-center my-8 px-4 font-lato"
      style={{ animation: "slideUp 1s ease-out 1.2s both" }}
    >
      <div className="bg-gradient-to-br from-blue-600/30 via-cyan-500/30 to-sky-600/30 backdrop-blur-xl p-[3px] rounded-3xl shadow-2xl border border-white/30 hover:scale-105 transition-all duration-500 w-full max-w-2xl">
        <div className="bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-slate-900/95 rounded-3xl p-8 md:p-10 text-center">
          {/* Título con gradiente */}
          <h3 className="text-2xl md:text-3xl font-playfair font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-sky-300 bg-clip-text text-transparent mb-6">
            Regalo
          </h3>

          {/* Mensaje principal */}
          <p className="text-white text-lg md:text-xl leading-relaxed mb-6 font-light">
            Lo más importante es que me acompañes en esta gran noche
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 font-light">
            Si deseas hacerme un regalo, te dejo mi información de pago:
          </p>

          {/* Información de pago con estilo destacado */}
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 space-y-4">
            {/* Nombre */}
            <div className="space-y-1">
              <p className="text-cyan-300 font-montserrat font-semibold text-xl md:text-2xl">
                Mía Sanchez Silveira
              </p>
            </div>

            {/* Alias destacado */}
            <div className="bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-xl p-4 border border-blue-400/30">
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-1 font-montserrat">
                Alias
              </p>
              <p className="text-white font-montserrat font-bold text-2xl md:text-3xl tracking-wide">
                sanchezmia
              </p>
            </div>

            {/* CVU */}
            <div className="space-y-1">
              <p className="text-gray-400 text-xs uppercase tracking-widest font-montserrat">
                CVU
              </p>
              <p className="text-white font-mono text-sm md:text-base break-all">
                0000003100007496181132
              </p>
            </div>

            {/* CUIT/CUIL */}
            <div className="space-y-1">
              <p className="text-gray-400 text-xs uppercase tracking-widest font-montserrat">
                CUIT/CUIL
              </p>
              <p className="text-white font-mono text-sm md:text-base">
                27502481369
              </p>
            </div>

            {/* Logo Mercado Pago */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-blue-300 font-montserrat font-semibold text-lg">
                Mercado Pago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
