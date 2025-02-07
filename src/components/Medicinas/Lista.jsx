
// import { obtenerAsignaturas, obtenerEstudiantes } from "@/lib/data";
import { obtenerMedicinas } from "@/lib/data";
// import AsignaturaEliminar from "./Eliminar";
// import AsignaturaModificar from "./Modificar";
import Link from "next/link";
import MedicinaInsertar from "./Insertar";
import MedicinaModificar from "./Modificar";
import MedicinaEliminar from "./Eliminar";

export default async function Medicinas() {
    const medicinas = await obtenerMedicinas()
    // const estudiantes = await obtenerEstudiantes()
    //console.log(asignaturas);
    return (
        <div>

                <MedicinaInsertar />
           
            {
                medicinas.map(medicina =>
                    <div key={medicina.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/medicinas/${medicina.id}`} className="text-2xl block">
                                {medicina.nombre}
                            </Link>
                            <p>{medicina.via}</p>
                        </div>

                            <MedicinaModificar medicina={medicina}/>
                        
                            <MedicinaEliminar medicina={medicina} />
                       
                        <hr />
                    </div>
                )
            }
        </div>
    );
}