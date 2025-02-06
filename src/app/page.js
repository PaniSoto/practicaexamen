import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/medicinas" className="block">MEDICINAS</Link>
      <Link href="/pacientes" className="block">PACIENTES</Link>
      <Link href="/plantas" className="block">PLANTAS</Link>
    </div>
  );
}
