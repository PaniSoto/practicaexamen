import { modificarMedicina } from "@/lib/actions";

function MedicinaModificar({ medicina }) {

    return (
        <form action={modificarMedicina}>
            <input type="hidden" name="id" defaultValue={medicina.id} />
            <input name='nombre' defaultValue={medicina.nombre} />
            <input name='via' defaultValue={medicina.via} />
            
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

export default MedicinaModificar;