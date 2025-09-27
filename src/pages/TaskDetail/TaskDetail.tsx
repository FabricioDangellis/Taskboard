// src/pages/TaskDetail/index.tsx
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useTask } from "../../context/TaskContext";
import { List } from "lucide-react";
import ConfirmModal from "../../components/ConfirmModal";

export default function TaskDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { tasks, updateTask, updateStatusTask, deleteTask } = useTask();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Busca a task pelo id
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="text-xl text-gray-700">Task não encontrada.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-country-green text-white rounded-lg"
        >
          Voltar
        </button>
      </div>
    );
  }

  // Estados locais para edição
  const [titulo, setTitulo] = useState(task.titulo);
  const [descricao, setDescricao] = useState(task.descricao);
  const [prioridade, setPrioridade] = useState(task.prioridade);
  const [status, setStatus] = useState(task.status);

  const handleSave = () => {
    updateTask(task.id, { titulo, descricao, prioridade });
    updateStatusTask(task.id, status);
    navigate("/"); // volta pra home depois de salvar
  };

  const handleDelete = () => {
    deleteTask(task.id);
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen relative py-6 px-4 bg-off-white">

      <header className="h-1/6 flex items-center gap-2 mb-6">
        <List className="w-8 h-8 text-sky-blue" />
        <h1 className="font-bold text-3xl text-gray-800">TaskBoard</h1>
      </header>

      <main className="flex justify-center mt-10 mb-10">

        <div className="w-2/4 min-w-[360px] relative bg-white shadow-lg rounded-xl overflow-hidden flex flex-col">

          <div className="w-full bg-sky-blue py-6 flex justify-center items-center">
            <h1 className="font-bold text-3xl text-white">Task</h1>
          </div>

          <div className="p-6">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Título
              </label>
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Descrição
              </label>
              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="w-full border rounded px-3 py-2 min-h-[96px] resize-vertical"
              />
            </div>

            <div className="flex gap-3 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">
                  Prioridade
                </label>
                <select
                  value={prioridade}
                  onChange={(e) =>
                    setPrioridade(e.target.value as "Baixa" | "Media" | "Alta")
                  }
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="Baixa">Baixa</option>
                  <option value="Media">Média</option>
                  <option value="Alta">Alta</option>
                </select>
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value as "To Do" | "Doing" | "Done")
                  }
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="To Do">To Do</option>
                  <option value="Doing">Doing</option>
                  <option value="Done">Done</option>
                </select>
              </div>

            </div>

            <div className="flex flex-col gap-3 mt-7">
              <div className="flex gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-1/2 px-4 py-2 text-center text-apple rounded-xl border border-apple hover:bg-apple hover:text-white transition delay-90 duration-200"                >
                  Excluir
                </button>

                <Link to="/" className="w-1/2 px-4 py-2 text-center text-gray-700 rounded-xl border border-gray-700 hover:bg-gray-700 hover:text-white transition delay-90 duration-200">
                  Cancelar
                </Link>
              </div>

              <button
                onClick={handleSave}
                className="w-full bg-sky-blue text-white px-4 py-2 rounded-xl hover:bg-sky-light-blue transition delay-90 duration-200"
              >
                Salvar
              </button>
            </div>

          </div>

        </div>

      </main>


      <footer className="absolute bottom-0 left-0 w-full my-4 mt-6 text-gray-500 text-sm text-center">
        2025 - Desenvolvido por <Link to="https://github.com/FabricioDangellis" target="_blank" rel="noopener noreferrer">@Fabrício D’angellis</Link>
      </footer>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        title="Confirmar exclusão"
        message={`Deseja realmente excluir a tarefa "${task.titulo}"?`}
      />
    </div>
  );
}
