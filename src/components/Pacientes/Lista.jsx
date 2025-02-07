import Modal from "@/components/Modal";
// import { obtenerAsignaturas, obtenerEstudiantes } from "@/lib/data";
import { obtenerPacientes } from "@/lib/data";
import Link from "next/link";
import PacienteInsertar from "./Insertar";
import PacienteModificar from "./Modificar";
import PacienteEliminar from "./Eliminar";

export default async function Pacientes() {
    const pacientes = await obtenerPacientes()
    // const estudiantes = await obtenerEstudiantes()
    //console.log(asignaturas);
    return (
        <div>

            <Modal openElement={<p className="inline border-2 border-black">Insertar Pacientes</p>}>
            <PacienteInsertar />
            </Modal>
           
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

                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                        <PacienteModificar paciente={paciente} />
                       </Modal>
                       
                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                        <PacienteEliminar paciente={paciente} />
                       </Modal>
                        
                        <hr />
                    </div>
                )
            }
        </div>
    );
}