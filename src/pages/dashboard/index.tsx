import MenuProfessor from "@/app/components/Menus/menuProfessor";
import Card from "../../app/components/Card";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <MenuProfessor />
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <Card
              professor="João da Silva"
              turma="Turma 1A"
              imagem="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
              href="/turma/1a"
            />
            <Card
              professor="Maria Santos"
              turma="Turma 2B"
              imagem="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop"
              href="/turma/2b"
            />
            <Card
              professor="Pedro Oliveira"
              turma="Turma 3C"
              imagem="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop"
              href="/turma/3c"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
