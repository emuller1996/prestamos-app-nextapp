"use client";

import Spinner from "@/components/Spinner";
import { ViewDollar } from "@/libs/utils";
import { getAllPagosService } from "@/services/pagos.services";
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
  {
    name: "Cliente",
    selector: (row) => row.prestamo.cliente.nombre,
    sortable: true,
  },
];

export default function TablePagos() {
  const [AllPagos, setAllPagos] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    getAllPagos();
  }, []);

  const getAllPagos = async () => {
    try {
      setisLoading(true);
      const t = await getAllPagosService();
      console.log(t.data);
      setAllPagos(t.data);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="relative overflow-x-auto">
      {isLoading && <Spinner />}
      {AllPagos && (
        <DataTable
          customStyles={{
            cells: { style: { fontSize: "1.15em" } },
            pagination: { style: { fontSize: "1em" } },
            headCells: { style: { fontSize: "1.15em", fontWeight: "bolder" } },
          }}
          noDataComponent="No hay Pagos Registrados"
          responsive
          pagination
          className="font-bold"
          columns={columns}
          data={AllPagos && AllPagos}
        />
      )}
    </div>
  );
}
