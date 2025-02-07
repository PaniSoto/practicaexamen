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
                plantas.map(planta =>
                    <label key={planta.id}>
                        <input
                            type="checkbox"
                            name={`planta${planta.id}`}
                            value={planta.nombre} />

                        {planta.nombre}

                    </label>
                )
            }

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PacienteModidicar;