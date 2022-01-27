export interface Track {
  title: string;
  id: string;
  tasks: Task[];
}

export interface Task {
  title: string;
  description: string;
  id: string;
  type: TaskType
}

export enum TaskType {
  TECH,
  SPYKE,
  UHD
}
