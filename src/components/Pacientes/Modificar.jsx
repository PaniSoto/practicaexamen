import { modificarPaciente } from "@/lib/actions";

function PacienteModidicar({ paciente }) {

    return (
        <form action={modificarPaciente}>
            <input type="hidden" name="id" defaultValue={paciente.id} />
            <input name='nombre' defaultValue={paciente.nombre} />
            <input type="date" name='fechaNacimiento' defaultValue={paciente.fechaNacimiento} />
            <input type="number" name='plantaId' defaultValue={paciente.plantaId} />
            
            {/* <input name='num_horas' defaultValue={medicina.num_horas} /> */}

            {/* {
                estudiantes.map(estudiante =>
                    <label key={estudiante.id}>
                        <input
                            type="checkbox"
                            name={`estudiante${estudiante.id}`}
                            value={estudiante.nombre}
                            defaultChecked={IDs.includes(estudiante.id)} />

                        {estudiante.nombre}

                    </label>
                )
            } */}

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PacienteModidicar;