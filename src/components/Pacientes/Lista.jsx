// import Modal from "@/components/Modal";
// import { obtenerAsignaturas, obtenerEstudiantes } from "@/lib/data";
import { obtenerPacientes } from "@/lib/data";
// import AsignaturaEliminar from "./Eliminar";
// import AsignaturaModificar from "./Modificar";
// import AsignaturaInsertar from "./Insertar";
import Link from "next/link";

export default async function Pacientes() {
    const pacientes = await obtenerPacientes()
    // const estudiantes = await obtenerEstudiantes()
    //console.log(asignaturas);
    return (
        <div>

            {/* <Modal openElement={<p className="inline border-2 border-black">Insertar asignatura</p>}>
                <AsignaturaInsertar estudiantes={estudiantes} />
            </Modal> */}

            {
                pacientes.map(paciente =>
                    <div key={paciente.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/pacientes/${paciente.id}`} className="text-2xl block">
                                {paciente.nombre}
                            </Link>
                            <p>{paciente.fechaNacimiento.toISOString().split('T')[0]}</p>
                            <p>{paciente.plantaId}</p>
                        </div>

                        {/* <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <AsignaturaModificar asignatura={asignatura} estudiantes={estudiantes}/>
                        </Modal>

                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <AsignaturaEliminar asignatura={asignatura} />
                        </Modal> */}

                        <hr />
                    </div>
                )
            }
        </div>
    );
}