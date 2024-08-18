import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { plainToInstance } from 'class-transformer';
import { TaskResponseDTO } from './dto/task-response.dto';
import { CreateTaskDTO } from './dto/task-request.dto';
import { Task } from './interfaces/task.interface';
//import { query } from 'express';
@Controller('tasks')
export class TasksController {
  constructor(private _taskService: TasksService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): TaskResponseDTO[] {
    const taskData = this._taskService.getAllTasks();

    return plainToInstance(TaskResponseDTO, taskData);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTaskDto : CreateTaskDTO) {
    return this._taskService.createTask(createTaskDto)
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findById(@Param() params:Task):TaskResponseDTO{
    const data = this._taskService.getTaskById(params.id);
    return plainToInstance(TaskResponseDTO,data)
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findByStatus(@Query() taskStatus:Task){
    const data = this._taskService.getBystatus(taskStatus.status);
    return plainToInstance(TaskResponseDTO,data)
  }
}
