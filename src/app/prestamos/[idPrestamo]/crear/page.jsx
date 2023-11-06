import FormPagos from "./FormPago";

export default function CrearPagoPorPrestao({ params }) {
  return (
    <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <p className="my-2 text-center text-lg font-bold"> Creando Nuevo Pago </p>
      <hr />
      <FormPagos params={params} />
    </div>
  );
}
