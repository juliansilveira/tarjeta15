export default function Header() {


  return (
    <div className=
'w-full max-w-screen mx-auto px-5 flex align-center justify-around list-none bg-blue-900 font-bold text-white font-[Poppins] p-2'>
      <a href="#contador"><li className='cursor-pointer hover:underline'>Tiempo</li></a>
      <a href="#lugar"><li className='cursor-pointer hover:underline'>Lugar</li></a>
      <a href="#asistencia"><li className='cursor-pointer hover:underline'>Asistencia</li></a>
    </div>
  )
}

