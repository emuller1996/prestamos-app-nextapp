"use client";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
export default function FormPrestamos() {
  const [AllCliente, setAllCliente] = useState(undefined);
  const [isLoadings, setisLoadings] = useState(false);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    setisLoadings(true);
    try {
      const r = await axios.get("http://localhost:3000/api/clientes");
      console.log(r.data);
      const te = r.data.clientes.map((c) => {
        return {
          label: c.nombre,
          value: c.id,
        };
      });
      setAllCliente(te);

      setisLoadings(false);
    } catch (error) {
      setisLoadings(false);

      console.log(error);
    }
  };

  const getAllClientes = async () => {
    try {
    } catch (error) {}
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isLoading },
  } = useForm();
  const onSubmit = async (data) => {
    data.clienteId = data.clienteId.value;
    console.log(data);
    /* if (cliente) {
      try {
        const t = await axios.put(
          `http://localhost:3000/api/prestamos/${cliente.id}`,
          data
        );
        console.log(t.data);
        reset();
        toast.success(t.data.message);
        router.push("/clientes")
      } catch (error) {
        console.log(error);
      }
    } else { */
    /* try {
      const t = await axios.post("http://localhost:3000/api/prestamos", data);
      console.log(t.data);
      reset();
      toast.success("Cliente Registrado");
    } catch (error) {
      console.log(error);
    } */
    /*  } */
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label
          htmlFor="Cliente"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Selecione Cliente
        </label>
        {AllCliente && (
          <Controller
            control={control}
            register
            name="clienteId"
            rules={{ required: "Away Team is required" }}
            render={({ field: { onChange, name, ref } }) => (
              <Select
                classNames={{
                  control: () =>
                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                }}
                inputRef={ref}
                options={AllCliente && AllCliente}
                onChange={onChange}
                name={name}
              />
            )}
          />
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="nombre"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Valor del Prestamo
        </label>
        <Controller
          control={control}
          register
          name="valor_prestamo"
          rules={{ required: "valor_prestamo" }}
          render={({ field: { onChange, name, ref } }) => (
            <CurrencyInput
              ref={ref}
              intlConfig={{ locale: "en-US", currency: "USD" }}
              name={name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="50,000"
              onValueChange={onChange}
            />
          )}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="nombre"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Fecha Pago
        </label>
        <input
          {...register("fecha_pago", { required: true })}
          type="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      {isLoading && <Spinner />}

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
