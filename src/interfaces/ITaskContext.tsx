import type { Task } from "../types/Task";

export default interface ITaskContext {
    tasks: Task[];
    createTask: (titulo: string, descricao: string, prioridade: Task["prioridade"]) => void;
}