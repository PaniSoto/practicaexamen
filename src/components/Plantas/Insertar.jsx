import { insertarPlanta } from "@/lib/actions";
// import { useEffect, useActionState, useId } from "react";

function PlantaInsertar() {
    //{ medicinas }arriba esto

    // const formId = useId();

    // const [state, action, pending] = useActionState(insertarAsignatura, {});

    // useEffect(() => { 
    //     if(state.success) alert(state.success)
    //         document.getElementById(formId)?.closest('dialog')?.close()
    //  }, [state])

    return (
        <form action={insertarPlanta}>
            <input name="nombre" placeholder="Nombre" />
            <input name="jefePlanta" placeholder="jefePlanta" />
            {/* {
                medicinas.map(medicina =>
                    <label key={medicina.id}>
                        <input
                            type="checkbox"
                            name={`medicina${medicina.id}`}
                            value={medicina.nombre} />

                        {medicina.nombre}

                    </label>
                )
            } */}

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

export default PlantaInsertar;