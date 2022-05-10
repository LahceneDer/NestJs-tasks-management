import { TaskStatus } from './../task.model';
import { BadRequestException, PipeTransform } from '@nestjs/common';
export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];
  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isValidStatus(value)) {
      throw new BadRequestException(`${value} is an invalid status`);
    }
    console.log('value', value);
    return value;
  }

  private isValidStatus(status: any) {
    const idx = this.allowedStatus.indexOf(status);
    return idx !== -1;
  }
}
