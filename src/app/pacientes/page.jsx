import Pacientes from "@/components/Pacientes/Lista";
import { Suspense } from "react";


function PaginaPacientes() {

    return (
        <div>
            <h1 className="text-3xl font-bold">LISTA DE PACIENTES</h1>

            <Suspense fallback={"Obteniendo pacientes ..."}>
                <Pacientes />
            </Suspense>
        </div>
    )

}

export default PaginaPacientes;