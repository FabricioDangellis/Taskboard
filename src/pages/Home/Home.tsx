import { Link } from "react-router-dom";
import Task from "../../components/Task";
import { useTask } from "../../context/TaskContext";
import { List, Plus } from "lucide-react";

export default function Home() {
  const { tasks } = useTask();

  const priorityTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { Alta: 1, Media: 2, Baixa: 3 };
    return priorityOrder[a.prioridade] - priorityOrder[b.prioridade];
  });

  return (
    <div className="w-full min-h-screen relative py-6 px-4 bg-off-white">

      <header className="h-1/6 flex items-center gap-2 mb-6">
        <List className="w-8 h-8 text-sky-blue" />
        <h1 className="font-bold text-3xl text-gray-800">TaskBoard</h1>
      </header>

      <main className="flex justify-center mt-10 mb-10">

        <div className="w-2/3 min-w-[360px] relative bg-white shadow-lg rounded-xl overflow-hidden flex flex-col">

          <header className="w-full bg-sky-blue py-6 flex justify-center items-center">
            <h1 className="font-bold text-3xl text-white">TaskBoard</h1>
          </header>

          <section className="p-6 pb-28">
            <div className="mb-5">
              <h2 className="text-2xl font-semibold mb-0.5">My Tasks</h2>
              <span className="text-gray-500">{tasks.length} tasks</span>

            </div>

            {tasks.length === 0 ? (
              <p className="text-gray-500 text-center">
                Nenhuma tarefa cadastrada.
              </p>
            ) : (
              <div className="space-y-4">
                {priorityTasks.map((task) => (
                  <Task key={task.id} task={task} />
                ))}
              </div>
            )}
          </section>

          <div className="absolute bottom-6 right-6 w-10 h-10 m-3 bg-sky-blue rounded-xl shadow hover:bg-sky-light-blue transition">
            <Link className="w-10 h-10 flex items-center justify-center" to={"/task/new"}>
              <Plus color="white" />
            </Link>
          </div>

        </div>

      </main>

      <footer className="absolute bottom-0 left-0 w-full my-4 mt-6 text-gray-500 text-sm text-center">
        2025 - Desenvolvido por <Link to="https://github.com/FabricioDangellis" target="_blank" rel="noopener noreferrer">@Fabrício D’angellis</Link>
      </footer>

    </div>
  );
}
