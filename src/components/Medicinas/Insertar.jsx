import { insertarMedicina } from "@/lib/actions";
// import { useEffect, useActionState, useId } from "react";

function MedicinaInsertar({pacientes}) {
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
            {
                pacientes.map(paciente =>
                    <label key={paciente.id}>
                        <input
                            type="checkbox"
                            name={`paciente${paciente.id}`}
                            value={paciente.nombre} />

                        {paciente.nombre}

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

export default MedicinaInsertar;