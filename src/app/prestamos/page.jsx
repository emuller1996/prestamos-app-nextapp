import Link from "next/link";
import ListPrestamos from "./components/ListPrestamos";

export default function PrestamosPage() {
  return (
    <div className="container mx-auto">
      <div>Prestamos Pagina</div>
      <Link href={"/prestamos/nuevo"}>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Crear Prestamo
        </button>
      </Link>
      <div>
        <ListPrestamos />
      </div>

    </div>
  );
}
