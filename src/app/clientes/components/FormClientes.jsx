"use client";
import Spinner from "@/components/Spinner";
import {
  postCreateClientesService,
  putUpdateClientesService,
} from "@/services/clientes.services";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function FormClientes({ cliente }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    console.log(cliente);
    if (cliente) {
      try {
        const t = await putUpdateClientesService(data);
        console.log(t.data);
        reset();
        toast.success(t.data.message);
        router.push("/clientes");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const t = await postCreateClientesService(data);
        console.log(t.data);
        reset();
        toast.success("Cliente Registrado");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label
          htmlFor="nombre"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombre
        </label>
        <input
          {...register("nombre", { required: true })}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Jose Canceso"
          defaultValue={cliente && cliente.nombre}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="numero_telefonico"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Telefono
        </label>
        <input
          {...register("numero_telefonico", { required: true })}
          type="tel"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="3184561286"
          defaultValue={cliente && cliente.numero_telefonico}
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
