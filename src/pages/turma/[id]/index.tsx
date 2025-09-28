import { GetServerSideProps } from "next";
import MenuProfessor from "@/app/components/Menus/menuProfessor";
import { useState } from "react";
import Link from "next/link";

type Props = {
  id: string;
  professor: string;
  turma: string;
};

export default function Turma({ id, professor, turma }: Props) {
  const [activeTab, setActiveTab] = useState("presenca");

  // Função para atualizar a tab ativa (será passada para o menu)
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Função para processar upload de arquivos
  const handleFileUpload = (files: File[]) => {
    files.forEach((file) => {
      // Validar tamanho do arquivo (10MB máximo)
      if (file.size > 10 * 1024 * 1024) {
        alert(`Arquivo ${file.name} é muito grande. Tamanho máximo: 10MB`);
        return;
      }

      // Validar tipo de arquivo
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "text/plain",
        "image/jpeg",
        "image/jpg",
        "image/png",
      ];

      if (!allowedTypes.includes(file.type)) {
        alert(`Tipo de arquivo ${file.type} não é suportado`);
        return;
      }

      // Aqui você pode implementar o upload real
      console.log(
        `Uploading file: ${file.name} (${(file.size / 1024 / 1024).toFixed(
          2
        )}MB)`
      );

      // Simular upload
      const formData = new FormData();
      formData.append("file", file);

      // Exemplo de como seria o upload real:
      // fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // }).then(response => response.json())
      //   .then(data => console.log('Upload successful:', data))
      //   .catch(error => console.error('Upload error:', error));
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "presenca":
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6 text-black uppercase">
              Lista de Presença
            </h2>

            {/* Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">Presentes: 25</p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <p className="text-red-800 font-semibold">Faltas: 2</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="text-blue-800 font-semibold">Total: 27</p>
              </div>
            </div>

            {/* Lista de Alunos */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {[
                { id: 1, nome: "ALUNO 1", rm: "12345", presente: true },
                { id: 2, nome: "ALUNO 2", rm: "12346", presente: false },
                { id: 3, nome: "ALUNO 3", rm: "12347", presente: true },
                { id: 4, nome: "ALUNO 4", rm: "12348", presente: true },
                { id: 5, nome: "ALUNO 5", rm: "12349", presente: true },
                { id: 6, nome: "ALUNO 6", rm: "12350", presente: true },
                { id: 7, nome: "ALUNO 7", rm: "12351", presente: false },
                { id: 8, nome: "ALUNO 8", rm: "12352", presente: true },
                { id: 9, nome: "ALUNO 9", rm: "12353", presente: true },
                { id: 10, nome: "ALUNO 10", rm: "12354", presente: true },
              ].map((aluno) => (
                <div
                  key={aluno.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 ${
                    aluno.presente
                      ? "border-yellow-200 bg-white"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-800">
                      {aluno.nome}
                    </span>
                    <span className="text-sm text-gray-600">
                      RM: {aluno.rm}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      // Aqui você pode implementar a lógica para alterar presença
                      console.log(`Alterar presença do ${aluno.nome}`);
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      aluno.presente
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    } transition-colors`}
                  >
                    {aluno.presente ? (
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Botões de Ação */}
            <div className="flex gap-4 mt-6">
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                Salvar Presença
              </button>
            </div>
          </div>
        );
      case "notas":
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Notas dos Alunos</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Sistema de notas será exibido aqui...
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left">Aluno</th>
                      <th className="px-4 py-2 text-left">Nota 1</th>
                      <th className="px-4 py-2 text-left">Nota 2</th>
                      <th className="px-4 py-2 text-left">Média</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">João Silva</td>
                      <td className="px-4 py-2">8.5</td>
                      <td className="px-4 py-2">9.0</td>
                      <td className="px-4 py-2 font-semibold">8.75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case "arquivos":
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Arquivos da Turma</h2>

            {/* Área de Upload */}
            <div className="mb-6">
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
                onDragOver={(e) => {
                  e.preventDefault();
                  e.currentTarget.classList.add(
                    "border-blue-400",
                    "bg-blue-50"
                  );
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  e.currentTarget.classList.remove(
                    "border-blue-400",
                    "bg-blue-50"
                  );
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.currentTarget.classList.remove(
                    "border-blue-400",
                    "bg-blue-50"
                  );
                  const files = Array.from(e.dataTransfer.files);
                  handleFileUpload(files);
                }}
                onClick={() => {
                  const input = document.createElement("input");
                  input.type = "file";
                  input.multiple = true;
                  input.accept =
                    ".pdf,.doc,.docx,.ppt,.pptx,.txt,.jpg,.jpeg,.png";
                  input.onchange = (e) => {
                    const files = Array.from(
                      (e.target as HTMLInputElement).files || []
                    );
                    handleFileUpload(files);
                  };
                  input.click();
                }}
              >
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-700">
                      Arraste arquivos aqui ou clique para selecionar
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Suporta PDF, DOC, DOCX, PPT, PPTX, TXT, JPG, PNG
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Tamanho máximo: 10MB por arquivo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lista de Arquivos */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Arquivos Enviados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        Aula 1 - Introdução
                      </h4>
                      <p className="text-sm text-gray-600">PDF • 2.5 MB</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Enviado em 15/01/2024
                      </p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        Exercícios
                      </h4>
                      <p className="text-sm text-gray-600">DOCX • 1.2 MB</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Enviado em 16/01/2024
                      </p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        Apresentação
                      </h4>
                      <p className="text-sm text-gray-600">PPTX • 5.8 MB</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Enviado em 17/01/2024
                      </p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-opacity">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <MenuProfessor activeTab={activeTab} onTabChange={handleTabChange} />
        <section className="mt-6">
          <h1 className="text-3xl font-bold mb-6">Turma {id.toUpperCase()}</h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Informações da Turma</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Código da Turma:</p>
                <p className="font-semibold">{id.toUpperCase()}</p>
              </div>
              <div>
                <p className="text-gray-600">Professor:</p>
                <p className="font-semibold">{professor}</p>
              </div>
              <div>
                <p className="text-gray-600">Nome da Turma:</p>
                <p className="font-semibold">{turma}</p>
              </div>
              <div>
                <p className="text-gray-600">Status:</p>
                <p className="font-semibold text-green-600">Ativa</p>
              </div>
            </div>
          </div>

          {renderTabContent()}
        </section>
        <footer className="text-center text-gray-500 flex justify-start mt-6">
          <Link
            href="/dashboard"
            className="bg-blue-900 text-white px-4 py-2 rounded-md"
          >
            Voltar
          </Link>
        </footer>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { id } = ctx.params as { id: string };
  const { professor, turma } = ctx.query as {
    professor?: string;
    turma?: string;
  };

  // Dados mockados baseados no ID
  const turmasData: Record<string, { professor: string; turma: string }> = {
    "1a": { professor: "João da Silva", turma: "Turma 1A" },
    "2b": { professor: "Maria Santos", turma: "Turma 2B" },
    "3c": { professor: "Pedro Oliveira", turma: "Turma 3C" },
  };

  const data = turmasData[id.toLowerCase()] || {
    professor: professor || "Professor não encontrado",
    turma: turma || "Turma não encontrada",
  };

  return {
    props: {
      id,
      professor: data.professor,
      turma: data.turma,
    },
  };
};
