"use client";
import Spinner from "@/components/Spinner";
import { ViewDollar } from "@/libs/utils";
import { getAllPrestamosService } from "@/services/prestamos.services";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListPrestamos() {
  const [TodosPrestamos, setTodosPrestamos] = useState(null);

  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    getAllPrestamos();
  }, []);

  const getAllPrestamos = async () => {
    setisLoading(true);
    try {
      const r = await getAllPrestamosService();
      console.log(r.data);
      setTodosPrestamos(r.data);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);

      console.log(error);
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <div className="grid md:grid-cols-2 gap-4">
        {TodosPrestamos &&
          TodosPrestamos.map((p) => (
            <div
              className="card cursor-pointer hover:bg-blue-200 hover:border-blue-400 text-blue-950 border border-blue-300 shadow-sm bg-blue-100 p-3 rounded-xl"
              key={p.id}
            >
              <div className="flex md:justify-around  gap-2 flex-wrap">
                <span className="w-50 font-medium">{`Cliente: ${p.cliente.nombre}`}</span>
                <span className="w-50">{`Valor del Prestamo : ${ViewDollar(
                  p.valor_prestamo
                )}`}</span>
              </div>
              <div className="flex md:justify-around  gap-2 flex-wrap ">
                <span className="col-span-6">{`Pago de Interes: ${ViewDollar(
                  p.pago_interes
                )}`}</span>
                <span className="col-span-6">{`Fecha de Pago ${p.fecha_pago.substring(
                  0,
                  10
                )}`}</span>
              </div>
              <div className="mx-auto text-center mt-2">
                <Link href={"/prestamos/nuevo"}>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Detalles
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
