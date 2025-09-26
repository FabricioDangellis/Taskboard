export type Task = {
    id: string;
    titulo: string;
    descricao: string;
    prioridade : "Baixa" | "Media" | "Alta";
    status: "To Do" | "Doing" | "Done";
    createAt: string;
}