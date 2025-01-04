import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatusEnum } from '../enums/order-status.enum.';

export class StatusDto {
  @IsEnum(OrderStatusEnum)
  @IsOptional()
  status: OrderStatusEnum;
}
