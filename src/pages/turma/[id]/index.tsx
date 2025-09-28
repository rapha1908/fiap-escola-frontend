import Header from "@/app/components/Header";

export default function Turma({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Header />
        <section className="mt-6">
          <h1 className="text-3xl font-bold mb-6">Turma {id.toUpperCase()}</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Informações da Turma</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Código da Turma:</p>
                <p className="font-semibold">{id.toUpperCase()}</p>
              </div>
              <div>
                <p className="text-gray-600">Status:</p>
                <p className="font-semibold text-green-600">Ativa</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
