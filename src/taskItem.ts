export interface TaskItem {
  id: number;
  completed: boolean;
  title: string;
  description?: string | undefined;
}
