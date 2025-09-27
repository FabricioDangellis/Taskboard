import { Link } from "react-router-dom";
import type { Task as TaskType } from "../types/Task";
import { Pencil, Trash2 } from "lucide-react";
import { useTask } from "../context/TaskContext";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react";

type TaskProps = {
  task: TaskType;
};

export default function Task({ task }: TaskProps) {
  const { updateStatusTask, deleteTask } = useTask();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => {
    if (task.status === "Done") {
      updateStatusTask(task.id, "Doing");
    } else {
      updateStatusTask(task.id, "Done");
    }
  };

  const handleDelete = () => {
    deleteTask(task.id);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md flex items-center gap-4 border border-gray-200">
      <input
        type="checkbox"
        checked={task.status === "Done"}
        onChange={handleToggle}
        className="h-5 w-5 cursor-pointer accent-green-600"
      />

      <div className="flex-1">
        <h3 className={`font-bold text-base sm:text-lg ${
            task.status === "Done" ? "line-through text-gray-400" : ""
          }`}>
            {task.titulo}
        </h3>
        <p className={`text-sm sm:text-base text-gray-700 ${
            task.status === "Done" ? "line-through text-gray-400" : ""
          }`}>
            {task.descricao}
        </p>
      </div>

      <span
        className={`w-15 text-center text-off-white px-2 py-1 text-xs sm:text-sm rounded-full whitespace-nowrap ${task.prioridade === "Alta"
            ? "bg-apple"
            : task.prioridade === "Media"
              ? "bg-golden "
              : "bg-country-green"
          }`}
      >
        {task.prioridade}
      </span>

      <div className="flex gap-2">
        <Link to={`/task/${task.id}`} title="Editar tarefa">
          <Pencil className="w-6 sm:w-8 hover:text-blue-800" />
        </Link>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          title="Excluir tarefa"
          className=" hover:text-red-800"
        >
          <Trash2 className="w-6 sm:w-8" />
        </button>
      </div>

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
