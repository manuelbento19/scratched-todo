
export type ContainerProps = {
    lightMode: boolean;
}

export type TaskProps =  {
    id: string;
    title: string;
    created_at: Date;
    completed?: boolean;
}