import { eliminarPaciente } from "@/lib/actions";

function PacienteEliminar({ paciente }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos</h1>
            <p>Nombre: {paciente.nombre}</p>
            <p>Fecha de nacimiento: {paciente.fechaNacimiento.toISOString().split('T')[0]}</p>
            <p>Id de planta: {paciente.plantaId}</p>
            <form action={eliminarPaciente}>
                <input type="hidden" name="id" defaultValue={paciente.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}

export default PacienteEliminar;