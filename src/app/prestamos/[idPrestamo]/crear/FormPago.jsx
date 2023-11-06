"use client";
import Spinner from "@/components/Spinner";
import { postCreatePagoPorPrestamosService } from "@/services/prestamos.services";
import { useRouter } from "next/navigation";
import CurrencyInput from "react-currency-input-field";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function FormPagos({ params }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isLoading },
  } = useForm();
  const onSubmit = async (data) => {
    data.prestamoId = params.idPrestamo;
    data.valor_pagado = parseInt(data.valor_pagado);
    data.prestamoId = parseInt(data.prestamoId);
    data.fecha_pago = new Date(data.fecha_pago).toISOString();
    console.log(data);
    try {
      const r = await postCreatePagoPorPrestamosService(data);
      console.log(r);
      toast.success("Pago Registrado Correctamente.");
      reset();
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label
          htmlFor="nombre"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Valor de Pago
        </label>
        <Controller
          control={control}
          register
          name="valor_pagado"
          rules={{ required: "valor_pagado" }}
          render={({ field: { onChange, name, ref } }) => (
            <CurrencyInput
              ref={ref}
              intlConfig={{ locale: "en-US", currency: "USD" }}
              name={name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="$0"
              onValueChange={onChange}
            />
          )}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="fecha_pago"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Fecha de Pago
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
        Pagar
      </button>
    </form>
  );
}
