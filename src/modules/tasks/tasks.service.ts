import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { CreateTaskDTO } from './dto/task-request.dto';

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [
    {
      id: '1',
      title: 'Project Kickoff',
      description:
        'Initial meeting to discuss the project scope and deliverables.',
      status: true,
      startDate: '2024-08-01T09:00:00Z',
      endDate: '2024-08-01T10:00:00Z',
    },
    {
      id: '2',
      title: 'Requirement Analysis',
      description: 'Analyze the project requirements with stakeholders.',
      status: false,
      startDate: '2024-08-02T11:00:00Z',
      endDate: '2024-08-02T12:30:00Z',
    },
    {
      id: '3',
      title: 'Design Phase',
      description: 'Create wireframes and design mockups for the project.',
      status: true,
      startDate: '2024-08-03T13:00:00Z',
      endDate: '2024-08-04T15:00:00Z',
    },
    {
      id: '4',
      title: 'Development Sprint 1',
      description: 'Begin coding the initial features of the application.',
      status: false,
      startDate: '2024-08-05T09:00:00Z',
      endDate: '2024-08-09T17:00:00Z',
    },
    {
      id: '5',
      title: 'Testing and QA',
      description: 'Test the application and resolve bugs.',
      status: false,
      startDate: '2024-08-10T10:00:00Z',
      endDate: '2024-08-12T16:00:00Z',
    },
  ];

  getAllTasks(): Task[] {
    if (this.tasks.length == 0) {
      throw new NotFoundException('No Tasks found');
    }
    return this.tasks;
  }
   createTask(reqData:CreateTaskDTO):Task{
    if(reqData.id === ""){
        throw new BadRequestException('Id is required');
    }
    const newTask:Task = {
        ...reqData
    };
    this.tasks.push(newTask);
    return newTask;
   }

   getTaskById(id:string):Task{
    const data:Task = this.tasks.find((item)=> item.id === id);

    if(!data){
        throw new NotFoundException('Data not found')
    }
    return data;
   }

   getBystatus(status:boolean):Task{
    const data:Task = this.tasks.find((item)=> item.status === status);

    if(!data){
        throw new NotFoundException('Data not found')
    }
    return data;

   }
}
