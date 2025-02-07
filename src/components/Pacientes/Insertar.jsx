import { insertarPaciente } from "@/lib/actions";
// import { useEffect, useActionState, useId } from "react";


function PacienteInsertar({plantas}) {
    //{ medicinas }arriba esto

    // const formId = useId();

    // const [state, action, pending] = useActionState(insertarAsignatura, {});

    // useEffect(() => { 
    //     if(state.success) alert(state.success)
    //         document.getElementById(formId)?.closest('dialog')?.close()
    //  }, [state])

    return (
        <form action={insertarPaciente}>
            <input name="nombre" placeholder="Nombre" />
            <input type="date" name="fechaNacimiento" />
            <input name="plantaId" placeholder="PlantaId" />
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

            <button
                // disabled={pending}
                className="border-2 border-black disabled:bg-gray-200"
            >
                {/* {pending ? "Insertando..." : "Insertar asignatura"} */}
                Insertar
            </button>
        </form>
    );
}

export default PacienteInsertar;