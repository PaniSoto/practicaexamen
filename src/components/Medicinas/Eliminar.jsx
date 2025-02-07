import { eliminarMedicina } from "@/lib/actions";

function MedicinaEliminar({ medicina }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos</h1>
            <p>Medicina: {medicina.nombre}</p>
            <p>Via de administracion: {medicina.via}</p>

            <form action={eliminarMedicina}>
                <input type="hidden" name="id" defaultValue={medicina.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}

export default MedicinaEliminar;