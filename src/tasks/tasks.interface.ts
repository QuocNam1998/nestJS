export interface Task {
  id: string;
  title: string;
  status?: TaskStatus;
  description?: string;
}

export type TaskStatus = 'OPEN' | 'DONE' | 'IN_PROGRESS';
