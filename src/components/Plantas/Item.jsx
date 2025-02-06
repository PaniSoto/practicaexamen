import { obtenerPlanta } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Planta({ id }) {
    const planta = await obtenerPlanta(id)
    // console.log(planta);

    if (!planta) notFound()

    return (
        <div>
            <p> {planta.nombre} </p>
            <p> {planta.jefePlanta} </p>
            
        </div>
    );
}

