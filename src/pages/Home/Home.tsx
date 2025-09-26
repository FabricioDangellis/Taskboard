import { Link } from "react-router-dom";
import Task from "../../components/Task";
import { useTask } from "../../context/TaskContext";
import { Plus } from "lucide-react";

export default function Home() {
  const { tasks } = useTask();

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-2/3 min-w-[360px] bg-white shadow-lg rounded-xl overflow-hidden">

        {/* Header */}
        <header className="w-full bg-country-green py-6 flex justify-center items-center">
          <h1 className="font-bold text-3xl text-white">TaskBoard</h1>
        </header>

        {/* Conteúdo */}
        <section className="p-6">
          <h2 className="text-2xl font-semibold mb-4">My Tasks</h2>

          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center">
              Nenhuma tarefa cadastrada.
            </p>
          ) : (
            <div className="space-y-4">
              {tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </div>
          )}
        </section>

        <div className="flex justify-end">
          <div className="w-10 h-10 m-3 bg-country-green rounded-xl">
            <Link className="w-10 h-10 flex items-center justify-center" to={"/task/new"}>
              <Plus color="white" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
