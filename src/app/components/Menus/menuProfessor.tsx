import { useRouter } from "next/router";

interface MenuProfessorProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export default function MenuProfessor({
  activeTab = "presenca",
  onTabChange,
}: MenuProfessorProps) {
  const router = useRouter();
  const isTurmaPage = router.pathname.includes("/turma/");

  const tabs = [
    { id: "presenca", label: "Presença" },
    { id: "notas", label: "Notas" },
    { id: "arquivos", label: "Arquivos" },
    { id: "aula", label: "Descrição de Aula" },
  ];

  return (
    <header>
      <nav className="flex justify-between items-center px-4 bg-gray-500 h-20 rounded-lg">
        <h1>Dashboard</h1>
        <input
          type="text"
          placeholder="Search"
          className="rounded-lg bg-amber-50 text-black p-2 w-2xs"
        />
        <button>Logout</button>
      </nav>

      {isTurmaPage && (
        <div className="bg-white shadow-md mt-4 rounded-lg">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange?.(tab.id)}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
