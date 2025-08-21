import React from "react";

export default function Contenido() {
  return (<>
    <div className="grid place-items-center text-center font-bold text-blue-950 mt-16 p-8 rounded-2xl shadow-lg bg-amber-50/50">
      <h1 className="font-edu-cursive text-2xl">Te invito a Festejar mis 15 Años</h1>
      <h1 className="mt-6 text-6xl font-extrabold font-vibes">Mia</h1>
    </div>
    <div className="bg-blue-300/80 flex justify-around items-center p-2 rounded-xl m-12">
    <h3  className="">Viernes <p className="text-3xl font-bold mx-2 my-2">16</p> de Enero</h3>
    <div className="border-l-4 font-bold">
    <p className="ml-2">San Martín 370</p>
    <p className="ml-7">22 a 5 hs</p>
    </div>
    </div>
    </>
  );
}
