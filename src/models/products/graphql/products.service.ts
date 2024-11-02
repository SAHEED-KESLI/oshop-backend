import { BadRequestException, Injectable } from "@nestjs/common";
import { FindManyProductArgs, FindUniqueProductArgs } from "./dtos/find.args";
import { PrismaService } from "src/common/prisma/prisma.service";
import { CreateProductInput } from "./dtos/create-product.input";
import { UpdateProductInput } from "./dtos/update-product.input";

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductInput: CreateProductInput) {
    try {
      return await this.prisma.product.create({
        data: createProductInput,
      });
    } catch (error) {
      throw new BadRequestException(
        "Unique Constraint failed on Product Name",
        error.message
      );
    }
  }

  findAll(args: FindManyProductArgs) {
    return this.prisma.product.findMany(args);
  }

  findOne(args: FindUniqueProductArgs) {
    return this.prisma.product.findUnique(args);
  }

  update(updateProductInput: UpdateProductInput) {
    const { id, ...data } = updateProductInput;
    return this.prisma.product.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueProductArgs) {
    return this.prisma.product.delete(args);
  }
}
