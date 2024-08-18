import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDTO {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  @IsNotEmpty()
  startDate: string;

  @IsString()
  endDate: string;
}
