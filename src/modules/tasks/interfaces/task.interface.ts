export interface Task {
  id: string;
  title: string;
  description?: string;
  status: boolean;
  startDate: string;
  endDate?: string;
  //assignee: string;
}
