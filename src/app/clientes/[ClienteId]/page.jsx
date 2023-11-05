"use client";
import axios from "axios";
import FormClientes from "../components/FormClientes";
import { useEffect, useState } from "react";
import { getClientesByIdService } from "@/services/clientes.services";

export default function Prestamos(props) {
  console.log(props.params.ClienteId);

  const [Cliente, setCliente] = useState(null);

  useEffect(() => {
    getClientById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getClientById = async () => {
    try {
      const r = await getClientesByIdService(props.params.ClienteId);
      console.log(r);
      setCliente(r.data.clientes);
    } catch (error) {}
  };

  return (
    <div>
      <h2>cliente ID {props.params.ClienteId}</h2>
      {Cliente && <FormClientes cliente={Cliente} />}
    </div>
  );
}
