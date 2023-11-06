"use client";
import { ViewDollar } from "@/libs/utils";
import { getAllPrestamosByIdService } from "@/services/prestamos.services";
import { useEffect, useState } from "react";

export default function PrestamosDetallePage({ params }) {
  const [PrestamoDetall, setPrestamoDetall] = useState(null);

  useEffect(() => {
    getPrestamo();
  }, []);
  const getPrestamo = async (id) => {
    try {
      console.log(params);

      const r = await getAllPrestamosByIdService(params.idPrestamo);
      console.log(r.data);
      setPrestamoDetall(r.data.prestamo);
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  };
  return (
    <div>
      <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Detalle Prestamo {params.idPrestamo}
        </h5>
        <div
          className={`flex  flex-col justify-start items-start gap-3  ${
            !PrestamoDetall && "animate-pulse"
          }`}
        >
          {PrestamoDetall ? (
            <p className=" text-base text-gray-500 sm:text-lg dark:text-gray-400">
              {`Cliente : ${PrestamoDetall?.cliente?.nombre}`}
            </p>
          ) : (
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-80"></div>
          )}
          {PrestamoDetall ? (
            <p className=" text-base text-gray-500 sm:text-lg dark:text-gray-400">
              {`Dedua Actual : ${ViewDollar(PrestamoDetall?.deuda_actual)}`}
            </p>
          ) : (
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-80"></div>
          )}
          {PrestamoDetall ? (
            <p className=" text-base text-gray-500 sm:text-lg dark:text-gray-400">
              {`Valor Prestamo : ${ViewDollar(PrestamoDetall?.valor_prestamo)}`}
            </p>
          ) : (
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-80"></div>
          )}
          {PrestamoDetall ? (
            <p className=" text-base text-gray-500 sm:text-lg dark:text-gray-400">
              {`Valor Interes : ${ViewDollar(PrestamoDetall?.pago_interes)}`}
            </p>
          ) : (
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-80"></div>
          )}
          {PrestamoDetall ? (
            <p className=" text-base text-gray-500 sm:text-lg dark:text-gray-400">
              {`Fecha de Pago : ${PrestamoDetall?.fecha_pago.substring(0,10)}`}
            </p>
          ) : (
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-80"></div>
          )}
        </div>
      </div>
    </div>
  );
}
