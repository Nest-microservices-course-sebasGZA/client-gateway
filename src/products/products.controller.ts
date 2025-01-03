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
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PRODUCTS_SERVICE } from 'src/config';

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
  findAllProducts() {
    return this.productsClient.send({ cmd: 'find_all_products' }, {});
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
