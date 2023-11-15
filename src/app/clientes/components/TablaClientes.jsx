"use client";
import Spinner from "@/components/Spinner";
import { ViewDollar } from "@/libs/utils";
import { getAllClientesService } from "@/services/clientes.services";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Nombre",
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: "Numero Tel",
    selector: (row) => row.numero_telefonico,
  },
  {
    name: "Estado",
    selector: (row) => row.estado,
    sortable: true,
  },
  {
    name: "Deuda",
    selector: (row) => row.deuda_actual,
    format: (row) => ViewDollar(row.deuda_actual),
    sortable: true,
  },
  {
    name: "# ",
    cell: (row) => (
      <Link href={`/clientes/${row.id}`}>
        <button className="text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm p-2 text-center mr-2 mb-2">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </Link>
    ),
  },
];

const paginationComponentOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

export default function TableClientes({ data }) {
  const [AllCliente, setAllCliente] = useState(undefined);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    setisLoading(true);
    try {
      const r = await getAllClientesService();
      console.log(r.data);
      setAllCliente(r.data.clientes);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);

      console.log(error);
    }
  };

  return (
    <div className="relative overflow-x-auto">
      {/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Numero Telefonico
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
            <th scope="col" className="px-6 py-3">
              Deuda
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((c) => (
            <tr
              key={c.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {c.nombre}
              </th>
              <td className="px-6 py-4">{c.numero_telefonico}</td>
              <td className="px-6 py-4">{c.estado}</td>
              <td className="px-6 py-4">${c.deuda_actual}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {isLoading && <Spinner />}
      {AllCliente && (
        <DataTable
          customStyles={{
            cells: { style: { fontSize: "1.15em" } },
            pagination: { style: { fontSize: "1em" } },
            headCells: { style: { fontSize: "1.15em", fontWeight: "bolder" } },
          }}
          responsive
          pagination
          paginationComponentOptions={paginationComponentOptions}
          className="font-bold"
          columns={columns}
          data={AllCliente && AllCliente}
        />
      )}
    </div>
  );
}
