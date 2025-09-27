// src/pages/TaskDetail/index.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTask } from "../../context/TaskContext";

export default function TaskDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { tasks, updateTask, updateStatusTask, deleteTask } = useTask();

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
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-2/3 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-country-green mb-6">
          Editar Task
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Título
          </label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Descrição
          </label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            rows={4}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
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

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
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

        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-country-green text-white rounded-lg hover:bg-green-700"
          >
            Salvar
          </button>

          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Deletar
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
