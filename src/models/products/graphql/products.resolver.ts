import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ProductsService } from "./products.service";
import { Product } from "./entity/product.entity";
import { FindManyProductArgs, FindUniqueProductArgs } from "./dtos/find.args";
import { CreateProductInput } from "./dtos/create-product.input";
import { UpdateProductInput } from "./dtos/update-product.input";
import { PrismaService } from "src/common/prisma/prisma.service";

@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly prisma: PrismaService
  ) {}

  // @UseGuards(GqlAuthGuard)
  @Mutation(() => Product)
  createProduct(@Args("createProductInput") args: CreateProductInput) {
    return this.productsService.create(args);
  }

  @Query(() => [Product], { name: "products" })
  findAll(@Args() args: FindManyProductArgs) {
    return this.productsService.findAll(args);
  }

  @Query(() => Product, { name: "product" })
  findOne(@Args() args: FindUniqueProductArgs) {
    return this.productsService.findOne(args);
  }

  // @UseGuards(GqlAuthGuard)
  @Mutation(() => Product)
  async updateProduct(@Args("updateProductInput") args: UpdateProductInput) {
    return this.productsService.update(args);
  }

  // @UseGuards(GqlAuthGuard)
  @Mutation(() => Product)
  async removeProduct(@Args() args: FindUniqueProductArgs) {
    return this.productsService.remove(args);
  }
}
