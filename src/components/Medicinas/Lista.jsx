import Modal from "@/components/Modal";
// import { obtenerAsignaturas, obtenerEstudiantes } from "@/lib/data";
import { obtenerMedicinas } from "@/lib/data";
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

            <Modal openElement={<p className="inline border-2 border-black">Insertar Medicinas</p>}>
            <MedicinaInsertar />
            </Modal>
           
            {
                medicinas.map(medicina =>
                    <div key={medicina.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/medicinas/${medicina.id}`} className="text-2xl block">
                                {medicina.nombre}
                            </Link>
                            <p>{medicina.via}</p>
                        </div>

                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                        <MedicinaModificar medicina={medicina} />
                       </Modal>
                        
                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                        <MedicinaEliminar medicina={medicina} />
                       </Modal>
                    
                        <hr />
                    </div>
                )
            }
        </div>
    );
}