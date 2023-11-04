
import FormPrestamos from "../components/FormPrestamos";

export default function NuevoPrestamoPage() {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="">
          <FormPrestamos />
        </div>
      </div>
    </div>
  );
}
