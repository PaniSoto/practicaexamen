import { obtenerPaciente } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Paciente({ id }) {
    const paciente = await obtenerPaciente(id)
    // console.log(paciente);

    if (!paciente) notFound()

    return (
        <div key={paciente.id}>
            <p> {paciente.nombre} </p>
            <p> {paciente.fechaNacimiento.toISOString().split('T')[0]}</p>
            <p> {paciente.plantaId} </p>
        </div>
    );
}

