import TablePagos from "./components/TablePagos";

export default async function PagosPage(){
    return(
        <div className="container mx-auto">
            <div className="text-center mb-5">Todo los Pagos</div>
            <hr />
            <TablePagos />
        </div>
    )
}