import Link from "next/link";

interface CardProps {
  professor: string;
  turma: string;
  imagem: string;
  href: string;
}

export default function Card({ professor, turma, imagem, href }: CardProps) {
  return (
    <Link href={href} className="block">
      <div
        className="relative h-48 w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        style={{
          backgroundImage: `url(${imagem})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-semibold">{turma}</h3>
          <p className="text-sm opacity-90">{professor}</p>
        </div>
      </div>
    </Link>
  );
}
