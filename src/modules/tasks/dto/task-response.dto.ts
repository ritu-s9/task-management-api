import { Exclude, Expose } from 'class-transformer';

export class TaskResponseDTO {
  @Expose()
  id: string;
  @Expose()
  title: string;
  @Expose()
  description: string;

  @Exclude()
  status: boolean;
  @Expose()
  startDate: string;
  @Expose()
  endDate: string;
}
