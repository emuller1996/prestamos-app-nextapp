"use client";
import Spinner from "@/components/Spinner";
import { ViewDollar } from "@/libs/utils";
import { getAllPrestamosByIdService } from "@/services/prestamos.services";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Fecha Pago",
    selector: (row) => row.fecha_pago.substring(0, 10),
    sortable: true,
  },
  {
    name: "Valor del Pago",
    selector: (row) => row.valor_pagado,
    format: (row) => ViewDollar(row.valor_pagado),
    sortable: true,
  },
];

export default function PrestamosDetallePage({ params }) {
  const [PrestamoDetall, setPrestamoDetall] = useState(null);

  useEffect(() => {
    getPrestamo();
  }, []);
  const getPrestamo = async () => {
    try {
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
              {`Fecha de Pago : ${PrestamoDetall?.fecha_pago.substring(0, 10)}`}
            </p>
          ) : (
            <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-80"></div>
          )}
        </div>
      </div>

      <div className="mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-center font-semibold text-lg">Pagos</h5>
        <Link href={`${params.idPrestamo}/crear`}>
          <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Crear Pago
          </button>
        </Link>

        {!PrestamoDetall ? (
          <Spinner />
        ) : (
          <DataTable
            customStyles={{
              cells: { style: { fontSize: "1.15em" } },
              pagination: { style: { fontSize: "1em" } },
              headCells: {
                style: { fontSize: "1.15em", fontWeight: "bolder" },
              },
            }}
            responsive
            pagination
            noDataComponent="No hay Pagos Registrados"
            /* paginationComponentOptions={paginationComponentOptions} */
            className="font-bold"
            columns={columns}
            data={PrestamoDetall.Pagos}
          />
        )}
      </div>
    </div>
  );
}
