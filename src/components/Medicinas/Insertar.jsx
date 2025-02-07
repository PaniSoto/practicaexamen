import { insertarMedicina } from "@/lib/actions";
// import { useEffect, useActionState, useId } from "react";

function MedicinaInsertar() {
    //{ medicinas }arriba esto

    // const formId = useId();

    // const [state, action, pending] = useActionState(insertarAsignatura, {});

    // useEffect(() => { 
    //     if(state.success) alert(state.success)
    //         document.getElementById(formId)?.closest('dialog')?.close()
    //  }, [state])

    return (
        <form action={insertarMedicina}>
            <input name="nombre" placeholder="Nombre" />
            <input name="via" placeholder="Via/a" />
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

export default MedicinaInsertar;