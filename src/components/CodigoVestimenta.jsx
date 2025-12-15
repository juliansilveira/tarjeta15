export default function CodigoVestimenta() {
  return (
    <div
      className="flex justify-center items-center my-8 px-4 font-lato"
      style={{ animation: "slideUp 1s ease-out 0.8s both" }}
    >
      <div className="bg-gradient-to-br from-blue-700/30 via-blue-500/30 to-indigo-700/30 backdrop-blur-xl p-[3px] rounded-3xl shadow-2xl border border-blue-200/30 hover:scale-105 transition-all duration-500 w-full max-w-md">
        <div className="bg-gradient-to-br from-slate-950/95 via-blue-950/95 to-slate-950/95 rounded-3xl p-8 md:p-10 text-center">
          {/* Título con gradiente */}
          <h3 className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-blue-100 via-white to-blue-100 bg-clip-text text-transparent mb-4">
            Dress Code
          </h3>

          {/* Descripción */}
          <p className="text-white text-2xl md:text-3xl font-cormorant font-light tracking-wide">
            Elegante
          </p>

          {/* Línea decorativa */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent mt-6 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
