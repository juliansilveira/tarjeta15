export default function CodigoVestimenta() {
  return (
    <div
      className="flex justify-center items-center my-8 px-4 font-ibm"
      style={{ animation: "slideUp 1s ease-out 0.8s both" }}
    >
      <div className="bg-gradient-to-br from-purple-600/30 via-pink-500/30 to-indigo-600/30 backdrop-blur-xl p-[3px] rounded-3xl shadow-2xl border border-white/30 hover:scale-105 transition-all duration-500 w-full max-w-md">
        <div className="bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 rounded-3xl p-8 md:p-10 text-center">
          {/* Icono decorativo */}
          <div className="text-6xl mb-4 animate-pulse">👗🕴</div>

          {/* Título con gradiente */}
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent mb-3">
            Dress Code
          </h3>

          {/* Descripción */}
          <p className="text-white text-xl md:text-2xl font-semibold tracking-wide">
            Elegante
          </p>

          {/* Decoración inferior */}
          <div className="flex justify-center gap-3 mt-6 text-3xl opacity-70">
            <span className="animate-pulse" style={{ animationDelay: "0s" }}>
              ✨
            </span>
            <span className="animate-pulse" style={{ animationDelay: "0.3s" }}>
              💎
            </span>
            <span className="animate-pulse" style={{ animationDelay: "0.6s" }}>
              ✨
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
