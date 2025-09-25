export type Task = {
    id: string;
    descrição: string;
    prioridade : "Baixa" | "Media" | "Alta";
    status: "To Do" | "Doing" | "Done";
    creatAt: string;

}