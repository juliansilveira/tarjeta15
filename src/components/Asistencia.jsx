export default function Asistencia() {
  return (
    <div className="flex justify-center items-center my-5 font-ibm">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-lg">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-80 text-center">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
            Confirmar Asistencia
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Haz clic en el enlace para confirmar tu asistencia al evento 🎉
          </p>
          <a
            href="https://tulink.com/invitacion"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 inline-block px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition-all duration-300"
          >
            Confirmar Asistencia
          </a>
        </div>
      </div>
    </div>
  )
}
