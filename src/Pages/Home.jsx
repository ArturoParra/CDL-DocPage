import React from "react";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-hero-bg bg-fixed h-screen bg-cover bg-center place-content-center grid" >
        <div className="absolute h-screen w-full bg-slate-500/20 place-content-center grid">
        <div className="bg-clip-text text-8xl text-center font-black text-transparent bg-gradient-to-r from-sky-800 via-sky-950 to-sky-800">Documentación de Club de Leones</div>
        <h1 className="text-white text-6xl text-center font-semibold p-5">Integrantes del Equipo</h1>
        <h1 className="text-white text-4xl text-center font-light p-3">Arroyo Mendoza Jesús David</h1>
        <h1 className="text-white text-4xl text-center font-light p-3">Parra Rivas Arturo Gabriel</h1>
        <h1 className="text-white text-4xl text-center font-light p-3">Patiño Patiño Cristhian</h1>
        </div>
      </div>
    </>
  );
};
