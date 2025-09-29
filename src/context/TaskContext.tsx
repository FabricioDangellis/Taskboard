import { createContext, useContext, useEffect, useState } from "react";
import type { Task } from "../types/Task";
import type ITaskContext from "../interfaces/ITaskContext";
import { v4 as uuidv4 } from "uuid";
import Toast from "../components/Toast";

const TaskContext = createContext<ITaskContext | undefined>(undefined);

type TaskProviderProps = {
    children: React.ReactNode;
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        try {
            const stored = localStorage.getItem("tasks");
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

    const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
        setToast({ message, type });
    };


    //Salvando as tasks no localstorage sempre que houver alguma mudança
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

    //Criando uma nova task
    const createTask = (titulo: string, descricao: string, prioridade: Task["prioridade"]) => {
        const newTask: Task = {
            id: uuidv4(),
            titulo,
            descricao,
            prioridade,
            status: "To Do",
            createdAt: new Date().toISOString(),
        };
        setTasks((prev) => [...prev, newTask]);
        showToast("Tarefa criada com sucesso!", "success");
    };

    //Editando uma task
    const updateTask = (id: string, update: Partial<Omit<Task, "id" | "createAt">>) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, ...update } : task
            )
        );
        showToast("Tarefa atualizada!", "success");
    };

    //Deletando uma task
    const deleteTask = (id: string) => {
        setTasks((prev) =>
            prev.filter((task) =>
                task.id !== id
            )
        )
        showToast("Tarefa excluída!", "success");
    };

    //Atualizando o status de uma task
    const updateStatusTask = (id: string, newStatus: "To Do" | "Doing" | "Done") => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, status: newStatus } : task
            )
        )
    };


    return (
        <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask, updateStatusTask }}>
            {children}
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </TaskContext.Provider>
    );
}

export const useTask = () => {
    const context = useContext(TaskContext);

    if (context === undefined) {
        throw new Error("O provider não está por volta da App!");
    }

    return context;
}