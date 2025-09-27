import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTask } from "../../context/TaskContext";
import { List } from "lucide-react";

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
    <div className="w-full min-h-screen relative py-6 px-4 bg-off-white">

      <header className="h-1/6 flex items-center gap-2 mb-6">
        <List className="w-8 h-8 text-sky-blue" />
        <h1 className="font-bold text-3xl text-gray-800">TaskBoard</h1>
      </header>

      <main className="flex justify-center mt-10 mb-10">

        <div className="w-2/4 min-w-[360px] relative bg-white shadow-lg rounded-xl overflow-hidden flex flex-col">

          <div className="w-full bg-sky-blue py-6 flex justify-center items-center">
            <h1 className="font-bold text-3xl text-white">New Task</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 p-6">
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
                placeholder="Título da tarefa"
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

            <div className="flex gap-3 justify-center items-center mt-4">
              <Link to="/" className="w-1/2 px-4 py-2 text-center text-apple rounded-xl border border-apple hover:bg-apple hover:text-white transition delay-90 duration-200">
                Cancelar
              </Link>
              <button
                type="submit"
                className="w-1/2 bg-sky-blue text-white px-4 py-2 rounded-xl hover:bg-sky-light-blue transition delay-90 duration-200"
              >
                Salvar Task
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="absolute bottom-0 left-0 w-full my-4 mt-6 text-gray-500 text-sm text-center">
        2025 - Desenvolvido por <Link to="https://github.com/FabricioDangellis" target="_blank" rel="noopener noreferrer">@Fabrício D’angellis</Link>
      </footer>

    </div>
  );
}
