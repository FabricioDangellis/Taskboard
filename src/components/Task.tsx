import { Link } from "react-router-dom";
import type { Task as TaskType } from "../types/Task";
import { Pencil, Trash2 } from "lucide-react";
import { useTask } from "../context/TaskContext";

type TaskProps = {
  task: TaskType;
};

export default function Task({ task }: TaskProps) {
  const { updateStatusTask, deleteTask } = useTask();

  const handleToggle = () => {
    if (task.status === "Done") {
      updateStatusTask(task.id, "Doing");
    } else {
      updateStatusTask(task.id, "Done");
    }
  };

  const handleDelete = () => {
    if (confirm("Deseja realmente excluir esta tarefa?")) {
      deleteTask(task.id);
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md flex items-center gap-4 border border-gray-200">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={task.status === "Done"}
        onChange={handleToggle}
        className="h-5 w-5 cursor-pointer accent-green-600"
      />

      {/* Conteúdo principal */}
      <div className="flex-1">
        <h3 className="font-bold text-lg">{task.titulo}</h3>
        <p className="text-gray-600 text-sm">{task.descricao}</p>
      </div>

      {/* Prioridade */}
      <span
        className={`px-2 py-1 text-xs rounded-full ${
          task.prioridade === "Alta"
            ? "bg-red-200 text-red-800"
            : task.prioridade === "Media"
            ? "bg-yellow-200 text-yellow-800"
            : "bg-green-200 text-green-800"
        }`}
      >
        {task.prioridade}
      </span>

      {/* Ações */}
      <div className="flex flex-col gap-2 items-center">
        <Link to={`/task/${task.id}`} title="Editar tarefa">
          <Pencil className="w-6 h-6 text-blue-600 hover:text-blue-800" />
        </Link>

        <button
          type="button"
          onClick={handleDelete}
          title="Excluir tarefa"
          className="text-red-600 hover:text-red-800"
        >
          <Trash2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
