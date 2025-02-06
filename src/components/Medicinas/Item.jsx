import { obtenerMedicina } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Medicina({ id }) {
    const medicina = await obtenerMedicina(id)
    // console.log(medicina);

    if (!medicina) notFound()

    return (
        <div>
            <p> {medicina.nombre} </p>
            <p> {medicina.via} </p>
            
        </div>
    );
}

