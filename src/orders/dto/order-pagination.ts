import { IsEnum, IsOptional } from 'class-validator';

import { PaginationDto } from '../../common';
import { OrderStatusEnum } from '../enums/order-status.enum.';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusEnum)
  status: OrderStatusEnum;
}
