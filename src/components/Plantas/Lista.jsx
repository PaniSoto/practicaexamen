import Modal from "@/components/Modal";
// import { obtenerAsignaturas, obtenerEstudiantes } from "@/lib/data";
import { obtenerPlantas } from "@/lib/data";
import Link from "next/link";
import PlantaInsertar from "./Insertar";
import PlantaModificar from "./Modificar";
import PlantaEliminar from "./Eliminar";

export default async function Plantas() {
    const plantas = await obtenerPlantas()
    // const estudiantes = await obtenerEstudiantes()
    //console.log(asignaturas);
    return (
        <div>

            <Modal openElement={<p className="inline border-2 border-black">Insertar Plantas</p>}>
            <PlantaInsertar />
            </Modal>
           
            {
                plantas.map(planta =>
                    <div key={planta.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/plantas/${planta.id}`} className="text-2xl block">
                                {planta.nombre}
                            </Link>
                            <p>{planta.via}</p>
                        </div>

                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                       
                        </Modal>
                        <PlantaModificar planta={planta}/>

                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                        <PlantaEliminar planta={planta} />
                        </Modal>

                        <hr />
                    </div>
                )
            }
        </div>
    );
}