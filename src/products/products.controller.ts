import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from '../common';
import { PRODUCTS_SERVICE } from '../config';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCTS_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  createProduct() {
    return 'Creates a product';
  }

  @Get()
  findAllProducts(@Query() paginationDto: PaginationDto) {
    return this.productsClient.send(
      { cmd: 'find_all_products' },
      paginationDto,
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return `Finds one by ${id}`;
  }

  @Delete('id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return `Deletes a function by ${id}`;
  }

  @Patch('id')
  patchProduct(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return `Updates a product by id ${id} ${JSON.stringify(body)}`;
  }
}
