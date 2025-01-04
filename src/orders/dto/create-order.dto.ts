import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { OrderStatusEnum } from '../enums/order-status.enum.';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  totalAmount: number;

  @IsNumber()
  @IsPositive()
  totalItems: number;

  @IsEnum(OrderStatusEnum, {
    message: `Possible status values: ${JSON.stringify(OrderStatusEnum)}`,
  })
  status: OrderStatusEnum = OrderStatusEnum.PENDING;

  @IsBoolean()
  @IsOptional()
  paid: boolean = false;
}
