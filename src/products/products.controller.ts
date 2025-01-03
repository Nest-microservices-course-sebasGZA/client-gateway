import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProduct() {
    return 'Creates a product';
  }

  @Get()
  findAllProducts() {
    return 'Finds all products';
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
