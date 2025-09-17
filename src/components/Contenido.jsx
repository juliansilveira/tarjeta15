import React from "react";

export default function Contenido() {
  return (<>
    <div className="grid place-items-center text-center text-[#E3E6F3] mt-16 mx-1 p-8 rounded-2xl shadow-lg bg-[#000D42]/65 border">
      <h1 className="font-chicle text-3xl underline">Te invito a Festejar mis 15 Años</h1>
      <h1 className="mt-6 text-6xl font-extrabold font-vibes">Mia</h1>
    </div>
    <div className="bg-[#18017b]/60 text-white flex justify-around items-center p-2 rounded-xl m-12 border-3 border-white font-dancing-script text-lg">
    <h3  className="">Viernes <p className="text-3xl font-bold mx-2">16</p> de Enero</h3>
    <div className="border-3 pt-20 rounded-3xl"></div>
    <div className="flex flex-col justify-center items-center">
    <p className="text-xl">San Martín 370</p>
    <p className="text-xl">22 a 5 hs</p>
    </div>
    </div>
    </>
  );
}
