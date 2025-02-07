import { modificarPlanta } from "@/lib/actions";

function PlantaModificar({ planta }) {

    return (
        <form action={modificarPlanta}>
            <input type="hidden" name="id" defaultValue={planta.id} />
            <input name='nombre' defaultValue={planta.nombre} />
            <input name='jefePlanta' defaultValue={planta.jefePlanta} />
            
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

export default PlantaModificar;
