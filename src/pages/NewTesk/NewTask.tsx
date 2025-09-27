import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTask } from "../../context/TaskContext";

export default function NewTask() {
  const { createTask } = useTask();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState<"Baixa" | "Media" | "Alta">("Baixa");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!titulo.trim()) {
      alert("Por favor, preencha o título da task.");
      return;
    }

    createTask(titulo.trim(), descricao.trim(), prioridade);

    // limpar campos e voltar para a lista
    setTitulo("");
    setDescricao("");
    setPrioridade("Baixa");

    navigate("/"); // volta para a Home após criar
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md overflow-hidden">
        <header className="bg-country-green px-6 py-5">
          <h1 className="text-white text-2xl font-bold">Cadastrar Nova Task</h1>
        </header>

        <main className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="titulo" className="block text-sm font-medium mb-1">
                Título <span className="text-red-500">*</span>
              </label>
              <input
                id="titulo"
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Ex: Ajustar layout do dashboard"
                required
                aria-required
              />
            </div>

            <div>
              <label htmlFor="descricao" className="block text-sm font-medium mb-1">
                Descrição
              </label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="w-full border rounded px-3 py-2 min-h-[96px] resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Detalhes da tarefa (opcional)"
              />
            </div>

            <div>
              <label htmlFor="prioridade" className="block text-sm font-medium mb-1">
                Prioridade
              </label>
              <select
                id="prioridade"
                value={prioridade}
                onChange={(e) => setPrioridade(e.target.value as "Baixa" | "Media" | "Alta")}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Baixa">Baixa</option>
                <option value="Media">Média</option>
                <option value="Alta">Alta</option>
              </select>
            </div>

            <div className="flex gap-3 justify-end items-center mt-4">
              <Link to="/" className="px-4 py-2 rounded border hover:bg-gray-50">
                Cancelar
              </Link>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Salvar Task
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
