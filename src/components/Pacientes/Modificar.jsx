import { modificarPaciente } from "@/lib/actions";

function PacienteModidicar({ paciente, plantas }) {

    return (
        <form action={modificarPaciente}>
            <input type="hidden" name="id" defaultValue={paciente.id} />
            <input name='nombre' defaultValue={paciente.nombre} />
            <input type="date" name='fechaNacimiento' defaultValue={paciente.fechaNacimiento} />
            <input type="number" name='plantaId' defaultValue={paciente.plantaId} />

            <input name='nombre' defaultValue={plantas.nombre} />

            {
                <select name="plantaId">
                    <option value="">-- Seleccione una planta --</option>
                    {plantas.map(planta => (
                        <option key={planta.id} value={planta.id}>
                            {planta.nombre}
                        </option>
                    ))}
                </select>
            }

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PacienteModidicar;