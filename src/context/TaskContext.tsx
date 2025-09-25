import { createContext, useContext, useState } from "react";
import type { Task } from "../types/Task";
import type ITaskContext from "../interfaces/ITaskContext";

const TaskContext = createContext<ITaskContext | undefined>(undefined);

type TaskProviderProps = {
    children: React.ReactNode;
}

export const TaskProvider = ({children}: TaskProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
        <TaskContext.Provider value={{tasks}}>
            {children}
        </TaskContext.Provider>
    );
}

export const useTask = () => {
    const context = useContext(TaskContext);

    if(context === undefined) {
        throw new Error("O provider não está por volta da App!");
    }

    return context;
}